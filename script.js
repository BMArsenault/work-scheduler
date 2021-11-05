//  display date/time to top of page
var dateToday = moment().format('LLLL');
$("#currentDay").html(dateToday);

function updateTimeSlotItems() {

    // apply hours through Moment.js (.time-block class) and compare with current time
    var now = moment().hour();

    $(".time-block").each(function () {
        var timeSlot = 

    // less than hours means past
         if (timeSlot < now) {


       }  // equal to 0 is present
       else if (timeSlot === now) {


       }
         // greater than hours is future
        else { (timeSlot > now) 

        }
    })

}

function updatePlanner() {

// save button 'click'
    // get value of description
// var text =
    // get value of time-block
// var time =
    // store date in time-block with description
}