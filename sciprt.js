const el = document.getElementById("count");

const target = 92;
const duration = 900;

let startTime = null;

function animate(time) {
  if (!startTime) startTime = time;
  const elapsed = time - startTime;
  const progress = Math.min(elapsed / duration, 1);
  const easeOut = 1 - Math.pow(1 - progress, 3);
  const current = Math.floor(easeOut * target);
  el.textContent = current;
  if (progress < 1) {
    requestAnimationFrame(animate);
  } else {
    el.textContent = target;
    document.querySelector(".arrow").classList.add("animate-arrow");
  }
}

requestAnimationFrame(animate);
