let ball = document.querySelector(".ball");
let shadow = document.querySelector(".shadow");
let tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.add("start")
  .to(ball, 0.5, {
    y: 100,
    ease: Circ.easeIn,
  })
  .to(ball, 0.1, {
    scaleY: 0.6,
    transformOrign: "center bottom",
    borderBottomLeftRadius: "40%",
    borderBottomRightRadius: "40%",
  })
  .to(
    shadow,
    0.5,
    {
      width: 90,
      opacity: 0.7,
      ease: Circ.easeIn,
    },
    "start"
  );
