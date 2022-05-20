import React from 'react'
import Image from 'next/image'
const LatestBlog = ({data}) => {
  return (
   <>
   {data.map(post => (
        <div key={post.id}>
        <Image src={post.yoast_head_json.og_image[0].url} width={412} height={226} layout="raw"/>
        <h2>{post.title.rendered}</h2>
        <>{post.excerpt.rendered}</>

        </div>
    ))}
   </>
  )
}

export default LatestBlog