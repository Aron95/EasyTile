import type {TileMap} from  "../types/tileMap"
import  {Kinds} from "../types/types"
import { useCurrentSelection } from '../stores/currentSelection'


export function createTileMap(tileSize: number, mapSizeX: number, mapSizeY: number): TileMap{

	

	const layer = {'tiles':createDescriptor(mapSizeX,mapSizeY),
					'visible': true}
	const layer_2 = {'tiles':createDescriptor(mapSizeX,mapSizeY),
					'visible': true}

	const layer_3 = {'tiles':createDescriptor(mapSizeX,mapSizeY),
					'visible': true}

	const tileMap = {
		kind: Kinds.TileMap,
		uuid: crypto.randomUUID(),
		tileSize: tileSize,
		mapSizeX: mapSizeX,
		mapSizeY: mapSizeY, 
		image:null,
		layers: [layer,layer_2,layer_3]
	}
	const store = useCurrentSelection()


	//todo push if tilemaps not empty
	store.tileMaps = [tileMap];

	return tileMap;
}


function createDescriptor(mapSizeX:number, mapSizeY:number){
	let tileDescriptors = []

	for (let i: number = 0; i < mapSizeX*mapSizeY; i++) {
	    	tileDescriptors.push({
	    		index: i,
	    		tileSetId: null,
	    		tileSetIndex: null,
	    	})
		}
	return tileDescriptors
}

