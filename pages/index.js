import CrossSell from "../components/landingPage/CrossSell"
import FeatIn from "../components/landingPage/featIn"
import Hero from "../components/landingPage/Hero"
import LatestBlog from "../components/landingPage/LatestBlog"
import Navbar from "../components/Navbar"

const index = ({data}) => {
  return (
    <>
      <Navbar />
      <Hero/>
      <CrossSell/>
      <FeatIn/>
      <LatestBlog data ={data}/>
      
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://wellnessforce.com/wp-json/wp/v2/posts?per_page=6`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default index