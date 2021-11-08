// //  display date/time to top of page
var dateToday = moment().format("MMMM Do, YYYY");
$("#currentDay").append("Today is " + dateToday);

// // // get current time in hours
var currentHour = moment().hour();

// saveBtn click listener
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Set the value of the specified local storage item
    localStorage.setItem(time, text);
    })

// Get item from local storage if anything is stored
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


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

// Older attempts at localStorage.getItem
// set up save button
// $('.saveBtn').on("click", function(){
//     // get value of description
//     var text = $(this).siblings(".description").val();

//     // get value of time-block
//     var time = $(this).parent().attr("id");

//     // store time in time-block with description
//     localStorage.setItem(time, text);

// function storeEl(){
//     $(".hour").each(function(){
//         let theHour = $(this).text();
//         let storedTxt = window.localStorage.getItem(theHour);

//         if (storedTxt  !== null){
//             $(this).siblings('.description').val(storedTxt);
//             console.log(storedTxt);
//         }
//     })
// };
//
// storeEl();
