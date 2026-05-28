<template>
	<div class="toolView">
		<h1> Hier kommt toolView</h1>
		<button @click="setDraw()">
			Draw
		</button>
		<button @click="setErase()">
			Erase
		</button>
	</div>
</template>
<script setup lang="ts">
	import { debug } from '@/utils/logger';
	import { useCurrentSelection } from '../stores/currentSelection'
	import {Tool} from '../types/types'
	
	const store = useCurrentSelection()


	function setDraw(){
		debug("set tool to Brush")
		store.currentTool = Tool.Brush
	}

	function setErase(){
		debug("set tool to Eraser")
		store.currentTool = Tool.Eraser
	}


</script>
<style scoped>

	button {
		 height: 40px;
		 width: 40px;
	}
	.toolView{
		background-color:  lightblue;
		display: flex;
	}

</style>