// //  display date/time to top of page
var dateToday = moment().format("MMMM Do, YYYY");
$("#currentDay").append("Today is " + dateToday);

// // // get current time in hours
var currentHour = moment().hour();

// set up save button
$('.saveBtn').on("click", function(){
    // get value of description
    var text = $(this).siblings(".description").val();

    // get value of time-block
    var time = $(this).parent().data("hour");

    // store time in time-block with description
    localstorage.setItem(text, time);

});




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