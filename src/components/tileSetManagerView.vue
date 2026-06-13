<template>
	<div class="tileSetWrapper">
		<input type="file" name="Upload Sprite" accept="image/*" @change="onFileSelected">

		<div v-for="loadedTileSet,index in store.loadedTileSets"
			class="tileSetList">
			<h1 class="tileSetName"
			@click="selectTileSet(loadedTileSet)">
			{{loadedTileSet.path}} 
			</h1>
			<TileSetView class="tileSetContainer"
				@selected-tile="processSelectedCell"
				v-if="selectedTileSet==loadedTileSet.tileSetId"
				title="TileSet"
				:tile-set="loadedTileSet"/>
			
		</div>
	</div>
	
</template>
<script setup lang="ts">


	import type {Tile} from '../types/tile'
	import type {TileSet} from '../types/tileSet'
	import { useCurrentSelection } from '../stores/currentSelection'
	import {debug} from '../utils/logger'
	import {loadSprite} from '../utils/loadTileSet'
	import TileSetView from "../components/tileSetView.vue"
	import {ref} from 'vue'

	const store = useCurrentSelection()
	let selectedTile =  ref<Tile | null>(null)
	let selectedTileSet = ref<number | null>(null)
	const spriteSize: number = 16
	let tileSet =ref<TileSet | null>(null)

	function processSelectedCell(newSelectedTile: Tile) {
		debug("current tile-set tile: ",selectedTile)
		selectedTile.value = newSelectedTile
		store.currentTileSetTile = newSelectedTile
	}

	function selectTileSet(tileSet: TileSet){
    	debug("select tileset",)
    	if (selectedTileSet.value == tileSet.tileSetId) {
    		selectedTileSet.value = null
    		return
    	}
    	selectedTileSet.value = tileSet.tileSetId
    }

	async function onFileSelected(event: Event) {
		let nextTileSetIndex: number
  		const input = event.target as HTMLInputElement
  		const file = input.files?.[0]
	
  		if (file) {
    		debug(file)
    		
    		if (store.loadedTileSets) {
    			nextTileSetIndex = store.loadedTileSets.length
    		}else {
    			nextTileSetIndex = 0
    		}
    		const tempTileSet = await loadSprite(file, spriteSize, nextTileSetIndex)
    		tileSet.value = tempTileSet
    		store.loadedTileSets.push(tempTileSet)
    		selectedTileSet.value = nextTileSetIndex
  		}
  	}
	
</script>
<style>
	.tileSetWrapper{
		overflow: auto;
	}
	.tileSetList {
		max-width: 100%;
	}

	h1 { 
		position: sticky; 
		top: 0;
	}
</style>