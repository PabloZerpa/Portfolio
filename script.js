
let state = false;
let state2 = false;

let darkMode = document.getElementById("darkMode");
document.body.classList.toggle('dark');


darkMode.addEventListener("click", function() {
    if(state)
        darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    else 
        darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    document.body.classList.toggle('dark');
    state = !state;
});

function submitFunction(e) {
    e.preventDefault();
    document.getElementById("sendMessage").reset();
    return false;
  }

document.getElementById("sendMessage").addEventListener("click", submitFunction);