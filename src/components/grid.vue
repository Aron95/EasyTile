<template>
	<div class="grid-wrapper">
    	<div class="grid-container" 
        	:style="gridStyleContainer">
        	<div v-for="(tile, tileIndex) in tileContainer?.tiles"
            	:key="tileIndex"
            	@click="$emit('selectedTile', tile)"
            	:class="{'selected': tileIndex === selectedTile?.index}"
                class="grid-cell">
        	</div>
    	</div>
	</div>
</template>

<script setup lang="ts">
	import type {TileSet} from '../types/tileSet'
	import type {TileMap} from '../types/tileMap'
	import type {Tile} from '../types/tile'
	import {Kinds} from '../types/types'
	import {debug} from '../utils/logger'


	import {computed, ref} from 'vue'

	/**
 	* Renders a grid overlay on top of a spritesheet image.
 	* Column count is derived from image width / tile size.
 	* Rows are created implicitly via grid-auto-rows.
 	* 
 	* @prop title - Name of the grid
 	* @prop tileSet - The tileset containing the image and tile array
 	* @prop selectedCell - Index of the currently selected cell
 	* @emits selectedCell - Fires the index of the clicked cell
 	*/
	const props = defineProps<{
		title: string,
		tileContainer: TileSet| TileMap | null,
		selectedTile: Tile | null
	}>()

	const currentTileSize = ref(50)
	const emits = defineEmits(['selectedTile'])

	
	const gridStyleContainer = computed(() => {
		const displayScale = 4

		const container = props.tileContainer
		debug("test	", props.tileContainer, "kind", props.tileContainer?.kind)
  		if (!container){ 
  			debug("Grid says no container")
  			return undefined
  		}

		if (container.kind === Kinds.TileSet) {
			debug("Grid says its TileSet")
        	const image = container.image
        	return {
        	    gridTemplateColumns: `repeat(${Math.floor(image.width / container.tileSize)}, ${container.tileSize* displayScale}px)`,
        	    gridAutoRows: `${props.tileContainer.tileSize* displayScale}px`,
        	    backgroundImage: `url(${image.src})`,
        	    backgroundSize: `${image.width * displayScale}px ${image.height * displayScale}px`
        	}
        		
        	}

        if (container.kind === Kinds.TileMap) {
        	debug("Grid says its Map")
        	return {
        		gridTemplateColumns: `repeat(
        			${Math.floor(container.mapSizeX)}, ${container.tileSize*displayScale}px)`,
        		gridAutoRows: `${props.tileContainer.tileSize* displayScale}px`,
        	}
        }
    	
	})

	//todo: repair zoom 
	function onZoom(event: WheelEvent) {
		// todo: add max an min check for maximal and minimal zoom.
		currentTileSize.value = currentTileSize.value + event.deltaY 	
	}
	
	
</script>

<style>

	.grid-cell {
      	border: 1px solid black;
      	box-sizing: border-box
	}

	.selected {
    	border: 2px solid yellow;
	}

	.grid-wrapper {
		max-width: 500px;
    	max-height: 400px;
		overflow: auto;
	}

	.grid-container {
		display : grid;
		image-rendering: pixelated; 
	}

</style>