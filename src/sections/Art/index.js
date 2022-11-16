import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {

const [artData, setArtdata] = useState([])

useEffect(()=> {
  
fetch('https://api.artic.edu/api/v1/artworks')
  .then((res) => res.json())
  .then((artworks) => setArtdata(artworks.data))
  
}, [])

useEffect(()=> {
  
  fetch('https://api.artic.edu/api/v1/artworks')
    .then((res) => res.json())
    .then((artworks) => console.log(artworks))
    
  }, [])
  

console.log(artData)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">

      <ArtList artData={artData}/>
      
      </div>
    </section>
  )
}

export default ArtsSection
