<template>
  <div class="container">
    <toolView class="toolView"/>
    <TileSetManagerView class="tileSetManagerView" title="TileSets"/>
    <layerView class="layerView" title="Layers"/>
    <tileMapView class="tileMapView"/>
  </div>
</template>


<script setup lang="ts">
import tileMapView from './components/tileMapView.vue'
import TileSetManagerView from "./components/tileSetManagerView.vue"
import toolView from './components/toolView.vue'
import layerView from './components/layerView.vue'

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

  .layerView {
    grid-area: layerView;
  }
  .container { 
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(0,0.80fr) minmax(0,0.20fr);
    grid-template-rows: minmax(0,0.10fr) minmax(0,0.45fr) minmax(0,0.45fr);
    grid-template-areas: 
        "toolView toolView"
        "tileMapView layerView"
        "tileMapView tileSetManagerView";

  }


</style>
