"use strict";
class DateClass {
    constructor(timezone) {
        this.timezone = timezone;
    }
    getTime() {
        var d = new Date();
        return d.getTime();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimezone() {
        return this.timezone;
    }
}
const dateObject = new DateClass("IND");
const response = dateObject.getMonth();
console.log(response);
