import { $ } from 'bun'

export default async (): Promise<string> => {
  return await $`pwd`.text()
}
