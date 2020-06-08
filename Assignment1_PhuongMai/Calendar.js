
    // Name: Phuong Mai
    // Student ID: 991529666
    // Email: maiph@sheridancollege.ca
    // Date: June 1st, 2020
    // Description:    + A web application that display a monthly calendar of the current month using javaScript, HTML and CSS. 
    //                 + Class Calendar contains 1 contructor, 6 required functions, and 3 extra ones(to organize main.js and 
    //              since they can be used by any instances of Calendar class)

//-----------------------------------------------------------------------------------------------------------------------------------------

class Calendar {
    
    //1.constructor
    constructor() {
        this.time = new Date(Date.now());
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth()+1;
        this.date = this.time.getDate();
        this.day = this.time.getDay()+1;
    }

    //2.required methods
    //2.1 passing month numeric and return monthString
    getMonthString(monthNumeric) {
        switch(monthNumeric) {
            case 1: return "January";
            case 2: return "Feburary";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    //2.2 return day numeric as dayString
    getDaysString() {
        let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysArr;
    }

    //2.3 return first day of the month, to get current month, index should be this.month - 1 (monthIndex starts from 0)
    getFirstDayOfMonth() {
        let firstDateOfCurrentMonth = new Date(this.year, this.month-1, 1);
        return firstDateOfCurrentMonth.getDay()+1;
    }

    //2.4 return last date of the month by getting date 0 of next month
    getDaysOfMonth() {
        let lastDateOfPreviousMonth = new Date(this.year, this.month, 0);
        return lastDateOfPreviousMonth.getDate();
    }

    //2.5 return last day of the month by getting day 0 of next month    
    getLastDayOfMonth() {
        let lastDayOfMonth = new Date(this.year, this.month, 0);
        return lastDayOfMonth.getDay()+1;
    }

    //2.6 return the last date of previous month, which is day 0 of this current month
    getLastDateOfPreviousMonth() {
        let lastDateOfPreviousMonth = new Date(this.year, this.month-1, 0);
        return lastDateOfPreviousMonth.getDate();
    }

    //3.extra methods

    //3.1 return the first Sunday in the calendar, this method is for when first day of this current month is not a Sunday
    getLastSundayOfPreviousMonth(){

        //1: Sunday, this.getFirstDayOfMonth(): whatever day the first day of month returns
        //using +1 since last day counts from 0 (Ex: May 31 -> day 0 of June)
        //month is current month (June)
        //"lastSunday" value will vary from -5 to 0
        let lastSunday = 1 - this.getFirstDayOfMonth() + 1; 

        let date = new Date(this.year, this.month-1, lastSunday); 
        return date.getDate();
    }

    //3.2 return the first Saturday of next month, in case last day of this current month is not a Saturday
    getFirstSaturdayOfNextMonth(){

        //7: Saturday, this.getLastDayOfMonth(): whatever day the last day of month returns
        //find the amount of days need to be filled for next month
        //month is next month (July)
        //"firstSaturday" value will vary from 1 to 6
        let firstSaturday = 7 - this.getLastDayOfMonth(); 

        let date = new Date(this.year, this.month, firstSaturday);
        return date.getDate();
    }

    //3.3 hightlight today's date passing list of currentMonthDates div values
    hightlightTodayDate(currentMonthDates) {
        for (let i=0; i< currentMonthDates.length; i++){
            if (currentMonthDates[i].innerHTML == this.date) {
                currentMonthDates[i].style.backgroundColor = "powderblue";
            }
        }
    }

}