import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Tool } from '../types/types'
import type { Tile } from '../types/tile'
import type { TileSet } from '../types/tileSet'
import type { TileMap } from '../types/tileMap'

export const useCurrentSelection = defineStore('useCurrentSelection', () => {
  const currentTool = ref(Tool.Brush)
  const currentTileMapTile = ref<Tile | null>(null)
  const currentTileSetTile = ref<Tile | null>(null)
  const loadedTileSets = ref<TileSet[]>([])
  const tileMap = ref<TileMap | null>(null)

  return { currentTool, currentTileMapTile, currentTileSetTile, loadedTileSets, tileMap}
})