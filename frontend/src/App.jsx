
import Categories from "./components/Categories/Categories"
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Campaigns from "./components/Campaigns/Campaigns";
import Blogs from "./components/Blogs/Blogs";
import Sliders from "./components/Slider/Sliders";
import Brands from "./components/Brands/Brands";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle";
import "./App.css";


function App() {
  return (
    <div>
      <Header/>
      <Sliders/>
      <Categories/>
      <Products/>
      <Campaigns/>
      <Products/>
      <Blogs/>
      <Brands/>
      <CampaignSingle/>
      <Policy/>
      <Footer/>
    </div>
  );
}

export default App;
