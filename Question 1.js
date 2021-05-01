// Clock

function Clock({template}) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

    setTimeout(() => clearTimeout(timer), 10000);

}

let clock = new Clock({template: 'h:m:s'});
clock.start();


/*
Question 1:
    1. Also add a line of code that will stop the clock after 10 ticks
        - setTimeout(() => clearTimeout(timer), 10000);
    2. What is the inner function of the constructor function?
        - render

    3. What is the local variable of the constructor function?
        - timer

    4. What is the clock “interface” returned by the constructor function?
        - An object of Clock

    5. What are the closures?
        - No

    6. What are the private variables and functions?
        - timer, render

    7. What are the public methods?
        - stop,start
*/
