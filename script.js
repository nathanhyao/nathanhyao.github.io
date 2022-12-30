let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline
//   .to('.foreground', 3, { y: -750 })
//   .to('.birds', 3, { x: 1600, y: -450 }, "-=3")
//   .fromTo('.background', { y: -150 }, { y: 0, duration: 3 }, "-=3")
//   .fromTo('.content', { top: "100%" }, { top: "0%", duration: 5 }, "-=3")
//   .fromTo('.about', { opacity: 0 }, { opacity: 1, duration: 2 }, "-=3");

timeline
  .to('.foreground', 4, { top: "-75%" })
  .to('.birds', 4, { x: 1800, top: "-45%" }, "-=4")
  .to('.birds', 0, { x: 0 })
  .fromTo('.background', { top: "-10%" }, { top: "0%", duration: 3 }, "-=4")
  .fromTo('.content', { top: "100%" }, { top: "0%", duration: 5 }, "-=4")
  .fromTo('.about', { opacity: 0 }, { opacity: 1, duration: 2 }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: "main",
  duration: "250%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("main")
  .addTo(controller);