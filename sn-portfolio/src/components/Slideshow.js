// src/App.js
import ImageSlider from "./ImageSlider";
import Capstone from "../assets/Capstone.jpg";
import Shrub from "../assets/Shrub.jpg";
import Game from "../assets/Game.jpg";
import amazon from "../assets/amazon.jpg";
import Online_Education from "../assets/Online_Education.jpg";


function App() {
  const images = [
    Capstone,
    Shrub,
    Game,
    amazon,
    Online_Education
    // Add more image URLs here
  ];
  
  return (
    <div className="App">
      <div style={{padding: "10px"}}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default App;