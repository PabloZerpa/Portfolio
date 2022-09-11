
let state = false;
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", function() {
    if(state) {
        darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        document.body.classList.toggle('dark');
        state = !state;
    }
    else {
        darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        document.body.classList.toggle('dark');
        state = !state;
    }
})