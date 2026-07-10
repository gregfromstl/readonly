
import { CliRenderer, TextareaRenderable } from "@opentui/core";

export default (renderer: CliRenderer, onSubmit: (value: string) => Promise<void>) => {
  const input = new TextareaRenderable(renderer, {
    width: "100%",
    height: 5,
    backgroundColor: "#1a1a1a",
    onSubmit: async () => {
      const text = input.plainText
      input.clear()
      await onSubmit(text)
    },
    keyBindings: [{ name: "return", ctrl: false, action: "submit" }]
  })
  input.focus()
  return input
}
