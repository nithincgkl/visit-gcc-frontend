// page.jsx
import React from "react";
import style from "./style.module.css";
import Gallery from "../../../components/gallery/gallery";

function Page() {
  return (
    <div>
      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <img src="/images/events.jpg" className="w-100" alt="" />
          </div>
          <div className={style["event-banner-text"]}>
            <h1>Transform Your Dealership</h1>
            <button>Talk to Expert</button>
            <p className="text-center">
              Rev up your automotive events with vibrant LED screens.
              <br />
              Our rentals deliver crystal-clear visuals, engaging audiences and
              amplifying your brand.
              <br />
              Take your car shows, launches, and exhibitions to the next level.
            </p>
          </div>
        </div>

        
      </section>

      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <Gallery />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <div className="two-btn"><button>View Other Projects</button><button>End of result</button></div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Page;