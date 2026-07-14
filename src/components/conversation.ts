import { BoxRenderable, type CliRenderer } from "@opentui/core"
import input from "./input";
import ask from "../actions/ask";
import Messages from "./messages";
import grabError from "../errors/inspect"
import { Spinner } from "./Spinner";

export default (renderer: CliRenderer) => {
  const conversation = new BoxRenderable(renderer, {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  })

  const systemPrompt = `
    You are a helpful coding assistant tasked with answering questions about the current codebase.

    Use your available tools to understand the questions asked of you and answer them with as much expertise as possible.

    When you do not know, say so.
  `

  const spinner = new Spinner(renderer)

  const messages = new Messages(renderer, systemPrompt)
  const onSubmit = async (value: string) => {
    messages.add({ role: 'user', content: value })
    spinner.start()
    const error = await ask(messages).catch(grabError)
    spinner.stop()
    if (error) console.error(error)
  }

  conversation.add(messages.ui)

  conversation.add(spinner.ui)
  conversation.add(input(renderer, onSubmit))

  return conversation
}
