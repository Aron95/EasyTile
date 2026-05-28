import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {Tool} from '../types/types'

export const useCurrentSelection = defineStore('useCurrentSelection', () => {
  const currentTool = ref(Tool.Brush)
  const currentTileMapIndex = ref(0)
  const currentTileSetIndex = ref(0)
  const loadedTileSets = ref([])

  return { currentTool, currentTileMapIndex, currentTileSetIndex, loadedTileSets }
})