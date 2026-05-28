export function loadSprite(file: File, tileSize: number, spriteId: number): Promise<TileSet>{
	return new Promise((resolve, reject) => {
		const image = new Image()
		image.src =URL.createObjectURL(file)
		image.onload= () => {
			const tileList = _loadTile(tileSize,image.width,image.height, spriteId)
			const tileSet = {
				path: file.name,
				tileSize: tileSize,
				tiles: tileList,
				image: image,
				spriteId: spriteId
			}
			resolve(tileSet)
		}
	})
}



function _loadTile(tileSize: number, fileSizeX: number, fileSizeY: number, spriteId: number): Tile[] {
		const rowCount: number = fileSizeY / tileSize;
		const columnCount: number = fileSizeX/ tileSize;	

		const tileList: Tile[][] = []
		let count: number = 0
		let xPosition: number = 0
		let yPosition: number = 0


		for (let row = 0; row < rowCount; row++)
		{
			xPosition = 0
			for (let column= 0; column < columnCount; column++)
			{
				tileList.push({
					spriteId: spriteId,
					index:count,
					visible: true,
					x: xPosition,
					y: yPosition,
				})
				count++;
				xPosition +=tileSize
			}
			yPosition +=tileSize;
		}


		return tileList

}