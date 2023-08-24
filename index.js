class Obstruction {
	constructor(machineSpeed, distance) {
		this.machineSpeed = machineSpeed;
		this.distance = distance;
	}

	calculateExpectedTime() {
		return this.distance / this.machineSpeed;
	}

	checkObstruction(actualTime) {
		const expectedTime = this.calculateExpectedTime();
		const timeDifference = actualTime - expectedTime;

		if (timeDifference > 60) return true;
		if (timeDifference >= 0) return true;
		return false;
	}
}

const actualTime = 78;
const speedOfMachine = 0.5;
const distanceAB = 10;

const obstructionDetector = new Obstruction(speedOfMachine, distanceAB);
const isObstruction = obstructionDetector.checkObstruction(actualTime);

if (isObstruction) {
	console.log("Obstruction detected.");
} else {
	console.log("No obstruction detected.");
}
