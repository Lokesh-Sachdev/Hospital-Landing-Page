import axios from "axios"
import React, { useEffect, useState } from "react"
import { TestCard } from "../../components"

import "./testimonials.scss"

const Testimonials = () => {
  const [post, SetPost] = useState("")

  useEffect(() => {
    axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1").then(
      res => {
        SetPost(res.data.data)
      },
      error => {
        console.log(error)
      }
    )
  }, [])

  console.log(post)
  return (
    <div className="section__padding testimonial__container">
      <div>
        <h2 className="heading">What Our Customers Say</h2>
      </div>
      <div className="testimonial__listing">
        {post.map((item, index) => (
          <TestCard
            Reviews={item.Reviews}
            Name={item.Name}
            Company={item.Company}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
