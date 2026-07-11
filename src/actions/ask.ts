import ollama, { type Message, type ToolCall } from 'ollama'
import tools from '../tools.ts'
import read from './read.ts'
import type Messages from '../components/messages.ts'
import pwd from './pwd.ts'
import ls from './ls.ts'
import grabError from '../errors/inspect.ts'

const tool = async (toolCall: ToolCall): Promise<string> => {
  switch (toolCall.function.name) {
    case "read_file":
      return await read(toolCall.function.arguments["path"])
    case "pwd":
      return await pwd()
    case "ls":
      return await ls()
    default:
      throw new Error("Unknown tool")
  }
}

const queryModel = async (messages: Message[]) => {
  const response = await ollama.chat({
    model: 'qwen3.5',
    messages,
    tools,
    stream: false,
    think: false
  })

  return response
}

/**
 * Feed the latest set of messages (context) to the assistant.
 * It will execute any necessary tools in a loop and add their results to the messages array.
 * When done, the function will resolve.
 */
const ask = async (messages: Messages): Promise<void> => {
  const response = await queryModel(messages.get());

  const toolCalls = response.message.tool_calls ?? []
  if (toolCalls.length > 0) {
    for (const call of toolCalls) {
      const toolResult = await tool(call).catch(grabError);
      messages.addSilently({ role: 'tool', tool_name: call.function.name, content: toolResult })
    }

    await ask(messages)
  } else {
    messages.add(response.message);
  }
}
export default ask
