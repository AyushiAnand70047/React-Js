import Navbar from "./Navbar/Navbar";
import ToggleContent from "./Toggle/Toggle";
import ImageCard from "./Image/Image";
import MediaDisplay from "./Media/Media";
import Counter from "./Counter/Counter";
import Timer from "./Timer/Timer";
import Posts from "./API/post";
import Filter from "./Filter/Filter";
import ItemList from "./PrintList/List";
import Slider from "./Slider/Slider";

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import LoginForm from "./LoginForm/LoginForm";
import Calculator from "./Calculator/Calculator";
import DataForm from "./DataForm/DataForm";


function App() {
  const foodCategories = [
    { name: 'Fruits', description: 'Delicious and nutritious fruits.' },
    { name: 'Vegetables', description: 'Fresh and healthy vegetables.' },
    { name: 'Dairy', description: 'Various dairy products.' },
    { name: 'Grains', description: 'Nutritious grains and cereals.' },
    { name: 'Meat', description: 'High-quality meat products.' }
  ];

  return (
    <>
        <Navbar />
        <hr/>
        <ToggleContent/>
        <hr/>
        <ImageCard imageUrl = "https://cdn.pixabay.com/photo/2023/08/21/03/34/droplets-8203505_1280.jpg" />
        <hr/>
        <MediaDisplay mediaType="audio" mediaUrl="https://example.com/audio.mp3" />
        <hr/>
        <MediaDisplay mediaType="video" mediaUrl="https://example.com/video.mp4" />
        <hr/>
        <Counter/>
        <hr/>
        <Timer/>
        <hr/>
        <Posts/>
        <hr/>
        <Filter categories={foodCategories} />
        <hr/>
        <ItemList items={['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']} />
        <hr/>
        <Slider images={[img1,img2,img3 ]} />
        <hr/>
        <LoginForm/>
        <hr/>
        <Calculator/>
        <hr/>
        <DataForm/>




        <br/>
        <br/>


        
    </>

  );
}

export default App;
