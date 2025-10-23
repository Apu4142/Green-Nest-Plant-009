import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import PlantTips from '../components/PlantTips';
import GreenExperts from '../components/GreenExperts';
import HeroSwiper from '../components/HeroSwiper';

const HomeLayouts = () => {
    return (
       <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
                <section>
                     <HeroSwiper></HeroSwiper>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-3'>
                <section>
                     <Outlet></Outlet>
                </section>
                <section>
                    <PlantTips></PlantTips>
                </section>
                <section>
                    <GreenExperts></GreenExperts>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
             
        </div>
    );
};

export default HomeLayouts;