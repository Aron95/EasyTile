<template>
	<div class="tileMapView">
		<Grid @selected-cell="processSelectedCell"
			title="TileMapGrid"  
			:tileSet="testArray"  
			:selected-cell="selectedCell"/>
	</div>
</template>
<script setup lang="ts">
	import Grid from "./grid.vue"
	import type {Tile} from '../types/tile'
	import {Tool} from '../types/types'
	import {testArray} from '../testData/testData'
	import { useCurrentSelection } from '../stores/currentSelection'
	import {ref} from 'vue'
	import {debug} from '../utils/logger'

	const selectedCell = ref(0)

	const store = useCurrentSelection()

	function processSelectedCell(newValue: number) {
		debug("current tile map cell: ",selectedCell)

		if (store.currentTool === Tool.Brush)
			debug("Brush")			
			selectedCell.value = newValue
			store.currentTileMapIndex = newValue

		if (store.currentTool === Tool.Eraser)
			debug("Erase")
			selectedCell.value = newValue
			store.currentTileMapIndex = newValue
	}


</script>

<style>
	
	.tileMapView {
		background-color: lightgreen;
		display: grid;
		place-items: center;
	}

</style>