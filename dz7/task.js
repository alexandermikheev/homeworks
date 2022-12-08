class AlarmClock {
	constructor() {
		this.alarmCollection = [],
		this.timerId = null
	}
	
	addClock(time, callback, id) {
		console.log(`запускаем звонок с id - ${id}`);

		if (id === undefined){
			throw new Error("id не задан");
		}
		if (this.alarmCollection.find(item => item.id === id) !== undefined) {
			console.error(`Будильник ${id} уже запущен`);
			return;
		}
		this.alarmCollection.push({"id": id, "time": time, "callback": callback});

	}
	removeClock(id) {
		let indexTimer = this.alarmCollection.findIndex(item => item.id === id);
		if (indexTimer >= 0){
			let delBell = this.alarmCollection.splice(indexTimer, 1);
			console.log(`Будильник с id ${delBell[0].id} удален`);
			return true;
		} else {
			return false;
		}
	}
	getCurrentFormattedTime() {
		let date = new Date();
		return date.toLocaleTimeString().slice(0, 5);
	}
	checkClock(bell) {
		if (bell.time === this.getCurrentFormattedTime()) {
			bell.callback();
		}
	}
	start() {
		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(item => this.checkClock(item)), 10000);
		}
	}
	stop() {
		console.log("Остановка звонков");
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms() {
		console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(item => console.log(`Будильник с id ${item.id} и временем ${item.time}`));
	}
	clearAlarms() {
		this.stop();
		// while (this.alarmCollection.length > 0) {
		// 	this.removeClock(this.alarmCollection[0].id);
		// }
		this.alarmCollection = [];
	}
}


function testCase() {
	let alarm = new AlarmClock;
	
	function time(num) {
		let tt = new Date();
		tt.setMinutes(tt.getMinutes() + num);
		return tt.toLocaleTimeString().slice(0, 5);
	};	
	
	function setClock(timer, callback, id) {
		try {
			alarm.addClock(time(timer), callback, id);
		} catch (err) {
			console.error(err.message);
		}
	}
	
	setClock(0, () => console.log("Звонит будильник 5"), 5);
	setClock(0, () => console.log("Звонит будильник 8"), 8);
	setClock(1, () => console.log("Звонит будильник 9"), 9);
	setClock(1, () => {console.log("Звонит будильник 6"); alarm.removeClock(6)}, 6);
	setClock(0, () => console.log("Будильник не пройдет"));
	setClock(2, () => {
		console.log("Звонит будильник 7");
		alarm.clearAlarms();
		alarm.printAlarms();
		}, 7);
	setClock(0, () => console.log("Опять будильник 5"), 5);
	
	alarm.printAlarms();
	alarm.start();
}

testCase();