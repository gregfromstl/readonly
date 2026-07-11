import type { Tool } from "ollama";

const read: Tool = {
  type: 'function',
  function: {
    name: 'read_file',
    description: 'Read a local file\'s contents.',
    parameters: {
      type: 'object',
      required: ['path'],
      properties: {
        path: {
          type: 'string',
          description: 'The path of the file to read.'
        }
      }
    }
  }
}

const pwd: Tool = {
  type: 'function',
  function: {
    name: 'pwd',
    description: 'Print the current working directory.'
  }
}

const ls: Tool = {
  type: 'function',
  function: {
    name: 'ls',
    description: 'List information about files in a directory.'
  }
}

export default [read, pwd, ls]
