import React from "react";
import style from "./style.module.css";
import Carousel from "../../../components/carousel/carousel";

function page() {
  const recentEvents = [
    {
      id: 1,
      image: "/images/recent-events/01.jpg",
      title: "Transform Your Dealership",
      description:
        "Showcase vehicle design and performance in stunning visual clarity and scale that compels customers to get behind the wheel today.",
    },
    {
      id: 2,
      image: "/images/recent-events/02.jpg",
      title: "Rev Up Your Events",
      description:
        "Elevate your car dealership's visibility with our stunning LED screens.Rent cutting-edge displays that capture attention and drive sales.Transform your showroom into a modern retail experience.",
    },
    {
      id: 3,
      image: "/images/recent-events/03.jpg",
      title: "Automotive",
      description:
        "Rev up your automotive events with vibrant LED screens.Our rentals deliver crystal-clear visuals, engaging audiences and amplifying your brand.",
    },
    {
      id: 4,
      image: "/images/recent-events/01.jpg",
      title: "Transform Your Dealership",
      description:
        "Showcase vehicle design and performance in stunning visual clarity and scale that compels customers to get behind the wheel today.",
    },
    {
      id: 5,
      image: "/images/recent-events/02.jpg",
      title: "Rev Up Your Events",
      description:
        "Elevate your car dealership's visibility with our stunning LED screens.Rent cutting-edge displays that capture attention and drive sales.Transform your showroom into a modern retail experience.",
    },
    {
      id: 6,
      image: "/images/recent-events/03.jpg",
      title: "Automotive",
      description:
        "Rev up your automotive events with vibrant LED screens.Our rentals deliver crystal-clear visuals, engaging audiences and amplifying your brand.",
    },
  ];

  return (
    <div>
      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <img src="/images/events.jpg" className="w-100" alt="" />
          </div>
          <div className={style["event-banner-text"]}>
            <h1>Automotive</h1>
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
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div>
              <h3>Recent Events</h3>
            </div>
            <div className="text-right"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1">
            <Carousel
              ourScreens={recentEvents}
              count={2.5}
              type="events-recent-events"
            />
          </div>
        </div>
      </section>

      <section className={style["event-corporate"]}>
        <div className={style["event-corporate-container"]}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1">
              <img src="/images/events2.jpg" alt="Displays" className="w-100" />
              <div>
                <h3 className="text-center">Corporate</h3>
                <button>Talk to Expert</button>
                <p></p>
              </div>
              <div className="text-center">
                Rev up your automotive events with vibrant LED screens.
                <br />
                Our rentals deliver crystal-clear visuals, engaging audiences
                and amplifying your brand.
                <br />
                Take your car shows, launches, and exhibitions to the next
                level.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div>
              <h3>Recent Events</h3>
            </div>
            <div className="text-right"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1">
            <Carousel
              ourScreens={recentEvents}
              count={2.5}
              type="events-recent-events"
            />
          </div>
        </div>
      </section>

      <section className={style["event-corporate"]}>
        <div className={style["event-corporate-container"]}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1">
              <img
                src="/images/government.jpg"
                alt="Displays"
                className="w-100"
              />
              <div>
                <h3 className="text-center">Government</h3>
                <button>Talk to Expert</button>
                <p></p>
              </div>
              <div className="text-center">
                Rev up your automotive events with vibrant LED screens.
                <br />
                Our rentals deliver crystal-clear visuals, engaging audiences
                and amplifying your brand.
                <br />
                Take your car shows, launches, and exhibitions to the next
                level.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div>
              <h3>Recent Events</h3>
            </div>
            <div className="text-right"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1">
            <Carousel
              ourScreens={recentEvents}
              count={2.5}
              type="events-recent-events"
            />
          </div>
        </div>
      </section>

      <section className={style["event-corporate"]}>
        <div className={style["event-corporate-container"]}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1">
              <img src="/images/retail.jpg" alt="Displays" className="w-100" />
              <div>
                <h3 className="text-center">Retail</h3>
                <button>Talk to Expert</button>
                <p></p>
              </div>
              <div className="text-center">
                Rev up your automotive events with vibrant LED screens.
                <br />
                Our rentals deliver crystal-clear visuals, engaging audiences
                and amplifying your brand.
                <br />
                Take your car shows, launches, and exhibitions to the next
                level.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style["event-banner"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div>
              <h3>Recent Events</h3>
            </div>
            <div className="text-right"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1">
            <Carousel
              ourScreens={recentEvents}
              count={2.5}
              type="events-recent-events"
            />
          </div>
        </div>
      </section>











    </div>
  );
}

export default page;
