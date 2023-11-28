import "./Home.css";
import ReactAudioPlayer from "react-audio-player";
import Music from "../sounds/music/good-night-160166.mp3";
import lightRainAmbient from "../sounds/atmosphere/light-rain-ambient-114354.mp3" 
import thunder from "../sounds/atmosphere/natural-thunder-113219.mp3"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Music</h2>
        <ReactAudioPlayer src={Music} autoPlay controls loop />
      </div>
      <div>
        <h2>Atmosphere</h2>
        <ReactAudioPlayer src={lightRainAmbient} controls loop/>
        <br />
        <ReactAudioPlayer src={thunder} controls loop/>
      </div>
    </div>
  );
}

export default Home;
