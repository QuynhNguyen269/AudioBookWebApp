const wrapper = document.querySelector(".wrapper"),
      bookImg = wrapper.querySelector(".img-area img"),
      bookName = wrapper.querySelector(".book-details .name"),
      bookAuthor = wrapper.querySelector(".book-details .author"),
      mainAudio = wrapper.querySelector("#main-audio"),
      playPauseBtn = wrapper.querySelector(".play-pause"),

let bookIndex = 6;

window.addEventListener("load", ()=>{
    loadBook(bookIndex);
});

function loadBook(indexNumb){
    bookName.innerText = allBook[indexNumb - 1].name;
    bookAuthor.innerText = allBook[indexNumb - 1].author;
    bookImg.src = allBook[indexNumb - 1].img;
    mainAudio.src = allBook[indexNumb - 1].src;
}

//function play book
function playBook(){
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    //mainAudio.play();                          
}

//function pause book
function pauseBook(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    //mainAudio.pause();                          
}

playPauseBtn.addEventListener("click", ()=>{
    const isBookPaused = wrapper.classList.contains("paused");
    //if isBookPaused is true then call pauseBook else call playBook
    isBookPaused ? pauseBook() : playBook();
});


      