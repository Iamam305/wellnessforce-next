import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'
const LatestBlog = ({ data }) => {
  return (
    <>
      <div className="container py-24 mx-auto card-parent">
        <div className="flex flex-wrap m-4">
          {data.map(post => (
            <div className="md:w-1/3 pb-28" key={post.id}>
              <div className="h-full  border-opacity-60  overflow-hidden p-7 bg-white flex flex-col justify-between mx-3 border-b-8 border-gray-400">
                <Image src={post.yoast_head_json.og_image[0].url} width={412} height={232} className='mx-auto' />
                <div className="flex flex-col justify-between card-text mt-4">
                  <div>
                    <h2 className="title-font text-2xl font-bold  text-gray-900 mb-3 ">{post.title.rendered}</h2>
                    <div className="text-gray-700 mb-3 text-lg font-medium leading-loose " dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </div>
                  <div className=" px-8 py-4 bg-btnColor">
                    <Link href={`/blog/${post.slug}`} className="block text-white">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`

            .card-parent{
              background-image:url('https://storage.googleapis.com/wellness-force-media/2021/07/bg_layers.png');
              background-attachment: fixed;

            }


            .card-text{
               height: calc(100% - 200px);
               overflow:hidden;
            }
      
      
      `}</style>
    </>
  )
}

export default LatestBlog