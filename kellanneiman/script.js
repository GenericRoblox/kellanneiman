
const images = ["assets/me1.png", "assets/me2.png"].map(src => {
  const img = new Image();
  img.src = src;
  return img.src;
});

const changingImg = document.getElementById("switchImage");

changingImg.addEventListener("click", function() {
  const current = changingImg.src.split("/").pop();

  if (current === "me1.png") {
    changingImg.src = images[1];
  } else {
    changingImg.src = images[0];
  }

  changingImg.classList.remove("clicked");
  void changingImg.offsetWidth;
  changingImg.classList.add("clicked");

  setTimeout(() => {
    changingImg.classList.remove("clicked");
  }, 100);

});

const vol = document.getElementById("volleyballimg");

vol.addEventListener("click", function() {
  const current = vol.src.split("/").pop();

  if (current === "volleyball2.gif") {
    vol.src = "assets/volleyball.gif"
  } else {
    vol.src = "assets/volleyball2.gif";
  }

  vol.classList.remove("clicked");
  void vol.offsetWidth;
  vol.classList.add("clicked");

  setTimeout(() => {
    vol.classList.remove("clicked");
  }, 100);

});

const typ = document.getElementById("typingimg");

typ.addEventListener("click", function() {
  const current = typ.src.split("/").pop();

  if (current === "typing2.gif") {
    typ.src = "assets/typing.gif"
  } else {
    typ.src = "assets/typing2.gif";
  }

  typ.classList.remove("clicked");
  void typ.offsetWidth;
  typ.classList.add("clicked");

  setTimeout(() => {
    typ.classList.remove("clicked");
  }, 100);

});

const chs = document.getElementById("chessimg");

chs.addEventListener("click", function() {
  const current = chs.src.split("/").pop();

  if (current === "chess2.gif") {
    chs.src = "assets/chess.gif"
  } else {
    chs.src = "assets/chess2.gif";
  }

  chs.classList.remove("clicked");
  void chs.offsetWidth;
  chs.classList.add("clicked");

  setTimeout(() => {
    chs.classList.remove("clicked");
  }, 100);

});


// Text click
const nametxt = document.getElementById("name");

nametxt.addEventListener("click", function() {
  if (nametxt.innerText === "Kellan N.") {
    nametxt.innerText = "Is Very Cool";
  } else {
    nametxt.innerText = "Kellan N.";
  }

  nametxt.classList.remove("clicked");
  void nametxt.offsetWidth;
  nametxt.classList.add("clicked");

  setTimeout(() => {
    nametxt.classList.remove("clicked");
  }, 100);
});

document.getElementById("volleyballbtn").addEventListener("click", () => {
  document.getElementById("volleyballdiv").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

document.getElementById("codingbtn").addEventListener("click", () => {
  document.getElementById("codediv").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

document.getElementById("chessbtn").addEventListener("click", () => {
  document.getElementById("chessdiv").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

const engtxt = document.getElementById("engineeringtxt");

engtxt.addEventListener("click", function() {
  if (engtxt.innerText === "I couldn't stop coding so i made everything* clickable on this website.") {
    engtxt.innerText = "That's a lot of coding...";
  } else if (engtxt.innerText === "That's a lot of coding...") {
    engtxt.innerText = "Perhaps too much coding...";
  } else {
    engtxt.innerText = "I couldn't stop coding so i made everything* clickable on this website.";
  }

  engtxt.classList.remove("clicked");
  void engtxt.offsetWidth;
  engtxt.classList.add("clicked");

  setTimeout(() => {
    engtxt.classList.remove("clicked");
  }, 100);
});

const subengtxt = document.getElementById("engineeringsubtxt");

subengtxt.addEventListener("click", function() {
  if (subengtxt.innerText === "(Yes, even this text is clickable)") {
    subengtxt.innerText = "(Yeah, you got it.)";
  } else if (subengtxt.innerText === "(Yeah, you got it.)") {
    subengtxt.innerText = "(You really got it.)";
  } else {
    subengtxt.innerText = "(Yes, even this text is clickable)";
  }

  subengtxt.classList.remove("clicked");
  void subengtxt.offsetWidth;
  subengtxt.classList.add("clicked");

  setTimeout(() => {
    subengtxt.classList.remove("clicked");
  }, 100);
});

const disc = document.getElementById("disclaimer");

disc.addEventListener("click", function() {
  if (disc.innerText === "**Everything only includes most buttons, text, photos and icons. Background and other elements are not clickable**") {
    disc.innerText = "**Click my photo up there ⏶ **";
  } else {

    disc.innerText = "**Everything only includes most buttons, text, photos and icons. Background and other elements are not clickable**";
  }

  disc.classList.remove("clicked");
  void disc.offsetWidth;
  disc.classList.add("clicked");

  setTimeout(() => {
    disc.classList.remove("clicked");
  }, 100);
});