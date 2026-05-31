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
	import type {TileMap} from '../types/tileMap'
	import {Tool} from '../types/types'
	import { useCurrentSelection } from '../stores/currentSelection'
	import {ref} from 'vue'
	import {debug} from '../utils/logger'
	import {createTileMap} from '../utils/createTileMap'

	const selectedTile = ref<Tile | null>(null)

	const store = useCurrentSelection()

	const tileMap = createTileMap(16, 10, 10)

	function processSelectedCell(newValue: Tile) {
		debug("current tile map cell: ", selectedTile)

		if (store.currentTool === Tool.Brush) {
			debug("Brush")
			selectedTile.value = newValue
			store.currentTileMapIndex = newValue.index
		}

		if (store.currentTool === Tool.Eraser) {
			debug("Erase")
			selectedTile.value = newValue
			store.currentTileMapIndex = newValue.index
		}
	}


	function brushTileMapTile(index: number, tileMap: TileMap, tileSetIndex: number, tileSet: number) {
		const tileDesciptor = tileMap.tiles[index]

		if (!tileDesciptor) return undefined

		tileDesciptor.tileSetIndex = index


	}

</script>

<style>
	
	.tileMapView {
		background-color: lightgreen;
		display: grid;
		place-items: center;
	}

</style>