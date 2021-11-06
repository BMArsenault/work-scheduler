// //  display date/time to top of page
// var dateToday = moment().format("MMMM Do, YYYY");
// $("#currentDay").append(dateToday);

// // // get current time in hours
// var now = moment().hour();

// // set up save button
// var saveBtn = $('.saveBtn')
// saveBtn.click(handleSave)

    function updateTimeSlotItems() {

        // grab hour integer from HTML ID for moment.js
        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // compare "now" with timeBlock above
            // if time has passed the block, set as "past"
            if (now.isAfter(timeBlock))
            {   
                $(".description").addClass("past");
            }
            //  if time is on current block of time, set as "present"
            else if (now === timeBlock)
            {
                $(".description").addClass("present");
            }
            //  if time hasn't reached block of time, set as "future"
            else (now < timeBlock)
            {
                $('.description').addClass("future");
            }
        }
        );
    };

// function updatePlanner() {

// // save button (.saveBtn) 'click'
// //    // get value of description
// // var text = 
// //    // get value of time-block
// // var time =
// //    // store date in time-block with description
// // localstorage.setItem(time, text);
