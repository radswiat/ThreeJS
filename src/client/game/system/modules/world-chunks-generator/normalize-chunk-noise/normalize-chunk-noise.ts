// @ts-ignore
import NormalizeWorker from 'worker-loader!./workers/normalize/normalize.worker'
import gameLoaderStore from '@shared/stores/gameLoader'

import { ChunkCoordinated } from '../world-chunks-generator.types'

let cachedMaxNoise = null
let cachedMinNoise = null

export default function normalizeChunkNoise(chunks: ChunkCoordinated): Promise<ChunkCoordinated> {
  return new Promise((resolve) => {
    const worker = new NormalizeWorker()
    worker.postMessage({
      chunks: JSON.stringify(chunks),
      maxNoise: cachedMaxNoise,
      minNoise: cachedMinNoise,
    })
    worker.onmessage = ({ data }: { data: ChunkCoordinated }) => {
      if (data.done) {
        cachedMaxNoise = data.maxNoise
        cachedMinNoise = data.minNoise
        resolve(JSON.parse(data.data))
      } else {
        gameLoaderStore.increment()
      }
    }
  })
}
