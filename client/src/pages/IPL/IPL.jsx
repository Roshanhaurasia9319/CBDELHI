import React from "react";
import Header from "../../components/BettingSite/Header";
import NewsCard from "../../components/NewsCard/NewsCard";
import HorizontalCardSlider from "../../components/IPLComponent/HorizontalCardSlider";


const IPL = ()=>{
    return (
       <div>
         <Header heading={'Best Cricket League in the World'} subHeading={'Tata IPL 2025'} button={'IPL'} />
         <NewsCard />
         <HorizontalCardSlider />
       </div>
    )
}

export default IPL;