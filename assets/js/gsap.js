gsap.to(".parallax", {
    scrollTrigger:{
        trigger: ".page-1",
        start: "20% 100%",
        end:"bottom 100%",
        markers: true,
        scrub: true
    },

    y: -45,
    duration: 5,
});