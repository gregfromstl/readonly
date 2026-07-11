import { $ } from 'bun';

/**
 * List information about files in a directory.
 *
 * @param {string} [path="."] - The path to the directory.
 */
export default async (path: string = ".") => {
    return await $`ls -lA ${path}`.text();
};

