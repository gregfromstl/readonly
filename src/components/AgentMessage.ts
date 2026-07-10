import { MarkdownRenderable, RGBA, SyntaxStyle, type CliRenderer } from "@opentui/core";

const syntaxStyle = SyntaxStyle.fromStyles({
  "markup.heading.1": { fg: RGBA.fromHex("#58A6FF"), bold: true },
  "markup.list": { fg: RGBA.fromHex("#FF7B72") },
  "markup.raw": { fg: RGBA.fromHex("#A5D6FF") },
  default: { fg: RGBA.fromHex("#E6EDF3") },
})

export default (renderer: CliRenderer, content: string) => {
  const AgentMessage = new MarkdownRenderable(renderer, {
    syntaxStyle,
    content
  })

  return AgentMessage
}
