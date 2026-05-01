const el = document.getElementById("count")

const target = 92;
const duration =  900;

let startTime = null;


function animate(time){
    if(!startTime) startTime = time
    const elapsed = time - startTime;
    const progress = Math.min(elapsed/duration,1)
}


requestAnimationFrame(animate)