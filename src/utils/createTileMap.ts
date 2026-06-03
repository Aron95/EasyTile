import type {TileMap} from  "../types/tileMap"
import  {Kinds} from "../types/types"


export function createTileMap(tileSize: number, mapSizeX: number, mapSizeY: number): TileMap{

	let tileDescriptors = []
	for (let i: number = 0; i < mapSizeX*mapSizeY; i++) {
    	tileDescriptors.push({
    		index: i,
    		tileSetId: null,
    		tileSetIndex: null,
    	})
	}

	return {
		kind: Kinds.TileMap,
		tileSize: tileSize,
		mapSizeX: mapSizeX,
		mapSizeY: mapSizeY, 
		image:null,
		tiles: tileDescriptors
	}

}


