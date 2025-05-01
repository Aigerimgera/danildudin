const baseMap = document.getElementById("baseMap");
let isTransitioning = false;

function highlightCountry(imageSrc) {
  if (isTransitioning) return;
  isTransitioning = true;

  baseMap.style.opacity = "0.5";
  setTimeout(() => {
    baseMap.src = imageSrc;
    baseMap.style.opacity = "1";
    isTransitioning = false;
  }, 200);
}

function resetMap() {
  if (isTransitioning) return;
  isTransitioning = true;

  baseMap.style.opacity = "0.5";
  setTimeout(() => {
    baseMap.src = "./image/rar/5192654236285004379.jpg";
    baseMap.style.opacity = "1";
    isTransitioning = false;
  }, 200);
}
