import React, { useState, useEffect } from "react";
import './Contact.css';
import Footer from './Footer'

export default function Contact() {
  const initialData = { name: "", email: "", phone: "", message: "" };
  const [data, setData] = useState(initialData);
  const [imageSrc, setImageSrc] = useState(localStorage.getItem('firstImage') || "https://source.unsplash.com/random?dogs");
  const [firstRender, setFirstRender] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // Save data to local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(data);
    localStorage.setItem('formData', JSON.stringify(storedData));

    // Reset the form data after submission
    setData(initialData);
  };

  useEffect(() => {
    // Fetch a new image from Unsplash every 2 seconds after the first render
    if (!firstRender) {
      const intervalId = setInterval(() => {
        fetchRandomUnsplashImage();
      }, 2000);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    } else {
      // Set the flag to false after the first render
      setFirstRender(false);
    }
  }, [firstRender]);

  const fetchRandomUnsplashImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random?dogs");
      const imageSrc = response.url;
      setImageSrc(imageSrc);
    } catch (error) {
      console.error("Error fetching random Unsplash image:", error);
    }
  };

  useEffect(() => {
    // Save the first image URL to local storage
    localStorage.setItem('firstImage', imageSrc);
  }, [imageSrc]);

  return (
    <div className="contact-container">
      <form className="contact-form" method="post" onSubmit={handleSubmit}>
        <h1>
          Contact <span>Here</span>
        </h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Enter Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="example@gmail.com"
        />
        <input
          type="phone"
          name="phone"
          onChange={handleChange}
          value={data.phone}
          placeholder="+91"
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={data.message}
          cols="30"
          rows="10"
          placeholder="Type here..."
        />
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
      <div className="contact-image">
        {/* Dynamic image source based on state */}
        <img src={imageSrc} alt="ContactImage" />
      </div>
      <Footer/>
    </div>
  );
}
