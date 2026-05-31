import type {TileMap} from  "../types/tileMap"
import  {Kinds} from "../types/types"


export function createTileMap(tileSize: number, mapSizeX: number, mapSizeY: number): TileMap{

	let tileDescriptors = []
	for (let i: number = 0; i < mapSizeX*mapSizeY; i++) {
    	tileDescriptors.push({
    		index: i,
    		tilSetId: 0,
    		tileSetIndex: 0,
    	})
	}

	return {
		kind: Kinds.TileMap,
		tileSize: tileSize,
		mapSizeX: mapSizeX,
		mapSizeY: mapSizeY, 
		tiles: tileDescriptors
	}

}


