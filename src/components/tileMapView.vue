<template>
	<div class="tileMapView">
		<Grid @selected-tile="processSelectedCell"
			title="TileMapGrid"
			:tileContainer="tileMap"
			:selectedTile="selectedTile"/>
	</div>
</template>
<script setup lang="ts">
	import Grid from "./grid.vue"
	import type {Tile} from '../types/tile'
	import type {TileSet} from '../types/tileSet'
	import type {TileMap} from '../types/tileMap'
	import type {TileMapDescriptor} from '../types/tileMap'
	import {Tool} from '../types/types'
	import { useCurrentSelection } from '../stores/currentSelection'
	import {ref} from 'vue'
	import { reactive } from 'vue'
	import { watch } from "vue"
	import {debug} from '../utils/logger'
	import {createTileMap} from '../utils/createTileMap'

	const selectedTile = ref<Tile | null>(null)

	const store = useCurrentSelection()

	const tileMap = reactive(createTileMap(16, 10, 10))

	let tileCanvas = ref<HTMLCanvasElement | null>(null)

	function processSelectedCell(newSelectedTile: Tile,tileIndex: number) {
		debug("current tile map cell: ", selectedTile)
		selectedTile.value = newSelectedTile
		store.currentTileMapTile = newSelectedTile
		editTile(tileIndex)		
	}


	function editTile(tileIndex: number) {
		if(store.currentTool === Tool.Brush){
			debug("Paint on tile Index:", tileIndex)
			if (!store.currentTileSetTile) return
			tileMap.layers[store.currentLayer].tiles[tileIndex] = {
				'tileSetTileIndex' : store.currentTileSetTile.index,
				'tileSetId': store.currentTileSetTile.tileSetId,
				}
		}else if(store.currentTool === Tool.Eraser){
			tileMap.layers[store.currentLayer].tiles[tileIndex] = {
				'tileSetTileIndex' : null,
				'tileSetId': null,
				}

		}else {
			console.log("tool not implemented for edit:",store.currentTool)
			return
		}
	}



	watch(tileMap, () => {
		debug("tile changed")
		tileMap.image = renderMap(tileMap)
	})


	function renderMap(tileMap: TileMap){
		const tileSetList: TileSet[] = store.loadedTileSets
		const { tileSize, mapSizeX, mapSizeY, layers } = tileMap

    	const canvas = document.createElement('canvas')
    	canvas.width  = mapSizeX * tileSize
    	canvas.height = mapSizeY * tileSize
		
		const ctx = canvas.getContext('2d')!
    	ctx.imageSmoothingEnabled = false 
    	for (let i = 0; i < layers.length; i++){
    		if(!layers[i].visabil) continue;
    		const tiles = layers[i].tiles

    		for (let i = 0; i < tiles.length; i++) {
      			const currentMapTile = tiles[i]
      			if (!currentMapTile) continue
      			if (currentMapTile.tileSetTileIndex === null || currentMapTile.tileSetId === null) continue
			
      			const set = tileSetList[currentMapTile.tileSetId]
      			if (!set) continue
	
	
      			const src = set.tiles[currentMapTile.tileSetTileIndex]
      			if (!src) continue
			
      			const dx = (i % mapSizeX) * tileSize
      			const dy = Math.floor(i / mapSizeX) * tileSize
  			
      			ctx.drawImage(
      			  set.image,
      			  src.x, src.y, set.tileSize, set.tileSize,   // Quelle im Tileset
      			  dx, dy, tileSize, tileSize                  // Ziel auf der Map
      			)
    		}
    	}	

    return canvas.toDataURL()

	}

</script>

<style>
	
	.tileMapView {
		background-color: lightgreen;
		display: grid;
		place-items: center;
	}

</style>