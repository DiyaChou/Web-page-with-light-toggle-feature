const toggleIcon = document.getElementById('toggle-icon');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
  }

function darkMode() {
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imageMode("dark");
}

function lightMode() {
    toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}


function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme','dark')
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light')
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme, false)

const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked =  true;
        darkMode()
    }
}