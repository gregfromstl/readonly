import { BoxRenderable, Text, type CliRenderer } from "@opentui/core";
import conversation from "./conversation";
import pwd from "../actions/pwd";


export default (renderer: CliRenderer) => {
  const layout = new BoxRenderable(renderer, {
    width: "100%",
    height: "100%",
    borderStyle: "double",
    padding: 1,
    flexDirection: "column",
  })

  layout.add(conversation(renderer))

  pwd().then(dir => layout.add(Text({ content: dir, fg: "#696969", alignSelf: "flex-end" })))

  return layout
}
