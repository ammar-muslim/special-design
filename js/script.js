let landing = document.querySelector(".landing-page");
let overlay = document.querySelector(".overlay");
let colors = [
  "blueviolet",
  "darkred",
  "rgb(206, 206, 0",
  "rgb(0, 58, 105)",
  "rgb(0, 68, 45)",
  "rgb(233, 71, 111)",
  "rgb(51, 163, 193)",
  "rgb(184, 89, 212)",
];

let rotationDegrees = 104;

landing.style.backgroundImage = 
'url("./imgs/landingimg-' + 0 + '.jpg")';
let interval = setInterval(() => {
  randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber);
  landing.style.backgroundImage =
    'url("./imgs/landingimg-' + randomNumber + '.jpg")';

  overlay.style.cssText = `background-color: ${colors[randomNumber]};
    transform: rotate(${rotationDegrees}deg);`;

  rotationDegrees += 90;

  if (rotationDegrees >= 23040) {
    rotationDegrees = 14;
  }
}, 5000);

settingIcon = document.getElementsByClassName("setting-icon")[0];
settingBox = document.getElementsByClassName("setting-box")[0];
options = document.querySelectorAll(".option");
animationStop = document.getElementsByClassName("stop-animation")[0];
changeLayerColor = document.getElementsByClassName("change-layer-color")[0];
layOfLanding = document.getElementsByClassName("overlay-of-landing")[0];
animationStatus = true;

animationStop.onclick = () => {
  if (animationStatus === true) {
    animationStatus = false;
    animationStop.textContent = "animation stoped";
    animationStop.style.backgroundColor = "#ddd";
    clearInterval(interval);
  } else {
    animationStatus = true;
    animationStop.innerHTML = "animation worked";
    animationStop.style.backgroundColor = "white";
    setInterval(() => {
      randomNumber = Math.floor(Math.random() * 5);

      landing.style.backgroundImage =
        'url("/imgs/landingimg-' + randomNumber + '.jpg")';

      overlay.style.cssText = `background-color: ${colors[randomNumber]};
        transform: rotate(${rotationDegrees}deg);`;

      rotationDegrees += 90;

      if (rotationDegrees >= 23040) {
        rotationDegrees = 14;
      }
    }, 4000);
  }
};
changeLayerColor.onclick = () => {
  layOfLanding.style.backgroundColor = `${
    colors[Math.floor(Math.random() * 6)]
  }`;
};

settingIcon.onclick = () => {
  settingIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("opened");
};
document.body.onclick = (e) => {
  if (
    e.target !== settingIcon &&
    e.target !== settingBox &&
    !e.target.classList.contains("option") &&
    !e.target.classList.contains("change-main-color") &&
    !e.target.classList.contains("mainColor") &&
    !e.target.classList.contains("colorsBox")
  ) {
    settingBox.classList.remove("opened");
  }
};
("=============================================");
let colorLis = document.querySelectorAll(".colorsBox li");

window.localStorage.setItem("mainColor", 'goldenrod');
// chick if there is color in local storage
if (localStorage.mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    `${localStorage.mainColor}`
  );
}
colorLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    window.localStorage.setItem("mainColor", e.target.dataset.color);

    document.documentElement.style.setProperty(
      "--main-color",
      `${localStorage.mainColor}`
    );
    removeActive(e);
  });
});

("========================================================");
window.addEventListener("scroll", () => {
  progs = document.querySelectorAll(".prog");
  spans = document.querySelectorAll(".prog span");
  if (scrollY >= 1000 && scrollY <= 1600) {
    progs.forEach((p) => {
      p.style.cssText = `width : ${p.dataset.width}% `;
    });

    spans.forEach((s) => {
      s.textContent = `${s.parentElement.dataset.width}%`;
    });
  } else {
    progs.forEach((p) => {
      p.style.cssText = `width : ${0}% `;
    });
    spans.forEach((s) => {
      s.textContent = `${0}%`;
    });
  }
});
("========================================================");

imgs = document.querySelectorAll(".galary img");

imgs.forEach((img) => {
  img.onclick = () => {
    // create div container
    container = document.createElement("div");
    container.classList.add("img-container");

    //create over lay
    overlayG = document.createElement("div");
    overlayG.className = "overlayG";
    document.body.appendChild(overlayG);

    // create h2
    if (img.src !== " ") {
      h2 = document.createElement("h2");
      h2.className = "img-title";
      h2.textContent = `${img.alt}`;
      container.appendChild(h2);
    } else {
      h2.textContent = "project";
      container.appendChild(h2);
    }

    //create big img
    bigView = document.createElement("img");
    bigView.setAttribute("src", `${img.src}`);
    bigView.classList.add("bigView");
    container.appendChild(bigView);

    // create remove botton
    removeB = document.createElement("div");
    removeB.textContent = "X";
    removeB.className = "remove-botton";
    container.appendChild(removeB);

    document.body.appendChild(container);
    // make it remove
    removeB.onclick = () => {
      container.remove();
      overlayG.remove();
    };
  };
});

("=============================================");

allLinks = document.querySelectorAll(".links a");

allBullets = document.querySelectorAll(".bullets .bullet");

function scrollToSomeWhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({});
    });
  });
}

scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);

//handle function
function removeActive(rm) {
  rm.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  rm.target.classList.add("active");
}

("=============================================");

// hide bullets

hideButton = document.querySelector(".hide-bullets");

hideButton.addEventListener("click", () => {
  document.querySelector(".bullets").classList.toggle("disabled");
  hideButton.classList.toggle("disabled");
});

linksBar = document.querySelector(".links-bar");
links = document.querySelector(".links");
linksA = document.querySelectorAll(".links a");

linksBar.onclick = () => {
  links.classList.toggle("active");
};
document.onclick = (e) => {
  if (e.target !== linksBar && e.target !== links && e.target !== linksA) {
    links.classList.remove("active");
  }
};
