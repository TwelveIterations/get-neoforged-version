import * as core from '@actions/core'
import { findNeoForgedVersion } from './version.js'

export async function run(): Promise<void> {
  try {
    const artifact: string = core.getInput('artifact', {
      required: true
    })
    const version: string = core.getInput('version', {
      required: true
    })

    const result = await findNeoForgedVersion({ artifact, version })

    if (result) {
      core.setOutput('version', result)
    } else {
      core.setFailed(`No matching NeoForged ${artifact} version found`)
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
