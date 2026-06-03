import {Kinds} from './types'
import type {Tile} from './tile'


export interface TileMap {

	kind: Kinds.TileMap,
	tileSize: number,
	mapSizeX: number,
	mapSizeY: number, 
	image: string | null
	tiles : TileMapDescriptor[]
}

export interface TileMapDescriptor {
	index : number | null
	tileSetId: number| null
	tileSetIndex: number| null
}