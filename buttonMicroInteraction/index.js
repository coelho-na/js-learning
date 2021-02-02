gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline({
  defaults: { ease: Power2.easeOut, delay: 1 },
});
btn = document.querySelector(".btn");
rule = CSSRulePlugin.getRule(".btn::before");

tl.to(".btn__label", {
  opacity: 0,
  height: 0,
  position: "absolute",
  duration: ".2s",
}).to(
  ".btn",
  {
    borderRadius: "50%",
    width: "2.5em",
    height: "2.5em",
  },
  "-=5s"
);
