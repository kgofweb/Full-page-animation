const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const burger = document.querySelector('.burger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
      hero,
      1, {
         height: "0%"
      }, {
         height: "80%",
         ease: Power2.easeInOut
      }
   )
   .fromTo(
      hero,
      1.2, {
         width: "100%"
      }, {
         width: "80%",
         ease: Power2.easeInOut
      }
   )
   .fromTo(
      slider,
      1.2, {
         x: "-100%"
      }, {
         x: "0%",
         ease: Power2.easeInOut
      },
      "-=1.2"
   )
   .fromTo(
      logo,
      0.5, {
         x: 40,
         opacity: 0
      }, {
         x: 0,
         opacity: 1
      },
      "-=0.5"
   )
   .fromTo(
      burger,
      0.6, {
         x: 70,
         opacity: 0
      }, {
         x: 0,
         opacity: 1
      },
      "-=0.5"
   )
   .fromTo(
      headline,
      0.7, {
         y: 70,
         opacity: 0
      }, {
         y: 0,
         opacity: 1
      },
      "-=0.5"
   )