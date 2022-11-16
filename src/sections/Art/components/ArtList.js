import ArtListItem from "./ArtListItem"

function ArtList ({artData}) {
    return (
        <ul class="art-list">

      {artData.map((artwork)=>
          
          <ArtListItem artwork={artwork}/>
          
      )}
        </ul>
    )
}

export default ArtList