<template>
  <div class="container">
    <toolView class="toolView"/>
    <TileSetManagerView class="tileSetManagerView" title="Pups"/>
    <tileMapView class="tileMapView"/>
  </div>
</template>


<script setup lang="ts">
import tileMapView from './components/tileMapView.vue'
import TileSetManagerView from "./components/tileSetManagerView.vue"
import toolView from './components/toolView.vue'

</script>



<style scoped>
  .toolView {
    grid-area : toolView;
  }

  .tileSetManagerView {
    grid-area: tileSetManagerView;
  }

  .tileMapView {
    grid-area: tileMapView;
  }

  .container { 
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(0,0.80fr) minmax(0,0.20fr);
    grid-template-rows: 0.10fr 0.90fr;
    grid-template-areas: 
        "toolView toolView"
        "tileMapView tileSetManagerView";

  }


</style>
