window.onload = write9am(), write10am(), write11am(), write12pm(), write1pm(), write2pm(), write3pm(), write4pm(), write5pm()

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
    // $("button").click(save10AM);
    // $("button").click(save11AM);
    // $("button").click(save12PM);
    // $("button").click(save1PM);
    // $("button").click(save2PM);
    // $("button").click(save3PM);
    // $("button").click(save4PM);
    // $("button").click(save5PM);

    $("button").click(write9am);
    $("button").click(write10am);
    $("button").click(write11am);
    $("button").click(write12pm);
    $("button").click(write1pm);
    $("button").click(write2pm);
    $("button").click(write3pm);
    $("button").click(write4pm);
    $("button").click(write5pm);
    
})

var task9 = $(".description9");
var task10 = $(".description10");
var task11 = $(".description11");
var task12 = $(".description12");
var task1 = $(".description1");
var task2 = $(".description2");
var task3 = $(".description3");
var task4 = $(".description4");
var task5 = $(".description5");


// to write to the text area from local storage
function write9am () {
    var saveTask9 = JSON.parse(localStorage.getItem("task9"));
    $(".description9").val(saveTask9);
}

// to write to the text area from local storage
function write10am () {
    var saveTask10 = JSON.parse(localStorage.getItem("task10"));
    $(".description10").val(saveTask10);
}

// to write to the text area from local storage
function write11am () {
    var saveTask11 = JSON.parse(localStorage.getItem("task11"));
    $(".description11").val(saveTask11);
}

// to write to the text area from local storage
function write12pm () {
    var saveTask12 = JSON.parse(localStorage.getItem("task12"));
    $(".description12").val(saveTask12);
}

// to write to the text area from local storage
function write1pm () {
    var saveTask1 = JSON.parse(localStorage.getItem("task1"));
    $(".description1").val(saveTask1);
}

// to write to the text area from local storage
function write2pm () {
    var saveTask2 = JSON.parse(localStorage.getItem("task2"));
    $(".description2").val(saveTask2);
}

// to write to the text area from local storage
function write3pm () {
    var saveTask3 = JSON.parse(localStorage.getItem("task3"));
    $(".description3").val(saveTask3);
}

// to write to the text area from local storage
function write4pm () {
    var saveTask4 = JSON.parse(localStorage.getItem("task4"));
    $(".description4").val(saveTask4);
}

// to write to the text area from local storage
function write5pm () {
    var saveTask5 = JSON.parse(localStorage.getItem("task5"));
    $(".description5").val(saveTask5);
}

function clearSchedule () {
    localStorage.clear();
    location.reload();
}

$(".clearBtn").click(clearSchedule);