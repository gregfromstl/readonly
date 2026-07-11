import { $ } from 'bun'

/**
 * Prints the program's current working directory.
 */
export default async (): Promise<string> => {
  return await $`pwd`.text()
}
