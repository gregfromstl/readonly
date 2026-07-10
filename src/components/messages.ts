import { BoxRenderable, ScrollBoxRenderable, Text, type CliRenderer } from "@opentui/core";
import type { Message } from "ollama";

export default class Messages {
  ui: BoxRenderable;
  messages: Array<Message> = [];

  constructor(renderer: CliRenderer) {
    this.ui = new ScrollBoxRenderable(renderer, {
      width: "100%",
      stickyScroll: true,
      stickyStart: "bottom",
      contentOptions: {
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 1
      }
    })
  }

  get() {
    return this.messages
  }

  addSilently(message: Message) {
    this.messages.push(message)
  }

  add(message: Message) {
    console.log("Adding", message.content);
    this.messages.push(message)
    for (const line of message.content.split('\n')) {
      this.ui.add(Text({ content: line }))
    }
  }
}
