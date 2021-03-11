// when the dom is ready, any local storage will be written to their time slots
$(document).ready(function(){
    $(".description9").val(localStorage.getItem("task9"));
    $(".description10").val(localStorage.getItem("task10"));
    $(".description11").val(localStorage.getItem("task11"));
    $(".description12").val(localStorage.getItem("task12"));
    $(".description1").val(localStorage.getItem("task1"));
    $(".description2").val(localStorage.getItem("task2"));
    $(".description3").val(localStorage.getItem("task3"));
    $(".description4").val(localStorage.getItem("task4"));
    $(".description5").val(localStorage.getItem("task5"));
})

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

// Jquery click event save user input to local storage, then gets it out of storage and writes it to the text area
$(":button").click(function(){
        var input9 = task9.val().trim();
        localStorage.setItem("task9", input9);
        $(".description9").val(localStorage.getItem("task9"));

        var input10 = task10.val().trim();
        localStorage.setItem("task10", input10);
        $(".description10").val(localStorage.getItem("task10"));

        var input11 = task11.val().trim();
        localStorage.setItem("task11", input11);
        $(".description11").val(localStorage.getItem("task11"));

        var input12 = task12.val().trim();
        localStorage.setItem("task12", input12);
        $(".description12").val(localStorage.getItem("task12"));

        var input1 = task1.val().trim();
        localStorage.setItem("task1", input1);
        $(".description1").val(localStorage.getItem("task1"));

        var input2 = task2.val().trim();
        localStorage.setItem("task2", input2);
        $(".description2").val(localStorage.getItem("task2"));

        var input3 = task3.val().trim();
        localStorage.setItem("task3", input3);
        $(".description3").val(localStorage.getItem("task3"));

        var input4 = task4.val().trim();
        localStorage.setItem("task4", input4);
        $(".description4").val(localStorage.getItem("task4"));

        var input5 = task5.val().trim();
        localStorage.setItem("task5", input5);
        $(".description5").val(localStorage.getItem("task5"));
})

// clears the whole schedule if user wants to start over
$(".clearBtn").click(function() {
    localStorage.clear();
    location.reload();
})