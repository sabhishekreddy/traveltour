class RoundRobin {
    constructor(ipaddress, date, month, year, hour, minute, second) {
        this.ipaddress = ipaddress;
        this.date = date;
        this.month = month;
        this.year = year;
        this.hours = hour;
        this.minutes = minute;
        this.seconds = second;
    }

    calculator() {
        try {
            var time = parseInt(this.hours * 60 * 60) + parseInt(this.minutes * 60) + parseInt(this.seconds);
            return time;
        } catch (e) {
            console.log("calculation error");
        }
    }
}

export default RoundRobin;