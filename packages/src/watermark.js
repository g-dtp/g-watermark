
const watermark = {}
const FONT_FAMILY = '"-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, "sans-serif"'
let canvas, context
const id = '1.23452384164.123412415'

let div, timer
let str = 'welcome'

function createCanvas () {
	if (!canvas) {
		canvas = document.createElement('canvas')
		canvas.width = 300
		canvas.height = 150
		context = canvas.getContext('2d')
		context.rotate(-10 * Math.PI / 180)
		context.font = '20px ' + FONT_FAMILY
		context.fillStyle = 'rgba(200, 200, 200, 0.20)'
		context.textAlign = 'center'
		context.textBaseline = 'Middle'
		context.fillText(str, canvas.width / 3, canvas.height / 1)
	}
}

function createDiv () {
	if (!div) {
		div = document.createElement('div')
		div.id = id
		updateStyle()
		document.body.appendChild(div)
	}
}

function updateStyle () {
	div.style.pointerEvents = 'none'
	div.style.position = 'fixed'
	div.style.top = '50px'
	div.style.left = '0px'
	div.style.right = '0'
	div.style.bottom = '0'
	div.style.zIndex = '100000'
	div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat'
}

function addEvent () {
	if (!timer) {
		timer = setInterval(function () {
			if (!div) {
				createDiv()
			} else {
				if (!div.parentElement) document.body.appendChild(div)
				updateStyle()
			}
		}, 500)
	}
}

watermark.init = function (text) {
	str = text
	createCanvas()
	createDiv()
	addEvent()
}

watermark.getEl = function () {
	let copy = document.createElement('div')
	copy.style = div.style
	copy.style.position = 'absolute'
	return copy
}

watermark.getCanvas = function () {
	return canvas
}

export default watermark
