function buildTime() {
	let element = document.createElement("div");
	element.setAttribute("id", ("time"));
	document.getElementById("content").appendChild(element);

	for (let i = 0; i < 6; i++) {
		if (i % 2 == 0 && i != 0) {
			let element2 = document.createElement("span");
			element2.setAttribute("id", ("space_" + (i / 2)));
			element2.innerHTML = ":";
			document.getElementById("time").appendChild(element2);
		}

		let element = document.createElement("span");
		element.setAttribute("id", ("time_" + (i + 1)));
		document.getElementById("time").appendChild(element);
	}
}

function displayTime() {
	let date = new Date();
	let time = [date.getHours().toString(), date.getMinutes().toString(), date.getSeconds().toString()]
	for (let i = 0; i < time.length; i++) {
		if (time[i].length != 2) {
			time[i] = "0" + time[i];
		}
		document.getElementById("time_" + ((i + 1) * 2 - 1)).innerHTML = time[i].slice(0, 1);
		document.getElementById("time_" + ((i + 1) * 2)).innerHTML = time[i].slice(1, 2);
	}
	if (time[2] % 12 == 0) {
		changeClockColor();
	}
	setTimeout(displayTime, 1000);
}

function genColor(min, max) {
	let color = "";
	for (let i = 0; i < 3; i++) {
		let part = Math.floor(min + Math.random() * max).toString(16);
		if (part.length != 2) {
			part = "0" + part;
		}
		color += part;
	}
	return "#" + color;
}

function changeClockColor() {
	let time = [];
	for (let i = 0; i < 6; i++) {
		time.push(document.getElementById("time_" + (i + 1)));
	}
	time.forEach(element => {
		element.style.color = genColor(0x77, 0x88);
	});
}

function changeBackground() {
	let color = genColor(0x00, 0x33);
	let deg = Math.random() * 180;
	document.getElementById("content").style.background = "linear-gradient(" + deg + "deg, " + color + ", #202020)";
}

buildTime();
displayTime();
changeClockColor();
changeBackground();

