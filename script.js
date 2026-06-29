// sound
const audio = new Audio();
audio.src="sci-fi-click.mp3";

// time
function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
        }
    setInterval(updateTime, 1000);

// dragging logic
dragElement(document.getElementById("welcome"));

function dragElement(element) {
    let initialX = 0, initialY = 0, currentX = 0, currentY = 0;
    const header = document.getElementById(element.id + "header");

    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = drag;

    }

    function drag(e) {
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// open and close logic
const welcomeScreen = document.getElementById("welcome");
const welcomeClose = document.getElementById("welcomeclose");
const welcomeOpen = document.getElementById("welcomeopen");
const myAppIcon = document.getElementById("myAppIcon");
const myAppWindow = document.getElementById("myAppWindow");
const myAppClose = document.getElementById("myAppClose");
const contactIcon = document.getElementById("contactIcon");
const contactWindow = document.getElementById("contactWindow");
const contactClose = document.getElementById("contactClose");
const calculatorIcon = document.getElementById("calculatorIcon");
const calculatorWindow = document.getElementById("calculatorWindow");
const calculatorClose = document.getElementById("calculatorClose");

contactIcon.addEventListener("click", () => {
    audio.play();
    contactWindow.style.display = "flex";
});

contactClose.addEventListener("click", () => {
    audio.play();
    contactWindow.style.display = "none";
});

myAppIcon.addEventListener("click", () => {
    audio.play();
    myAppWindow.style.display = "flex";
});

myAppClose.addEventListener("click", () => {
    audio.play();
    myAppWindow.style.display = "none";
});

calculatorClose.addEventListener("click", () => {
    audio.play();
    calculatorWindow.style.display = "none";
});

calculatorIcon.addEventListener("click", () => {
    audio.play();
    calculatorWindow.style.display = "flex";
});

dragElement(document.getElementById("myAppWindow"));
dragElement(contactWindow);
dragElement(calculatorWindow);

welcomeClose.addEventListener("click", () => {
    audio.play();
    welcomeScreen.style.display = "none";
});

welcomeOpen.addEventListener("click", () => {
    welcomeScreen.style.display = "block";
});

// dark mode toggle

// selectors
const themeToggleBtn = document.querySelector('.theme-toggle');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);


// handlers
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
};

// events
themeToggleBtn.addEventListener('click', () => {
    audio.play();
    handleThemeToggle();
});

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})