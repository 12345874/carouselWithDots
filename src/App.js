import Carousel from "./Carousel";
import Card from "./Components/Card";
import "./styles.css";
let mockData = [
  {
    image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  }
];
export default function App() {
  return (
    <div className="App">
      <Carousel mockData={mockData} />
    </div>
  );
}
