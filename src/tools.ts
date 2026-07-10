import type { Tool } from "ollama";

const read: Tool = {
  type: 'function',
  function: {
    name: 'read_file',
    description: 'Read a local file\'s contents',
    parameters: {
      type: 'object',
      required: ['path'],
      properties: {
        path: {
          type: 'string',
          description: 'The absolute path of the file to read'
        }
      }
    }
  }
}

const pwd: Tool = {
  type: 'function',
  function: {
    name: 'pwd',
    description: 'Print the current working directory'
  }
}

export default [read, pwd]
