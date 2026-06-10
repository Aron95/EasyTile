import type {TileMap} from  "../types/tileMap"
import  {Kinds} from "../types/types"
import { useCurrentSelection } from '../stores/currentSelection'


export function createTileMap(tileSize: number, mapSizeX: number, mapSizeY: number): TileMap{

	let tileDescriptors = []
	for (let i: number = 0; i < mapSizeX*mapSizeY; i++) {
    	tileDescriptors.push({
    		index: i,
    		tileSetId: null,
    		tileSetIndex: null,
    	})
	}

	const tileMap = {
		kind: Kinds.TileMap,
		tileSize: tileSize,
		mapSizeX: mapSizeX,
		mapSizeY: mapSizeY, 
		image:null,
		tiles: tileDescriptors
	}
	const store = useCurrentSelection()

	store.tileMap = tileMap;
	return tileMap;
}


