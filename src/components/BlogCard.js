import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">
            18 Jul 2023
          </p>
          <h5 className="title">
            A Beautiful Sunday Morning Renaissance
          </h5>
          <p className="discription">
            You're only As Good As Your Last Connection, Which is An Enormous Pressure. I think There is Something About
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard