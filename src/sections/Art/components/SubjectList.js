function SubjectList ({artwork}) {
    return (
        <ul>
        {
        artwork.classification_titles.map((title)=>
          <li>{title}</li>
        )
        }
      </ul>
    )
}

export default SubjectList