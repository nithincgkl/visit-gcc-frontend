import React from 'react'
import style from './style.module.css';
import Link from 'next/link';

function BannerVideo() {
  return (
    <div>
    <section className={style['nav-banner-container']}>
    <div className={style['banner']}>
      <div className="container-fluid">
        <div className="col-md-12">
          <video autoPlay loop muted playsInline className={style['banner-video']}>
            <source src="/assets/videos/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={style['banner-content']}>
          <h1 className="cs_hero_title">Bigscreen Beyond</h1>
          <h2>Your display partner</h2>
        </div>

      
        <Link href="/portfolio"
        className="cs_hero_btn cs_round_btn btn-item"><span></span>
        Talk to Expert</Link>

        <button className={style['talk-btn']}>Talk to Expert</button>
      </div>
    </div>
  </section>
    </div>
  )
}

export default BannerVideo
