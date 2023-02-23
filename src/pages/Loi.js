import React from 'react'
import { Link } from 'react-router-dom'

const Loi = () => {
  return (
   <>
    <div className="not-found text-center">
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    /> <br />

    <Link to="/" className="link-home link-info text-decoration-none fw-bold">
      Go Home
    </Link>
  </div>

   </>
  )
}

export default Loi
