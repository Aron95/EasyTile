<template>
	<div class="tileSetView">
		<h1> Hier kommt tileSetView mit dem title {{title}}</h1>
		<input type="file" name="Upload Sprite" accept="image/*" @change="onFileSelected">
		<Grid @selected-tile="processSelectedCell"
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


	defineProps<{
		title: string,
	}>()

	const store = useCurrentSelection()
	let selectedTile =  ref<Tile | null>(null)
	const spriteSize: number = 16
	let tileSet =ref<TileSet | null>(null)


	function processSelectedCell(newSelectedTile: Tile) {
		debug("current tile-set tile: ",selectedTile)
		selectedTile.value = newSelectedTile
		store.currentTileSetTile = newSelectedTile
	}

	async function onFileSelected(event: Event) {
  		const input = event.target as HTMLInputElement
  		const file = input.files?.[0]
  		if (file) {
    		debug(file)
    		const tempTileSet = await loadSprite(file, spriteSize, 1)
    		tileSet.value = tempTileSet
    		store.loadedTileSets.push(tempTileSet)
  		}


}

</script>
<style>
	.tileSetView {
		background-color: lightgray;
	}

</style>