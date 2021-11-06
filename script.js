// //  display date/time to top of page
var dateToday = moment().format("MMMM Do, YYYY");
$("#currentDay").append("Today is " + dateToday);

// // // get current time in hours
var currentHour = moment().hour();
console.log("currenthour:",currentHour);
var textarea = [$(".description").text()]



    function updateTimeSlotItems() {

        // grab hour integer from HTML ID for moment.js
        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("data-hour"));
            console.log(timeBlock);

            // compare current with timeBlock above
            //  if time is on current block of time, set as "present"
            if (currentHour === timeBlock)
            {   
                $(this).addClass("present");
            }
            //  if time hasn't reached block of time, set as "future"
            else if (currentHour < timeBlock)
            {
                $(this).addClass("future");
            }
             // if time has passed the block, set as "past"
            else 
            // (currentHour > timeBlock)
            {
                $(this).addClass("past");
            }
        }
        );
    };

updateTimeSlotItems();

// function updatePlanner() {

// // set up save button
// var saveBtn = $('.saveBtn')
// saveBtn.click(handleSave)
// //    // get value of description
// // var text = 
// //    // get value of time-block
// // var time =
// //    // store date in time-block with description
// // localstorage.setItem(time, text);
