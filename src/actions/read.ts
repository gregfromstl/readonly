import { $ } from 'bun'

export default async (file: string): Promise<string> => {
  return await $`cat ${file}`.text()
}
