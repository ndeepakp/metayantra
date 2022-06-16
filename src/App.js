import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { IssueNft } from "./components/issuenft";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const images = [
  'https://www.chartcourse.com/wp-content/uploads/2014/06/shutterstock_188325239.jpg',
  'https://media.istockphoto.com/photos/entrance-gate-card-access-building-security-system-picture-id645034122?k=20&m=645034122&s=612x612&w=0&h=NrSro2gl37YGDhSAh-jTy5PUNHhk117-sTtZFOiPGAo='
];

const options = [
  'Access Card', 'Rewards', 'Awards'
];

  const defaultOption = options[0];
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

  <Navigation />
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
	  <IssueNft data={landingPageData.IssueNft}/>
    </div>
  );
};

export default App;
