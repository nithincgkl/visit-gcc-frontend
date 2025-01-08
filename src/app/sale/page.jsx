import React from 'react'
import style from "./style.module.css";
import SingleHomeScreens from '../../../components/home/our-screens';


const Page = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
    
      
      <section className={`${style['home-Screens']} py-16 px-4`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <SingleHomeScreens />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
