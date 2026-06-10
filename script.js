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

contactIcon.addEventListener("click", () => {
    contactWindow.style.display = "flex";
});

contactClose.addEventListener("click", () => {
    contactWindow.style.display = "none";
});

myAppIcon.addEventListener("click", () => {
    myAppWindow.style.display = "flex";
});

myAppClose.addEventListener("click", () => {
    myAppWindow.style.display = "none";
});

dragElement(document.getElementById("myAppWindow"));
dragElement(contactWindow);

welcomeClose.addEventListener("click", () => {
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
themeToggleBtn.addEventListener('click', handleThemeToggle);