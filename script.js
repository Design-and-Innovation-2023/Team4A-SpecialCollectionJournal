// Toggle Hamburger Menu

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Slideshow js

let caledoniaSlideIndex = 1;
let buckHeadSlideIndex = 1;
let cecilStreetSlideIndex = 1;
let ethonSlideIndex = 1;
let greatWesternIndex = 1;
let lilybankIndex = 1;
let sirRobertIndex = 1;
let sixtyIndex = 1;
let eglintonIndex = 1;

showSlides(caledoniaSlideIndex, "caledonia");
showSlides(buckHeadSlideIndex, "buckHead");
showSlides(cecilStreetSlideIndex, "cecilStreet");
showSlides(ethonSlideIndex, "ethon");
showSlides(greatWesternIndex, "greatWestern");
showSlides(lilybankIndex, "lilybank");
showSlides(sirRobertIndex, "sirRobert");
showSlides(sixtyIndex, "sixty");
showSlides(eglintonIndex, "eglinton");

function currentSlide(n, buildingName) {
  if (buildingName === "caledonia") {
    showSlides((caledoniaSlideIndex = n), "caledonia");
  } else if (buildingName === "buckHead") {
    showSlides((buckHeadSlideIndex = n), "buckHead");
  } else if (buildingName === "cecilStreet") {
    showSlides((cecilStreetSlideIndex = n), "cecilStreet");
  } else if (buildingName === "ethon") {
    showSlides((ethonSlideIndex = n), "ethon");
  } else if (buildingName === "greatWestern") {
    showSlides((greatWesternIndex = n), "greatWestern");
  } else if (buildingName === "lilybank") {
    showSlides((lilybankIndex = n), "lilybank");
  } else if (buildingName === "sirRobert") {
    showSlides((sirRobertIndex = n), "sirRobert");
  } else if (buildingName === "sixty") {
    showSlides((sixtyIndex = n), "sixty");
  } else if (buildingName === "eglinton") {
    showSlides((eglintonIndex = n), "eglinton");
  }
}

function showSlides(n, buildingName) {
  let i;
  let slides = document.getElementsByClassName("mySlides " + buildingName);
  let dots = document.getElementsByClassName("dot " + buildingName);
  if (n > slides.length) {
    if (buildingName === "caledonia") {
      caledoniaSlideIndex = 1;
    } else if (buildingName === "buckHead") {
      buckHeadSlideIndex = 1;
    } else if (buildingName === "cecilStreet") {
      cecilStreetSlideIndex = 1;
    } else if (buildingName === "ethon") {
      ethonSlideIndex = 1;
    } else if (buildingName === "greatWestern") {
      greatWesternIndex = 1;
    } else if (buildingName === "lilybank") {
      lilybankIndex = 1;
    } else if (buildingName === "sirRobert") {
      sirRobertIndex = 1;
    } else if (buildingName === "sixty") {
      sixtyIndex = 1;
    } else if (buildingName === "eglinton") {
      eglintonIndex = 1;
    }
  }
  if (n < 1) {
    if (buildingName === "caledonia") {
      caledoniaSlideIndex = slides.length;
    } else if (buildingName === "buckHead") {
      buckHeadSlideIndex = slides.length;
    } else if (buildingName === "cecilStreet") {
      cecilStreetSlideIndex = slides.length;
    } else if (buildingName === "ethon") {
      ethonSlideIndex = slides.length;
    } else if (buildingName === "greatWestern") {
      greatWesternIndex = slides.length;
    } else if (buildingName === "lilybank") {
      lilybankIndex = slides.length;
    } else if (buildingName === "sirRobert") {
      sirRobertIndex = slides.length;
    } else if (buildingName === "sixty") {
      sixtyIndex = slides.length;
    } else if (buildingName === "eglinton") {
      eglintonIndex = slides.length;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
}
