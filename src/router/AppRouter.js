import { Routes, Route } from 'react-router-dom';

import { CardsScreen } from '../components/cards/CardsScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { FormsScreen } from '../components/forms/FormsScreen';

export const AppRouter = () => {
    return (
        <div className="2xl:container 2xl:mx-auto App">
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cards" element={<CardsScreen />} />
                <Route path="/forms" element={<FormsScreen />} />
            </Routes>
        </div> 
    )
}