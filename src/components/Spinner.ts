import { CliRenderer, TextRenderable, type Timeout } from "@opentui/core"


export class Spinner {
  frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
  ui: TextRenderable;
  timer: Timeout

  constructor(renderer: CliRenderer) {
    this.ui = new TextRenderable(renderer, {
      id: "spinner",
      content: "",
      fg: "#59FFC5"
    });
  }

  start() {
    let i = 0;
    this.timer = setInterval(() => {
      this.ui.content = `${this.frames[i]} Just reading...`
      i = (i + 1) % this.frames.length
    }, 50)
  }

  stop() {
    this.ui.content = ""
    clearInterval(this.timer)
  }
}
