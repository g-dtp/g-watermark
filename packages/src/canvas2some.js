/*
	* @fileName  保存得文件名
	* @dataBase  图片得base64
	* */
function downloadImage (fileName, dataBase) {
	let time = new Date()
	let name = fileName + time.getFullYear() + (time.getMonth() + 1) + time.getDate()
	// 兼容IE
	if (window.navigator.msSaveOrOpenBlob) {
		let bstr = atob(dataBase.split(',')[1])
		let n = bstr.length
		let u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n)
		}
		let blob = new Blob([u8arr])
		window.navigator.msSaveOrOpenBlob(blob, name + '.' + 'png')
	} else {
		let a = document.createElement('a')
		let event = new MouseEvent('click')
		a.download = name
		a.href = dataBase
		a.dispatchEvent(event)
	}
}

function scaleCanvas (canvas, width, height) {
	let w = canvas.width
	let h = canvas.height
	width = width || w
	height = height || h
	let scaleCanvas = document.createElement('canvas')
	let retCtx = scaleCanvas.getContext('2d')
	scaleCanvas.width = width
	scaleCanvas.height = height
	retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height)
	return scaleCanvas
}

/*
* @canvas 传入需要保存得画布
* */

function canvas2hd (fileName, canvas) {
	let _canvas = scaleCanvas(canvas, canvas.width / 2, canvas.height / 2)
	let base64 = getHdThumbnail(_canvas)
	downloadImage(fileName, base64)
}

function getHdThumbnail (canvas) {
	let temp = document.createElement('canvas')
	temp.width = canvas.width
	temp.height = canvas.height
	temp.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height)
	return temp.toDataURL('image/png', 1)
}

export default {
	canvas2hd,
	getHdThumbnail
}
