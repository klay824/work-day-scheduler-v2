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

var task9 = document.querySelector(".description9");
var task10 = document.querySelector(".description10");
var task11 = document.querySelector(".description11");
var task12 = document.querySelector(".description12");
var task1 = document.querySelector(".description1");
var task2 = document.querySelector(".description2");
var task3 = document.querySelector(".description3");
var task4 = document.querySelector(".description4");
var task5 = document.querySelector(".description5");

// 9am saving to local storage
function save9AM () {  
    localStorage.setItem("task9", JSON.stringify(task9.value));
}

// to write to the text area from local storage
function write9am () {
    var saveTask9 = JSON.parse(localStorage.getItem("task9"));
    $(".description9").val(saveTask9);
}

// saves 9am task to local storage
$("#btn9").click(save9AM);
$("#btn9").click(write9am);


// 10am saving to local storage
function save10AM () {
    localStorage.setItem("task10", JSON.stringify(task10.value));
}

// to write to the text area from local storage
function write10am () {
    var saveTask10 = JSON.parse(localStorage.getItem("task10"));
    $(".description10").val(saveTask10);
}

$("#btn10").click(save10AM);
$("#btn10").click(write10am);


// 11am saving to local storage
function save11AM () {
    localStorage.setItem("task11", JSON.stringify(task11.value));
}

// to write to the text area from local storage
function write11am () {
    var saveTask11 = JSON.parse(localStorage.getItem("task11"));
    $(".description11").val(saveTask11);
}

$("#btn11").click(save11AM);
$("#btn11").click(write11am);

    
    
// 12pm saving to local storage
function save12PM () {
    localStorage.setItem("task12", JSON.stringify(task12.value));
}

// to write to the text area from local storage
function write12pm () {
    var saveTask12 = JSON.parse(localStorage.getItem("task12"));
    $(".description12").val(saveTask12);
}

$("#btn12").click(save12PM);
$("#btn12").click(write12pm);


// 1pm saving to local storage
function save1PM () {
    localStorage.setItem("task1", JSON.stringify(task1.value));
}

// to write to the text area from local storage
function write1pm () {
    var saveTask1 = JSON.parse(localStorage.getItem("task1"));
    $(".description1").val(saveTask1);
}

$("#btn1").click(save1PM);
$("#btn1").click(write1pm);
  

// 2pm saving to local storage
function save2PM () {
    localStorage.setItem("task2", JSON.stringify(task2.value));
}

// to write to the text area from local storage
function write2pm () {
    var saveTask2 = JSON.parse(localStorage.getItem("task2"));
    $(".description2").val(saveTask2);
}

$("#btn2").click(save2PM);
$("#btn2").click(write2pm);
    

// 3pm saving to local storage
function save3PM () {
    localStorage.setItem("task3", JSON.stringify(task3.value));
}

// to write to the text area from local storage
function write3pm () {
    var saveTask3 = JSON.parse(localStorage.getItem("task3"));
    $(".description3").val(saveTask3);
}

$("#btn3").click(save3PM);
$("#btn3").click(write3pm);
    

// 4pm saving to local storage
function save4PM () {
    localStorage.setItem("task4", JSON.stringify(task4.value));
}

// to write to the text area from local storage
function write4pm () {
    var saveTask4 = JSON.parse(localStorage.getItem("task4"));
    $(".description4").val(saveTask4);
}

$("#btn4").click(save4PM);
$("#btn4").click(write4pm);
  

// 5pm saving to local storage
function save5PM () {
    localStorage.setItem("task5", JSON.stringify(task5.value));
}

// to write to the text area from local storage
function write5pm () {
    var saveTask5 = JSON.parse(localStorage.getItem("task5"));
    $(".description5").val(saveTask5);
}

$("#btn5").click(save5PM);
$("#btn5").click(write5pm);
    

function clearSchedule () {
    localStorage.clear();
    location.reload();
}

$(".clear").click(clearSchedule);