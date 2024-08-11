import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Footer.css";

export const Footer = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500
  });

  const slideIn = useSpring({
    from: { transform: "translateY(100%)" }, 
    to: { transform: "translateY(0%)" },
    delay: 500
  });

  const bounce = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: { tension: 300, friction: 10 },
    loop: { reverse: true }
  });

  return (
    <footer className="footer pattern">
      <animated.div style={fade} className="footer-content">
        <div className="footer-links">
          <animated.a style={bounce} href="/home">
            Home
          </animated.a>
          <animated.a style={bounce} href="/about">
            About
          </animated.a>
          <animated.a style={bounce} href="/contact">
            Contact
          </animated.a>
          <animated.a style={bounce} href="/services">
            Services
          </animated.a>
          <animated.a style={bounce} href="/careers">
            Careers
          </animated.a>

          <animated.a style={bounce} href="/privacy-policy">
            Privacy Policy
          </animated.a>
          <animated.a style={bounce} href="/terms-of-service">
            Terms of Service
          </animated.a>
        </div>
        <div className="footer-gif">
          <animated.img
            style={fade}
            src="https://cdn.pixabay.com/animation/2022/10/20/01/56/01-56-58-877_512.gif"
            alt="Gif 1"
          />
          <animated.img
            style={fade}
            src="https://cdn.pixabay.com/animation/2024/05/04/08/16/08-16-20-609_512.gif"
            alt="Gif 2"
          />
          <animated.img
            style={fade}
            src="https://cdn.pixabay.com/animation/2024/03/26/09/06/09-06-58-457_512.gif"
            alt="Gif 3"
          />
        </div>
      </animated.div>
      <animated.div style={slideIn} className="footer-animation">
        <p>I My a Coder</p>
      </animated.div>
      <p> 2024 Your Company. All rights reserved.</p>
      <h1 className="footer-h1">Design By Software_Service_Hub .</h1>
    </footer>
  );
};
