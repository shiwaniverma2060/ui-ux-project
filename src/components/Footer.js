import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer fixed-bottom">
    <p>&copy; 2023 FurryFlix - Pet Magazine Blog</p>
      <Link to="/Blogs">  Blogs</Link>
      <Link to="/DogBreed">Dog Breeds & Personality</Link>
      <Link to="/DogTrain">Dog Training</Link>
      <Link to="/Vet">Vet</Link>
      <Link to="/Contact">Contact Us</Link>
    </div>
  )
}
