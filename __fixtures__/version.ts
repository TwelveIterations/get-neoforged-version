import { jest } from '@jest/globals'

export const findNeoForgedVersion =
  jest.fn<typeof import('../src/version.js').findNeoForgedVersion>()
