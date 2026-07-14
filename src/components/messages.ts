import { BoxRenderable, ScrollBoxRenderable, type CliRenderer } from "@opentui/core";
import type { Message } from "ollama";
import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";

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

  add(message: Message) {
    this.messages.push(message)
    switch (message.role) {
      case "user":
        this.ui.add(UserMessage(this.renderer, message.content))
        break;
      case "assistant":
        this.ui.add(AssistantMessage(this.renderer, message.content))
        break;
      case "system":
      case "tool":
        break; // Do not display tool or system prompts
      default:
        throw new Error(`Unknown role for displaying in conversation: ${message.role}`)
    }
  }
}
