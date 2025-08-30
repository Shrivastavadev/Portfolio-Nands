console.log("myscript.js loaded ✅");

gsap.registerPlugin(SplitText);
document.fonts.ready.then(()=>{
const split = SplitText.create(".hero-section", { type: "words, chars" });
gsap.from(split.chars, {
    yPercent: "random([-100,100])",
    rotation: "random(-30,30)",
    ease: "back-out",
    autoAlpha: 0,
    yoyo: true,
    stagger: {
      amount: 1,
      from: "random"},
  });
})
//adding 3d- hover effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;   // cursor X inside card
    const y = e.clientY - rect.top;    // cursor Y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // map cursor position to rotation angles
    const rotateX = ((y - centerY) / centerY) * 5; // max tilt 10deg
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0) scale(1)`; // reset
  });
});

function copyMail(event) {
  event.preventDefault(); // prevent link navigation

  const email = "nandana.manoj@niser.ac.in";
  
  navigator.clipboard.writeText(email).then(() => {
    alert("📧 Mail ID copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
