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

	const props = defineProps<{
		title: string,
		tileContainer: TileSet| TileMap | null,
		selectedTile: Tile | null
	}>()

	const currentTileSize = ref(50)
	const emits = defineEmits(['selectedTile'])
	const displayScale = 4
	
	const gridStyleContainer = computed(() => {

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
        	    backgroundSize: `${image.width * displayScale}px ${image.height * displayScale}px`,
        	    width:`${image.width * displayScale}px`
        	}
        		
        	}

        if (container.kind === Kinds.TileMap) {
        	debug("Grid says its Map")
        	const w = container.mapSizeX * container.tileSize * displayScale
        	const h = container.mapSizeY * container.tileSize * displayScale
        	return {
        		gridTemplateColumns: `repeat(${Math.floor(container.mapSizeX)}, ${container.tileSize*displayScale}px)`,
        		gridAutoRows: `${container.tileSize * displayScale}px`,
        		backgroundImage: container.image ? `url(${container.image})` : undefined,
        		backgroundSize: `${w}px ${h}px`,
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
		max-width: 100%;
		overflow: auto;
	}

	.grid-container {
		display : grid;
		image-rendering: pixelated; 
	}

</style>