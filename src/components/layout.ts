import { BoxRenderable, type CliRenderer } from "@opentui/core";
import conversation from "./conversation";


export default (renderer: CliRenderer) => {
  const layout = new BoxRenderable(renderer, {
    width: "100%",
    height: "100%",
    borderStyle: "double",
    padding: 1,
    flexDirection: "column",
  })

  layout.add(conversation(renderer))
  return layout
}
