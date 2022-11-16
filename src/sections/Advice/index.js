import { useEffect, useState } from "react"

function AdviceSection() {

  const [advice, setAdvice] = useState([])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
