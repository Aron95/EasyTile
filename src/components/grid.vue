<template>
	<div class="grid-wrapper">
    	<div class="grid-container" 
        	:style="gridStyleContainer">
        	<div v-for="(tile, tileIndex) in tileSet?.tiles"
            	:key="tileIndex"
            	@click="$emit('selectedCell', tileIndex)"
            	:class="{'selected': tileIndex === selectedCell}">
        	</div>
    	</div>
	</div>
</template>

<script setup lang="ts">
	import type {TileSet} from '../types/tileSet'
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
		tileSet: TileSet| null,
		selectedCell: number
	}>()

	const currentTileSize = ref(50)
	const emits = defineEmits(['selectedCell'])

	
	const gridStyleContainer = computed(() => {
    		if (props.tileSet?.image) {
        	const image = props.tileSet.image
        	return {
        	    gridTemplateColumns: `repeat(${Math.floor(image.width / props.tileSet.tileSize)}, ${props.tileSet.	tileSize}px)`,
        	    gridAutoRows: `${props.tileSet.tileSize}px`,
        	    backgroundImage: `url(${image.src})`,
        	    backgroundSize: '100%'
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
    	border: 1px solid rgba(0,0,0,0.1);
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
	}

</style>