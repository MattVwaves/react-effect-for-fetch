import SubjectList from "./SubjectList"

function ArtListItem ({artwork}) {
    return (
        <li key={artwork.id}>

        {console.log(artwork.id)}
      <div class="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        />
      </div>
      <h3>{artwork.title}</h3>
      <p>{artwork.artist_title}</p>
      <h4>Artistic Subjects:</h4>
        <SubjectList artwork={artwork}/>
      
    </li>
    )
}

export default ArtListItem