<template>
	<div class="layer-wrapper">
		<h1> Layers</h1>
		<div v-for="layer,layerIndex in currentMapLayers">
			<h1> layer row</h1>
		</div>
	</div>
</template>
<script setup lang='ts'>
	import {computed} from 'vue'
	import { useCurrentSelection } from '../stores/currentSelection'
	const store = useCurrentSelection()

	const currentMapLayers = computed(() => {
		if (store.tileMaps) {
			return store.tileMaps[store.currentTileMap].layers
		} else {
			return []
		}
	})

</script>
<style>
	
</style>