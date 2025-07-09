import 'bootstrap/dist/css/bootstrap.min.css';

import TirangaNavbar from './components/TirangaNavbar';
import VipBanner from './components/VipBanner';
import GameCategories from './components/GameCategories';
import LotteryGames from './components/LotteryGames';
import GameGrid from './components/GameGrid';
import GameRecommendation from './components/GameRecommendation';
import SlotsGrid from './components/SloatGrid';
import SportsGrid from './components/SportsGrid';
import CasinoGrid from './components/CasinoGrid';
import FishingGrid from './components/FishingGrid';
import RummyCard from './components/RummyCard';
import FooterInfo from './components/FooterInfo';
import MobileMenu from './components/MobileMenu';
import BottomNavBar from './components/BottomNavbar';
import WinningInfo from './components/WinningInfo';
import Leaderboard from './components/LeaderBoard';

function App() {
  
  return (
    <>
      <TirangaNavbar />
      <VipBanner />
      <GameCategories  />
      <LotteryGames />
      <GameGrid />
      <GameRecommendation  />
      <SlotsGrid  />
      <SportsGrid  />
      <CasinoGrid />
      <FishingGrid  />
      <RummyCard  />
      <WinningInfo />
      <Leaderboard />
      <FooterInfo/>
      <MobileMenu  />
      <BottomNavBar />
    </>
  );
}

export default App;
