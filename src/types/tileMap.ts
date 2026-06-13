import {Kinds} from './types'
import type {Tile} from './tile'


export interface TileMap {
	kind: Kinds.TileMap
	tileSize: number
	uuid:string
	mapSizeX: number
	mapSizeY: number
	name: string
	image: string | null
	layers : Layer[]
}

export interface Layer {
	tiles: TileMapDescriptor
	visible: bool
}


export interface TileMapDescriptor {
	tileSetTileIndex : number | null // index of tile in til set
	tileSetId: number| null // tile set id
}