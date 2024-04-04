import React, { useState } from 'react'

function Kontakt() {
  const [aadress, määraAadress] = useState("Tallinn");
  const [telefon, määraTelefon] = useState("5512345");
  const [email, määraEmail] = useState("bla@baa.com");
  const [ingliseKeelne, määraIngliseKeelne] = useState("ei");

  const inglise = () => {
    määraAadress("New York");
    määraTelefon("911");
    määraEmail("new@york.com");
    määraIngliseKeelne("jah");
  }

  return (
    <div>
      <div>{ aadress }</div>
      <div>{ telefon }</div>
      <div>{ email }</div>
      <button onClick={inglise}>Muuda inglise keelseks</button>
      { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }
    </div>
  )
}

export default Kontakt