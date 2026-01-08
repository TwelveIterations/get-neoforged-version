/**
 * Unit tests for src/version.ts
 */
import { jest } from '@jest/globals'
import { findNeoForgedVersion } from '../src/version.js'

// Mock node-fetch
const mockFetch = jest.fn()
jest.unstable_mockModule('node-fetch', () => ({
  default: mockFetch
}))

describe('version.ts', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('Throws when version is missing', async () => {
    await expect(
      findNeoForgedVersion({
        artifact: 'neoforge',
        version: ''
      })
    ).rejects.toThrow('version is not a string')
  })

  it('Throws when artifact is missing', async () => {
    await expect(
      findNeoForgedVersion({
        artifact: '',
        version: '21.11.*'
      })
    ).rejects.toThrow('artifact is not a string')
  })
})
