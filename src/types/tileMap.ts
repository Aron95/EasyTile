import {Kinds} from './types'
import type {Tile} from './tile'


export interface TileMap {

	kind: Kinds.TileMap,
	tileSize: number,
	mapSizeX: number,
	mapSizeY: number, 
	tiles : TileMapDescriptor[]
}

export interface TileMapDescriptor {
	index : number
	tilSetId: number
	tileSetIndex: number 
}