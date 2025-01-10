import React, { useEffect } from 'react';
import gsap from 'gsap';

const MouseMove = () => {
  useEffect(() => {
    const mousemoveHandler = (e: MouseEvent) => {
      try {
        const tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Main Cursor Moving
        tl.to(".cs_cursor_1", {
          ease: "power2.out",
        }).to(
          ".cs_cursor_2",
          {
            ease: "power2.out",
          },
          "-=0.4"
        );
      } catch (error) {
        console.log(error);
      }
    };

    // Add the event listener only if running in the browser
    if (typeof window !== 'undefined') {
      document.addEventListener("mousemove", mousemoveHandler);
    }

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <>
      <div className="cs_cursor_1"></div>
      <div className="cs_cursor_2"></div>
    </>
  );
};

export default MouseMove;


