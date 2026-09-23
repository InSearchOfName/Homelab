const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const settings = {
	pointRows: 28,
	pointColumns: 30,
	ridgeCount: 3,
	ridgeColumns: 46,
	pointerEase: 0.045,
	mouseRadius: 220,
	pointColor: "246 193 119",
};
const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, mouseX: 0, mouseY: 0 };
const points = [];
const distantPoints = [];
let width = 0;
let height = 0;
let pixelRatio = 1;

function createPoints() {
	points.length = 0;
	distantPoints.length = 0;

	for (let depth = 0; depth < settings.pointRows; depth += 1) {
		for (let column = -settings.pointColumns; column <= settings.pointColumns; column += 1) {
			points.push({ column, depth, offset: Math.random() * Math.PI * 2 });
		}
	}

	for (let ridge = 0; ridge < settings.ridgeCount; ridge += 1) {
		for (let column = -settings.ridgeColumns; column <= settings.ridgeColumns; column += 1) {
			distantPoints.push({ ridge, column, offset: Math.random() * Math.PI * 2 });
		}
	}
}

function resize() {
	pixelRatio = Math.min(window.devicePixelRatio, 2);
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width * pixelRatio;
	canvas.height = height * pixelRatio;
	canvas.style.width = `${width}px`;
	canvas.style.height = `${height}px`;
	context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	createPoints();
	pointer.mouseX = width / 2;
	pointer.mouseY = height / 2;
}

function drawDot(x, y, radius, opacity) {
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = `rgb(${settings.pointColor} / ${opacity})`;
	context.fill();
}

function drawDistantPoints(time, centerX, columnSpacing) {
	for (const point of distantPoints) {
		const ridgeDepth = point.ridge / 2;
		const ridgeScale = 0.7 + ridgeDepth * 0.22;
		const ridgeBase = height * (0.27 + ridgeDepth * 0.08);
		const ridgeShape = Math.sin(point.column * 0.16 + point.ridge * 1.8) * height * 0.045;
		const ridgeDetail = Math.cos(point.column * 0.34 - point.ridge) * height * 0.018;
		const x = centerX + point.column * columnSpacing * ridgeScale + pointer.x * (0.12 + ridgeDepth * 0.18);
		const y = ridgeBase - ridgeShape - ridgeDetail + pointer.y * (0.1 + ridgeDepth * 0.12);
		const shimmer = 0.7 + Math.sin(time * 0.0015 + point.offset) * 0.3;
		const opacity = (0.22 + (1 - ridgeDepth) * 0.14) * shimmer;

		drawDot(x, y, 0.65 + ridgeDepth * 0.45, opacity);
	}
}

function drawSurface(time, centerX, horizon, columnSpacing) {
	for (const point of points) {
		const depth = point.depth / (settings.pointRows - 1);
		const perspective = 0.48 + depth * 1.55;
		const wave = Math.sin(point.column * 0.18 + point.depth * 0.22) * height * (0.012 + depth * 0.05);
		const secondWave = Math.cos(point.column * 0.08 - point.depth * 0.45) * height * (0.012 + depth * 0.026);
		const contourWave = Math.sin(point.column * 0.42 - point.depth * 0.17) * height * depth * 0.018;
		const terrainSlide = Math.cos(point.column * 0.2 + point.depth * 0.3) * columnSpacing * depth * 0.8;
		const baseX = centerX + point.column * columnSpacing * perspective + terrainSlide + pointer.x * (0.2 + depth * 0.8);
		const baseY = horizon + Math.pow(depth, 1.22) * height * 0.84 + wave + secondWave + contourWave + pointer.y * (0.2 + depth * 0.8);
		const mouseDistance = Math.hypot(baseX - pointer.mouseX, baseY - pointer.mouseY);
		const mouseInfluence = Math.max(0, 1 - mouseDistance / settings.mouseRadius);
		const ambientX = Math.sin(time * 0.0008 + point.offset) * (1 + depth * 2);
		const ambientY = Math.cos(time * 0.0006 + point.offset) * (1 + depth * 1.5);
		const x = baseX + ambientX + Math.sin(time * 0.004 + point.offset) * mouseInfluence * 18;
		const y = baseY + ambientY + Math.cos(time * 0.003 + point.offset) * mouseInfluence * 12;
		const radius = 0.45 + depth * 1.55;
		const shimmer = 0.72 + Math.sin(time * 0.002 + point.offset) * 0.28;
		const opacity = (0.22 + depth * 0.34) * shimmer;

		drawDot(x, y, radius, opacity);
	}
}

function draw(time) {
	pointer.x += (pointer.targetX - pointer.x) * settings.pointerEase;
	pointer.y += (pointer.targetY - pointer.y) * settings.pointerEase;
	context.clearRect(0, 0, width, height);

	const centerX = width / 2;
	const horizon = height * 0.13;
	const columnSpacing = Math.max(15, Math.min(width, height) * 0.038);

	drawDistantPoints(time, centerX, columnSpacing);
	drawSurface(time, centerX, horizon, columnSpacing);

	requestAnimationFrame(draw);
}

function updatePointer(event) {
	const bounds = canvas.getBoundingClientRect();
	const localX = (event.clientX - bounds.left) / bounds.width;
	const localY = (event.clientY - bounds.top) / bounds.height;

	pointer.mouseX = localX * width;
	pointer.mouseY = localY * height;
	pointer.targetX = (event.clientX / width - 0.5) * 42;
	pointer.targetY = (event.clientY / height - 0.5) * 28;
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", updatePointer);
resize();
requestAnimationFrame(draw);
