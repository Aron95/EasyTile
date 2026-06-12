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

	const layer = {'tiles':tileDescriptors,
					'visabil': true}

	const tileMap = {
		kind: Kinds.TileMap,
		uuid: crypto.randomUUID(),
		tileSize: tileSize,
		mapSizeX: mapSizeX,
		mapSizeY: mapSizeY, 
		image:null,
		layers: [layer]
	}
	const store = useCurrentSelection()

	store.tileMap = tileMap;
	return tileMap;
}


