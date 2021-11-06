//  display date/time to top of page
var dateToday = moment().format("MMMM Do, YYYY");
$("#currentDay").append(dateToday);

function updateTimeSlotItems() {
    // // get current time in hours
    var now = moment().hour();

    // grab hour from HTML ID for moment.js
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this)).toLocaleString("id").split("hour")[1];
        console.log(timeBlock);
        // compare "now" with timeBlock above
    });

};
//     // // less than hours means .past

//     //    }  // equal to 0 is .present

//     //    // greater than hours is .future
//     //     else { (timeSlot > now) 

// function updatePlanner() {

// // save button (.saveBtn) 'click'
// //    // get value of description
// // var text = 
// //    // get value of time-block
// // var time =
// //    // store date in time-block with description
// // localstorage.setItem(time, text);
