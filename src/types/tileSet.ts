import {Kinds} from './types'
import type {Tile} from './tile'

export interface TileSet {
	kind: Kinds.TileSet,
	path: string,
	tileSize: number,
	tiles: Tile [],
	image: Image
	tileSetId: number
}