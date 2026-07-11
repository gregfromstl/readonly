import { BoxRenderable, ScrollBoxRenderable, Text, type CliRenderer } from "@opentui/core";
import type { Message } from "ollama";
import AssistantMessage from "./AssistantMessage";

export default class Messages {
  ui: BoxRenderable;
  renderer: CliRenderer;
  messages: Array<Message> = [];

  constructor(renderer: CliRenderer, systemPrompt?: string) {
    this.renderer = renderer;
    this.ui = new ScrollBoxRenderable(this.renderer, {
      width: "100%",
      stickyScroll: true,
      stickyStart: "bottom",
      contentOptions: {
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 1
      }
    })
    
    if (systemPrompt) {
      this.add({ role: "system", content: systemPrompt })
    }
  }

  get() {
    return this.messages
  }

  addSilently(message: Message) {
    console.info(`Adding to context: ${message.content}`)
    this.messages.push(message)
  }

  add(message: Message) {
    this.messages.push(message)
    for (const line of message.content.split('\n')) {
      switch (message.role) {
        case "user": 
          this.ui.add(Text({ content: line }))
          break;
        case "assistant":
          this.ui.add(AssistantMessage(this.renderer, line))
          break;
        default:
          throw new Error(`Unknown role for displaying in conversation: ${message.role}`)
      }
    }
  }
}
