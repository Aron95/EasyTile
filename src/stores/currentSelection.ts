import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Tool } from '../types/types'
import type { Tile } from '../types/tile'
import type { TileSet } from '../types/tileSet'

export const useCurrentSelection = defineStore('useCurrentSelection', () => {
  const currentTool = ref(Tool.Brush)
  const currentTileMapTile = ref<Tile | null>(null)
  const currentTileSetTile = ref<Tile | null>(null)
  const loadedTileSets = ref<TileSet[]>([])

  return { currentTool, currentTileMapTile, currentTileSetTile, loadedTileSets }
})