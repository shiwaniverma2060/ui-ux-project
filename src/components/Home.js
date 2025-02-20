import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from  './Footer'

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#f8f9fa'); // Default light background color
  const [textColor, setTextColor] = useState('#000000'); // Default text color

  const changeImage = (index) => {
    setCurrentIndex(index);

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrls[index];

    img.addEventListener('load', () => {
      const averageColor = getAverageColor(img);
      setBackgroundColor(averageColor);
      setTextColor(getTextColor(averageColor));
    });
  };

  const getAverageColor = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
    let sumR = 0,
      sumG = 0,
      sumB = 0;

    for (let i = 0; i < imageData.length; i += 4) {
      sumR += imageData[i];
      sumG += imageData[i + 1];
      sumB += imageData[i + 2];
    }

    const pixelCount = imageData.length / 4;
    const avgR = Math.round(sumR / pixelCount);
    const avgG = Math.round(sumG / pixelCount);
    const avgB = Math.round(sumB / pixelCount);

    return `rgb(${avgR}, ${avgG}, ${avgB})`;
  };

  const getTextColor = (backgroundColor) => {
    const threshold = 128;
    const rgb = backgroundColor.match(/\d+/g);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > threshold ? '#000000' : '#ffffff';
  };

  const imageUrls = [
    'https://media.istockphoto.com/id/1059650734/photo/happy-smiling-young-golden-retriever-dog-under-light-gray-plaid-pet-warms-under-a-blanket-in.jpg?s=612x612&w=0&k=20&c=jdyuWKX_m0EqMhAK8oUw4MqBogPJF078B4LaXNXd_0M=',
    'https://source.unsplash.com/random?dog,2',
    'https://source.unsplash.com/random?dog,3',
    'https://source.unsplash.com/random?dog,4',
    'https://source.unsplash.com/random?dog,5',
    'https://media.istockphoto.com/id/185330333/photo/dachshund.jpg?s=612x612&w=0&k=20&c=WAk119F8LYcO5yz7Lw7zGHMTi2ZAIkB29jzxMRdFZnA=',
  ];

  
  

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      changeImage(nextIndex);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="Home" style={{ backgroundColor, color: textColor }}>
      <header className="Home-header">
        <div className="Image-slider">
          <div className='Image active'>
          {imageUrls.map((url, index) => (
            <div key={index} className={`Image ${index === currentIndex ? 'active' : ''}`}>
              <img src={url} alt={`dog ${index + 1}`} />
            </div>
          ))}
        </div>
        </div>
        <div className="legend-container">
          <h1><b>FurryFlix</b></h1>
          <h3>Dog Blog.</h3>
          <p>Welcome to our dog blog, where we share stories, tips, and more about our furry friends!</p>
          <Link to="/Blogs" className="btn btn-primary btn-lg">
            Blog
          </Link>
        </div>
      </header>
       <Footer/>
    </div>
  );
}

export default Home;
