import type {TileMapDescriptor} from '../types/tileMap'

import {useCurrentSelection} from '../stores/currentSelection'

/*
save() creates the following:

creates folder as the following :
1. Tilesets saved as .png.
2. Saves the TileMap as a .json.
   If layer is type "wall", tileSet is empty and walkable is filled and vice versa.
   Layers are in the order as in the editor.
   name of map will be set at save point. (later you can open multiple TileMaps and every Tilemap gets a name)
   Example:

   
{
    "name": string,
    "tileSize": int,
    "mapSizeX: int,
    "layers": [
        {
          "type": string (wall or image),
          "tiles": [
               {
                 "index":int (index in the layer),
                  "tileSet": string (path of the tileSet in the folder),
                  "walkable": int (binary 0 or 1)
               },   
            ]    
        },
        {
        
        }
    ]
}*/
export function saveTileMap() {
	const store =  useCurrentSelection()

	
}