import React from 'react';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import DogBreed from './components/DogBreed';
import DogTrain from './components/DogTrain';
import Contact from './components/Contact';
import Vet from './components/Vet';
import ReadMore1 from './components/Readmore1';
import ReadMore2 from './components/Readmore2';
import ReadMore3 from './components/Readmore3';
import ReadMore4 from './components/Readmore4';
import ReadMore5 from './components/Readmore5';
import Blog1 from './components/blog1';
import Blog2 from './components/blog2';
import Blog3 from './components/blog3';
import Blog4 from './components/blog4';
import Blog5 from './components/blog5';
import Blog6 from './components/blog6';
import Blog7 from './components/blog7';
import Blog8 from './components/blog8';
import Blog9 from './components/blog9';
import Blog10 from './components/blog10';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/DogBreed" element={<DogBreed />} />
          <Route path="/DogTrain" element={<DogTrain />} />
          <Route path='/Vet' element={<Vet />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Readmore1" element={<ReadMore1/>}/>
          <Route path='/Readmore2' element={<ReadMore2/>} />
          <Route path='/Readmore3' element={<ReadMore3/>} />
          <Route path='/Readmore4' element={<ReadMore4/>} />
          <Route path='/Readmore5' element={<ReadMore5/>} />
          <Route path='/blog1' element={<Blog1/>} />
          <Route path='/blog2' element={<Blog2/>} />
          <Route path='/blog3' element={<Blog3/>} />
          <Route path='/blog4' element={<Blog4/>} />
          <Route path='/blog5' element={<Blog5/>} />
          <Route path='/blog6' element={<Blog6/>} />
          <Route path='/blog7' element={<Blog7/>} />
          <Route path='/blog8' element={<Blog8/>} />
          <Route path='/blog9' element={<Blog9/>} />
          <Route path='/blog10' element={<Blog10/>} />
          <Route path='/Footer' element={<Footer/>} />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
