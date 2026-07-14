import { BoxRenderable, Text, CliRenderer, Box } from "@opentui/core";

export default (renderer: CliRenderer, content: string) => {
  const UserMessageContainer = new BoxRenderable(renderer, {
    width: "100%",
    flexDirection: "column",
    marginBottom: 1,
  })

  UserMessageContainer.add(Text({ content: `> ${content}`, fg: "#85CB33" }))

  return UserMessageContainer
}
