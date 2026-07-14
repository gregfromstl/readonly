import { BoxRenderable, MarkdownRenderable, RGBA, SyntaxStyle, type CliRenderer } from "@opentui/core";

const syntaxStyle = SyntaxStyle.fromStyles({
  "markup.heading.1": { fg: RGBA.fromHex("#58A6FF"), bold: true },
  "markup.list": { fg: RGBA.fromHex("#FF7B72") },
  "markup.raw": { fg: RGBA.fromHex("#A5D6FF") },
  default: { fg: RGBA.fromHex("#E6EDF3") },
})

export default (renderer: CliRenderer, content: string) => {
  const AssistantMessageContainer = new BoxRenderable(renderer, {
    width: "100%",
    paddingX: 2,
    paddingY: 1,
    marginBottom: 1,
    borderStyle: "single",
    borderColor: "#696969",
    border: ["top", "bottom"]
  })

  const AssistantMessageContent = new MarkdownRenderable(renderer, {
    syntaxStyle,
    content
  })

  AssistantMessageContainer.add(AssistantMessageContent);

  return AssistantMessageContainer
}
