// when the dom is ready, any local storage will be written to their time slots
$(document).ready(write);

// current day timestamp
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


// sets the current hour equal to currentTime variable
var currentTime = moment().hour();

// Changing colors based on time of day
$(".time-block").each(function() {
    var currentElement = $(this).attr("id");
    if(currentTime > currentElement) {
        $(this).children().eq(1).addClass("past");
    } else if(currentTime == currentElement) {
        $(this).children().eq(1).addClass("present");
    } else {
        $(this).children().eq(1).addClass("future");
    }
})

// global variables
var task9 = $(".description9");
var task10 = $(".description10");
var task11 = $(".description11");
var task12 = $(".description12");
var task1 = $(".description1");
var task2 = $(".description2");
var task3 = $(".description3");
var task4 = $(".description4");
var task5 = $(".description5");


$(".time-block").each(function() {
    $("button").click(function(){
        var input9 = task9.val().trim();
        localStorage.setItem("task9", JSON.stringify(input9));

        var input10 = task10.val().trim();
        localStorage.setItem("task10", JSON.stringify(input10));

        var input11 = task11.val().trim();
        localStorage.setItem("task11", JSON.stringify(input11));

        var input12 = task12.val().trim();
        localStorage.setItem("task12", JSON.stringify(input12));

        var input1 = task1.val().trim();
        localStorage.setItem("task1", JSON.stringify(input1));

        var input2 = task2.val().trim();
        localStorage.setItem("task2", JSON.stringify(input2));

        var input3 = task3.val().trim();
        localStorage.setItem("task3", JSON.stringify(input3));

        var input4 = task4.val().trim();
        localStorage.setItem("task4", JSON.stringify(input4));

        var input5 = task5.val().trim();
        localStorage.setItem("task5", JSON.stringify(input5));
    })
  
    $("button").click(write);
})

// to write to the text area from local storage
function write () {
    var saveTask9 = JSON.parse(localStorage.getItem("task9"));
    $(".description9").val(saveTask9);

    var saveTask10 = JSON.parse(localStorage.getItem("task10"));
    $(".description10").val(saveTask10);

    var saveTask11 = JSON.parse(localStorage.getItem("task11"));
    $(".description11").val(saveTask11);

    var saveTask12 = JSON.parse(localStorage.getItem("task12"));
    $(".description12").val(saveTask12);

    var saveTask1 = JSON.parse(localStorage.getItem("task1"));
    $(".description1").val(saveTask1);

    var saveTask2 = JSON.parse(localStorage.getItem("task2"));
    $(".description2").val(saveTask2);

    var saveTask3 = JSON.parse(localStorage.getItem("task3"));
    $(".description3").val(saveTask3);

    var saveTask4 = JSON.parse(localStorage.getItem("task4"));
    $(".description4").val(saveTask4);

    var saveTask5 = JSON.parse(localStorage.getItem("task5"));
    $(".description5").val(saveTask5);
}

function clearSchedule () {
    localStorage.clear();
    location.reload();
}

$(".clearBtn").click(clearSchedule);