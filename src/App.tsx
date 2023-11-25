import { ReactElement } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import MusicSection from './components/MusicSection';
import TourSection from './components/TourSection';
import StoreSection from './components/StoreSection';
import BandSection from './components/BandSection';
import Footer from './components/Footer';
import './style.sass';

export default function App(): ReactElement {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <MusicSection />
                <TourSection />
                <StoreSection />
                <BandSection />
            </main>
            <Footer />
        </>
    )
}