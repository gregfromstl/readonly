import { $ } from 'bun'

/**
 * Reads the provided file.
 *
 * @param {string} file - The absolute filepath to read
 */
export default async (file: string): Promise<string> => {
  return await $`cat ${file}`.text()
}
