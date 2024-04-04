import React, { useRef, useState } from 'react'
import {  ToastContainer, toast } from 'react-toastify';  //npm i react-toastify

function Seaded() {
    const [keel, muudaKeel] = useState("est");
    const adreRef = useRef();
    const emailRef = useRef();
    const telefonRef = useState();  //inputi seest väärtuse lugemiseks
    const [aadress, muudaAadress] = useState();  //HTMLs väärtuste muutmiseks
    const [email, muudaEmail] = useState();
    const [telefon, muudaTelefon] = useState();

    function sisestaAadress() {  //const sisestaAadress = () => {}
      muudaAadress(adreRef.current.value);  //useState-i funktsioon muutub HTMLs
      toast.success("Aadress sisestatud!");
    }

    function sisestaEmail() {
      muudaEmail(emailRef.current.value);
      toast.success("Email sisestatud!");
    }

    function sisestaTelefon() {
      muudaTelefon(telefonRef.current.value);
      toast.success("Telefon sisestatud!");
    }

  return (
    <div>
        <div>Hetkel on aktiivne keel: {keel}</div>
        <button className={keel === "est" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("est")}>Eesti keel</button>
        <button className={keel === "eng" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("eng")}>English language</button>
        <button className={keel === "rus" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("rus")}>Русский язык</button>

        {keel === "est" && <div className="teade">Leht on eesti keelne</div>}
        {keel === "eng" && <div className="teade">Page is in English</div>}
        {keel === "rus" && <div className="teade">Cтpaицa на русском языке</div>}

        <br /><br />

        <label>Aadress</label>
        <input ref={adreRef} type="text" />
        <button onClick={sisestaAadress}>Sisesta</button>
        <br />

        <label>Email</label>
        <input ref={emailRef} type="text" />
        <button onClick={sisestaEmail}>Sisesta</button>
        <br />

        <label>Telefon</label>
        <input ref={telefonRef} type="text" />
        <button onClick={sisestaTelefon}>Sisesta</button>

        <br /><br />
        <div>Sisestatud aadress: {aadress}</div>
        <div>Sisestatud email: {email}</div>
        <div>Sisestatud telefon: {telefon}</div>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme="dark"
          />
    </div>
  )
}

export default Seaded