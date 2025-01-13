import React from 'react';
import Link from 'next/link';
import style from './style.module.css';

// Define the type for a single country
interface Country {
  id: number;
  link: string;
  heading: string;
  image: string;
}

const countriesData: Country[] = [
  { id: 6, link: '/country/uae', heading: 'UAE', image: "../assets/images/countries/06.jpg" },
  { id: 5, link: '/country/saudi-arabia', heading: 'Saudi Arabia', image: "../assets/images/countries/05.jpg" },
  { id: 4, link: '/country/qatar', heading: 'Qatar', image: "../assets/images/countries/04.jpg" },
  { id: 3, link: '/country/oman', heading: 'Oman', image: "../assets/images/countries/03.jpg" },
  { id: 2, link: '/country/kuwait', heading: 'Kuwait', image: "../assets/images/countries/02.jpg" },
  { id: 1, link: '/country/bahrain', heading: 'Bahrain', image: "../assets/images/countries/01.jpg" },
];

const CountriesLink: React.FC = () => {
  return (
    <div className={style['home-countries']}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5>Welcome to GCC Countries</h5>
          </div>
          {countriesData.map((country) => (
            <div
              key={country.id}
              className="col-xxl-2 col-xl-2 col-lg-4 col-md-2 col-sm-2 col-6"
            >
              <Link href={country.link}>
                <div>
                  <img src={country.image} alt={country.heading} />
                  <div className={style['title-countries']}>
                    {/* <h6>{country.heading}</h6> */}
                    {/* Uncomment if ArrowIcon is needed */}
                    {/* <ArrowIcon /> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesLink;
