

<script setup lang="ts">
import tileMapView from './components/tileMapView.vue'
import tileSetView from './components/tileSetView.vue'
import toolView from './components/toolView.vue'

</script>

<template>
  <div class="container">
    <toolView class="toolView"/>
    <tileSetView class="tileSetView" title="Pups"/>
    <tileMapView class="tileMapView"/>
  </div>
</template>

<style scoped>
  .toolView {
    grid-area : toolView;
  }

  .tileSetView {
    grid-area: tileSetView;
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
        "tileMapView tileSetView";

  }


</style>
