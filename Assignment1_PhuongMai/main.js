    // Name: Phuong Mai
    // Student ID: 991529666
    // Email: maiph@sheridancollege.ca
    // Date: June 1st, 2020
    // Description:    + A web application that display a monthly calendar of the current month using javaScript, HTML and CSS. 
    //                 + Code is written inside "DOMContentLoaded" event listener, including:
    //                      1. Create an instance of Calendar class
    //                      2. Format title "Month Year"
    //                      3. Set weekdays
    //                      4. Print out previous, current, and after month dates (print month abbr for first day of month)
    //                      5. Hightlight today's day
    //                      6. "resize" event for weekdays                         
//-----------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function(){

    //create an instance of Calendar class
    let calendar = new Calendar();

    //get Calendar div element
    let calendarDiv = document.getElementById("dateGridParent");

    //pass value of current month and year
    let currentMonth = document.getElementById("currentMonth");
    currentMonth.innerHTML = calendar.getMonthString(calendar.month) + " " + calendar.year;

    //set weekdays
    let weekDaysGridParent = document.getElementById("weekDaysGridParent");
    let weekDaysArr = calendar.getDaysString();

    for (let i=0; i < weekDaysArr.length; i++){
        weekDaysGridParent.innerHTML += "<div class='weekDayGridItem'>" + weekDaysArr[i] + "</div>";
    }

    //get last Sunday of the previous month and print out if first day of current month is not Sunday(1)
    if (calendar.getFirstDayOfMonth() != 1) {
        let firstSunday = calendar.getLastSundayOfPreviousMonth();

            // starting from Sunday till last date of previous month, print out the day        
            for (let i=firstSunday; i <= calendar.getLastDateOfPreviousMonth(); i++){
                
                //if condition to print out month abbr if day is Sunday
                if (i == firstSunday) {
                    calendarDiv.innerHTML += "<div class='dateGridItem datePreMonth'>"+ calendar.getMonthString(calendar.month-1).substr(0, 3) + " " + i +"</div>";
                } else {
                    calendarDiv.innerHTML += "<div class='dateGridItem datePreMonth'>" + i +"</div>";
                }

            }

    }

    //print out first day to last day of the current month
    for (let i=1; i <= calendar.getDaysOfMonth(); i++){

        //if condition to print out month abbr if day is first date
        if (i == 1) {
            calendarDiv.innerHTML += "<div class='dateGridItem dateCurrentMonth'>"+ calendar.getMonthString(calendar.month).substr(0, 3) + " " + i +"</div>";
        } else {
        calendarDiv.innerHTML += "<div class='dateGridItem dateCurrentMonth'>" + i +"</div>";
        }

    }

    //get last Sunday of the previous month and print out if last day of current month is not Saturday(7)
    if (calendar.getLastDayOfMonth() != 7) {
        let lastSaturday = calendar.getFirstSaturdayOfNextMonth();

            // starting from 1(first date of next month) till Saturday, print out the day  
            for (let i=1; i <= lastSaturday; i++){

                //if condition to print out month abbr if day is first date
                if (i == 1) {
                    calendarDiv.innerHTML += "<div class='dateGridItem dateNextMonth'>"+ calendar.getMonthString(calendar.month+1).substr(0, 3) + " " + i +"</div>";
                } else {
                    calendarDiv.innerHTML += "<div class='dateGridItem dateNextMonth'>" + i +"</div>";
                }

            }

    }

    //highlight today's day
    let currentMonthDates = document.getElementsByClassName("dateCurrentMonth");
    calendar.hightlightTodayDate(currentMonthDates);

    //weekdays abbreviation
    window.addEventListener('resize', function(){
        let weekdayGridItems = "";

        //use abbr for weekdays if screen width < 1440px
        for (let i=0; i < weekDaysArr.length; i++){
            if (screen.width < 1440) {
                weekdayGridItems += "<div class='weekDayGridItem'>" + weekDaysArr[i].substr(0,3) + "</div>";
            } else {
                weekdayGridItems += "<div class='weekDayGridItem'>" + weekDaysArr[i] + "</div>";
            }
        }

        weekDaysGridParent.innerHTML = weekdayGridItems;
    })
});  
