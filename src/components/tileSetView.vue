<template>

	<div class="tileSetView">
		<Grid class="gridContainer"
			@selected-tile="processSelectedCell"
			title="TileMapGrid"
			:tileContainer="tileSet"
			:selectedTile="selectedTile"/>
	</div>
</template>
<script setup lang="ts">

	import Grid from "./grid.vue"
	import type {Tile} from '../types/tile'
	import type {TileSet} from '../types/tileSet'
	import  {testArray} from '../testData/testData'
	import { useCurrentSelection } from '../stores/currentSelection'
	import {debug} from '../utils/logger'

	import {ref} from 'vue'
	import {loadSprite} from '../utils/loadTileSet'


	const props = defineProps<{
		title: string,
		tileSet: TileSet
	}>()

	const store = useCurrentSelection()
	let selectedTile =  ref<Tile | null>(null)
	const spriteSize: number = 16

	function processSelectedCell(newSelectedTile: Tile) {
		debug("current tile-set tile: ",selectedTile)
		selectedTile.value = newSelectedTile
		store.currentTileSetTile = newSelectedTile
	}

 


</script>
<style>
	.tileSetView {
		background-color: lightgray;
	}

	.gridContainer {
		grid-area: gridContainer;

	}
	.tilSetName {
		grid-area: tileSetName;
	}

	.tileSetView {
		grid-template-columns: minmax(0, 0.20fr)minmax(0, 0.80fr);
		grid-template-rows: 0.08fr, 0.92fr;
		grid-template-areas: 
			"tilSetName ."
			"gridContainer gridContainer"
	}

</style>