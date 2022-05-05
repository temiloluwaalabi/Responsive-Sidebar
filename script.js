const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

let getMode = localStorage.getItem("mode");

if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");

if(getStatus && getStatus === "closed"){
    sidebar.classList.toggle("close");
}


modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.textContent = "Light Mode";
        localStorage.setItem("mode","dark");
    }else{
        modeText.textContent = "Dark Mode";
        localStorage.setItem("mode", "light");

    }
});

toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");

    if(sidebar.classList.contains("close")){
        localStorage.setItem("status","closed");
    }else{
        localStorage.setItem("status", "opened");
    }

});

searchBtn.addEventListener('click', ()=>{
    sidebar.classList.remove("close");
});

