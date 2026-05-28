<template>
	<div class="tileSetView">
		<h1> Hier kommt tileSetView mit dem title {{title}}</h1>
		<input type="file" name="Upload Sprite" accept="image/*" @change="onFileSelected">
		<Grid @selected-cell="processSelectedCell"
			title="TileMapGrid"  
			:tileSet="tileSet" 
			:selected-cell="selectedCell"/>
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
	import {loadSprite} from '../utils/spriteLoader'


	defineProps<{
		title: string,
	}>()

	const store = useCurrentSelection()
	let selectedCell = ref(0)
	const spriteSize: number = 16
	let tileSet =ref<TileSet | null>(null)


	function processSelectedCell(newValue: number) {
		debug("current tile set cell: ",selectedCell)
		selectedCell.value = newValue
		store.currentTileSetIndex = newValue
	}

	async function onFileSelected(event: Event) {
  		const input = event.target as HTMLInputElement
  		const file = input.files?.[0]
  		if (file) {
    		debug(file)
    		tileSet.value = await loadSprite(file, spriteSize, 1)
  		}
}

</script>
<style>
	.tileSetView {
		background-color: lightgray;
	}

</style>