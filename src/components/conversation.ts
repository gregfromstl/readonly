import { BoxRenderable, type CliRenderer } from "@opentui/core"
import input from "./input";
import ask from "../actions/ask";
import Messages from "./messages";

export default (renderer: CliRenderer) => {
  const conversation = new BoxRenderable(renderer, {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  })

  const messages = new Messages(renderer)
  const onSubmit = async (value: string) => {
    messages.add({ role: 'user', content: value })
    await ask(messages)
  }

  conversation.add(messages.ui)
  conversation.add(input(renderer, onSubmit))

  return conversation
}
