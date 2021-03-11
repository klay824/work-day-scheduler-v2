# Work Day Scheduler

I have created a Work Day Scheduler app that allows a user to plan out their work day. For this assignment, we were given CSS and HTML starter code, however the HTML starter was without the time slots and their save buttons. I used Bootstrap 4 documentation to make divs to hold the time slots. I found a save icon emoji I wanted to use for the save buttons. 

The day of the week and the date are displayed at the top of the page below the page heading. This will update each day to coincide with the calendar date. The text areas will change color depending on the time of day. For instance, if the current hour is 9am, the 9am text area will be red, signifying it is the current hour. All future text areas will be green, and for the hours that have passed, their text areas will be gray.

When the user clicks inside a text area they will be able to enter in their task or event, and click save. Upon the user clicking save, their task or event will be saved to that time slot. If the user refreshes the page, or leaves it and comes back, their task or event will remain in its time slot. If the user would like to delete a task or event, the user can click inside the text area, erase their task or event, click save again, and their entry will be cleared.  They may enter a new task or event by clicking inside the text area, or they can choose to leave that time slot blank. Perhaps they have more free-time that I do! If the user decides to wipe their schedule clean, I have provided a "Clear Schedule" button at the bottom of the schedule that upon clicking, will clear all time slots and refresh the page.

Please follow [this link](https://klay824.github.io/work-day-scheduler-v2/) to view the live application.

## Technology Used
* HTML
* CSS
* Bootstrap 4
* JavaScript
* JQuery

## Resources
* [$(document).ready( ) VS window.onload( ) VS $(window).load( ) Documentation](https://www.techiediaries.com/javascript/document-ready-vs-window-onload-vs-window-load/)
* [.ready( ) Documentation](https://api.jquery.com/ready/)
* [moment.js Documentation](https://momentjs.com/)
* [Bootstrap 4 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Centering Items With Bootstrap 4](https://stackoverflow.com/questions/42528411/center-the-content-inside-a-column-in-bootstrap-4/47395191)
* [JQuery Documentation](https://api.jquery.com/)
* [Extra .each( ) Instruction](https://stackoverflow.com/questions/18966222/jquery-each-and-attaching-click-event)
* Our Awesome TAs Andrew and Cody

## GIF Demonstration of Application
![](assets/gifs/scheduler-demo-2.gif)