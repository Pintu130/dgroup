import React from 'react'
import { Link } from 'react-router-dom'

const FooterAnimation = () => {
  return (
    <div>
       <footer className="">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>

      <div className="bg-dark py-4 bg-gray-950 text-white">
        <div className="text-center">
          <p className="mb-2">
            Copyright &copy;{" "}
            <Link
              className="text-blue-600"
              to="http://dgrouppackersandmovers.com/"
              target="_blank"
            >
              dgrouppackersandmovers.com
            </Link>
            , All Right Reserved.
          </p>

          <p className="mb-0">
            Designed & Distributed By: <Link to={""}>Pintu Sharma</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterAnimation
