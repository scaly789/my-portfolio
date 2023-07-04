import anime from "animejs/lib/anime.es.js"
import { useState, useRef, useEffect } from "react";

const Icon = () => {
  
  const flame1 = useRef(null);
  const flame2 = useRef(null);
  const flame3 = useRef(null);
  const base = useRef(null);


  useEffect(() => {
    flame1.current = anime({
        targets: '#fireNodes1 .cf-flame',
        delay: anime.stagger(100),
        translateY: function(){return anime.random(0, 300);},
        rotate:30,
        opacity:function(){return anime.random(.5, 1);},
        translateX: function(){return anime.random(0, -60);},
        scale:0,
        skew: function () {return anime.random(0, 10);},
        loop: true,
        easing: "easeInOutSine",
    });

    flame2.current = anime({
        targets: '#fireNodes2 .cf-flame',
        delay: anime.stagger(400),
        translateX: function(){return anime.random(-30, 0);},
        translateY: function(){return anime.random(0, -260);},
         translateY: function(){return anime.random(-260, -160);},
        translateX: function(){return anime.random(0, -30);},
        scale:0,
        rotate: function() { return anime.random(0, 60); },
        skew:function(){
          return anime.random(0, 30);
        },
        loop: true,
        easing: "easeInOutSine"
      });

    flame3.current = anime({
        targets: '#fireNodes1 .cf-flame',
        delay: anime.stagger(500),
        translateY: function(){return anime.random(-300, -200);},
        opacity:function(){return anime.random(0, 1);},
        translateX: function(){return anime.random(-50, 50);},
        scale:0,
        rotate: function() { return anime.random(0, -30); },
        skew: function () {return anime.random(0, 20);},
        loop: true,
        easing: "easeInOutSine",
      });

      base.current = anime({
        targets: '#base-fire .cf-flame',
        delay: anime.stagger(400),
        translateY: function(){return anime.random(0, -10);},
        keyframes: [
        {scale: .8},
        {scale: .825},
        {scale: .9},
        {scale: .925},
        {scale: 1}
      ],
      duration: 400,
      easing: 'easeInOutSine',
      loop: true,
      });
    }, []);

  return (
    <div class="cf-container">
        <div class="cf-flame-container"  id="fireNodes1">
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
        </div>
        <div class="cf-flame-container" id="fireNodes2">
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
        </div>
        <div class="cf-flame-container" id="base-fire">
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
            <div class = "cf-flame"></div>
        </div>
        <div class= "cf-log-container">
            <div class="cf-log"></div>
            <div class="cf-log"></div>
        </div>
    </div>
  );
};

export default Icon;