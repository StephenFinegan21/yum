import { gsap } from "gsap";

export function introAnimate() {
  var tl = gsap.timeline();

  tl.from("#h1", { duration: 0.4, y: 30, opacity: 0, filter: "blur(10px)" })
    .from("#p1", { duration: 0.3, y: 40, opacity: 0, filter: "blur(8px)" })
    .from("#p2", { duration: 0.3, y: 50, opacity: 0, filter: "blur(8px)" })
    .from("#p3", { duration: 0.3, y: 60, opacity: 0, filter: "blur(8px)" });

  gsap
    .fromTo("#date", { duration: 0.3, opacity: 0 }, { opacity: 1 })
    .delay(1.4);
  gsap
    .fromTo("#s2", { duration: 0.3, y: 20, opacity: 0 }, { opacity: 1 })
    .delay(1.4);

  gsap.from("#recipe-list", {
    duration: 0.5,
    opacity: 0,
    y: 30,
    stagger: 0.4,
    ease: "power2.out",
  });
}
