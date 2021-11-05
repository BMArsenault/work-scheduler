//  display date/time to top of page
var dateToday = moment().format('LLLL');
$("#currentDay").html(dateToday);

function updateTimeSlotItems() {

    // apply hours through Moment.js (.time-block class)
    var now = moment().hour();

    $(".time-block").each(function () {


    // less than hours means past
        
    // equal to 0 is present

    // greater than hours is future
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