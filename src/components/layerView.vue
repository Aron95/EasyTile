<template>
	<div class="layer-wrapper">
		<h1> Layers</h1>
		<div v-for="(layer,layerIndex) in currentMapLayers"
			:key="layerIndex">
			<div class="{layer-row}"
				:class="{'selected-layer-row':store.currentLayer === layerIndex}"
				@click="setLayer(layerIndex)">
				<input type="checkbox" name="visible" @click="toogleLayerVisiblity(layerIndex)" checked>
				<h1> layer {{layerIndex}}</h1>
			</div>
		</div>
	</div>
</template>
<script setup lang='ts'>
	import {computed} from 'vue'
	import {debug} from '../utils/logger'
	import { useCurrentSelection } from '../stores/currentSelection'
	
	const store = useCurrentSelection()

	const currentMapLayers = computed(() => {
		if (store.tileMaps) {
			return store.tileMaps[store.currentTileMap].layers
		} else {
			return []
		}
	})


	function setLayer(layerIndex: number) {
		store.currentLayer = layerIndex
		debug("currentLayer: ",layerIndex)
	}

	function toogleLayerVisiblity(layerIndex: number) {
		store.tileMaps[store.currentTileMap].layers[layerIndex].visible = !store.tileMaps[store.currentTileMap].layers[layerIndex].visible
	
		debug("toggeled layer: ", layerIndex)
		debug("new layer visiblty: ", store.tileMaps[store.currentTileMap].layers[layerIndex].visible)
	}

</script>
<style>

	.layer-row {
		border: 1px solid black;
      	box-sizing: border-box;
	}

	.selected-layer-row {
    	border: 1px solid blueviolet;
    	background-color: color-mix(in srgb, blueviolet 50%, transparent);
	}
	
</style>