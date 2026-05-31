import {Kinds} from './types'

export interface Tile {
	kind: Kinds.Tile,
	tileSetId: number,
	index: number,
	visible: boolean
	x: number,
	y: number
}