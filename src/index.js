import "./styles.css";

const images = [
  "./images/day1.jpg",
  "./images/day2.jpg",
  "./images/day3.jpg",
  "./images/day4.jpg"
];

let i = 0;

function addImage(x, y) {
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";

  document.body.appendChild(img);
  i = i + 1;

  if (i > images.length) {
    i = 0;
  }

  const dayDisplay = document.getElementById("day");

  if (images[i - 1]) {
    dayDisplay.textContent = "Day" + " " + i;
    console.log(i);
  }
}

document.addEventListener("click", function (event) {
  event.preventDefault();
  addImage(event.pageX, event.pageY);
});
