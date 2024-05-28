import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </div>
  );
}