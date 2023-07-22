
let state = false;
let darkMode = document.getElementById("darkMode");
document.body.classList.toggle('dark');

darkMode.addEventListener("click", function() {
    if(state)
        darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    else 
        darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    document.body.classList.toggle('dark');
    state = !state;
})
