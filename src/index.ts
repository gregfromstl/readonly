import { ConsolePosition, createCliRenderer } from "@opentui/core";
import layout from "./components/layout";

const renderer = await createCliRenderer({
  consoleOptions: {
    position: ConsolePosition.TOP,
    sizePercent: 30,
  }
})

renderer.console.toggle()

renderer.root.add(layout(renderer));

