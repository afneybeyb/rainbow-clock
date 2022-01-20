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
			time[i] = ("0" + time[i]);
		}
		document.getElementById("time_" + ((i + 1) * 2 - 1)).innerHTML = time[i].slice(0, 1);
		document.getElementById("time_" + ((i + 1) * 2)).innerHTML = time[i].slice(1, 2);
	}
	setTimeout(displayTime, 100);
}

buildTime();
displayTime();