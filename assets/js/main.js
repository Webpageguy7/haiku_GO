
//script.js
    (function () {
        const marquee = document.getElementById('marquee');
        const container = marquee.parentElement;

        //Duplicate content for a seamless loop
        marquee.InnerHTML += marquee.innerHTML;

        let speed = 0.5; //pixels per frame
        let position = 0;

        function animate() {
            position -= speed;
            if (Math.abs(position) >= marquee.scrollHeight / 2) {
                position = 0; //reset to start
            }
            marquee.style.transform = 'translateY(${position}px)';
            requestAnimationFrame(animate);
        }
        //start animation
        animate();
    }) ();

    // Initialize Marqueefy
const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
const marqueefyInstances = marqueefyList.map(m => {
  return new marqueefy.Marqueefy(m, {direction: 'up', speed: 100})
  
})
    
