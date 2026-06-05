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
	tileSetTileIndex : number | null // index of tile in til set
	tileSetId: number| null // tile set id
}