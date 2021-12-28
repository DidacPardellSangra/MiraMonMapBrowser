import { expose, Transfer } from './threads/threads.js';
import { getDecoder } from './compression/index.js';

async function decode(fileDirectory, buffer) {
  const decoder = await getDecoder(fileDirectory);
  const decoded = await decoder.decode(fileDirectory, buffer);
  return Transfer(decoded);
}

expose(decode);
