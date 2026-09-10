const lobby = document.getElementById("lobby");

const enterBtn = document.getElementById("enterBtn");

const themeBtn = document.getElementById("themeBtn");

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("backgroundMusic");


// LOBBY

enterBtn.addEventListener("click", () => {

    lobby.style.opacity = "0";

    lobby.style.transition = "0.7s";

    setTimeout(() => {

        lobby.style.display = "none";

    }, 700);


    // intentar reproducir música

    music.volume = 0.25;

    music.play().catch(() => {

        console.log("El navegador bloqueó el audio automático");

    });

});


// MODO OSCURO

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


// MÚSICA

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.textContent = "Ⅱ";

    } else {

        music.pause();

        musicBtn.textContent = "♪";

    }

});
