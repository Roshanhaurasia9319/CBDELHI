import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Card from './components/Cards/Card'
// import CompanyBanner from './components/CompanyBanner/CompanyBanner'
// import NewsCard from './components/NewsCard/NewsCard'
// import LegalSection from './components/LegalSection/LegalSection'
// import BettingInfo from './components/BettingInfo/BettingInfo'
// import './App.css'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer"
import BettingSites from './pages/BettingSites/BettingSites'
import Blogs from './pages/Blogs/Blogs';
import IPL from './pages/IPL/IPL';
import CasinoGameApp from './pages/CasinoGameApp/CasinoGameApp';
import FantasyApp from './pages/FantasyApp/FantasyApp';
import BettingApp from './pages/BettingApp/BettingApp';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'

function App() {
  return (
    <>
      {/* <div className="main">
       <Navbar />
       <h1>Best Betting Sites in India for IPL 2024 </h1>
       <h2 class="emoji">🤩</h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <CompanyBanner />
      <NewsCard />
      <LegalSection />
      <BettingInfo />
      <Footer />



     </div> */}

      <BrowserRouter>
        <div className="main">
          <Navbar />
         
          <Routes>
            <Route element={ <Home/> } path='/'/>
            <Route element={ <BettingSites /> } path='/BettingSites'/>
            <Route element={ <Blogs /> } path='/blogs' />
            <Route element={ <IPL /> } path='/IPL' />
            <Route element={ <FantasyApp /> } path='/fantasyApp' />
            <Route element={ <BettingApp />} path='/bettingApp' />
            <Route element={ <CasinoGameApp />} path='/casinoGameApp' />
            <Route element={ <TermsAndConditions/> } path='/TermsAndConditions' />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
