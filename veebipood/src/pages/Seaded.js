import React, { useRef, useState } from 'react'
import {  ToastContainer, toast as toastify } from 'react-toastify';  //npm i react-toastify
import toast, { Toaster } from 'react-hot-toast';


function Seaded() {
    const [keel, muudaKeel] = useState("est");
    const adreRef = useRef();
    const emailRef = useRef();
    const telefonRef = useRef();  //inputi seest väärtuse lugemiseks
    const [aadress, muudaAadress] = useState(localStorage.getItem("aadress") || "Ei ole veel sisestatud!");  //HTMLs väärtuste muutmiseks
    const [email, muudaEmail] = useState(localStorage.getItem("email") || "Ei ole veel sisestatud!");
    const [telefon, muudaTelefon] = useState(localStorage.getItem("telefon") || "Ei ole veel sisestatud!");

    function sisestaAadress() {  //const sisestaAadress = () => {}
      if (adreRef.current.value === "") {
        toast.error("Aadress on jäänud sisestamata",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (adreRef.current.value.length < 5) {
        toast.error("Aadress on liiga lühike",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (adreRef.current.value.toLowerCase()[0] === adreRef.current.value[0]) {
        toast.error("Aadress on väikese tähega",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      muudaAadress(adreRef.current.value);  //useState-i funktsioon muutub HTMLs
      toastify.success("Aadress sisestatud!");
      localStorage.setItem("aadress" , adreRef.current.value);
      adreRef.current.value = "";
    }

    function sisestaEmail() {
      if (emailRef.current.value === "") {
        toast.error("Email on jäänud sisestamata",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (emailRef.current.value.length < 5) {
        toast.error("Email on liiga lühike",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (emailRef.current.value.includes("@") === false) {
        toast.error("Email ei ole korrektne!",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      muudaEmail(emailRef.current.value);
      toastify.success("Email sisestatud!");
      localStorage.setItem("email" , emailRef.current.value);
      emailRef.current.value = "";
    }

    function sisestaTelefon() {
      if (telefonRef.current.value === "") {
        toast.error("Telefon on jäänud sisestamata",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (telefonRef.current.value.length < 11) {
        toast.error("Telefoni number on liiga lühike",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (telefonRef.current.value.startsWith("+372" === false)) {
        toast.error("Telefonil ei ole EEsti suunakoodi",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      if (isNaN(Number(telefonRef.current.value))) {
        toast.error("Tähti ei saa telefoninumbrisse sisestada!",
        {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        return; // lõpetame funktsiooni
      }
      toast.success(Number(telefonRef.current.value));
      muudaTelefon(telefonRef.current.value);
      toastify.success("Telefon sisestatud!");
      localStorage.setItem("telefon" , telefonRef.current.value);
      telefonRef.current.value = "";
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

        <label>Aadress </label>
        <input ref={adreRef} type="text" />
        <button onClick={sisestaAadress}>Sisesta</button>
        <br />

        <label>Email </label>
        <input ref={emailRef} type="text" />
        <button onClick={sisestaEmail}>Sisesta</button>
        <br />

        <label>Telefon </label>
        <input ref={telefonRef} type="text" />
        <button onClick={sisestaTelefon}>Sisesta</button>

        <br /><br />
        <div>Sisestatud aadress: {aadress}</div>
        <div>Sisestatud email: {email}</div>
        <div>Sisestatud telefon: {telefon}</div>

{/* raect toastify */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme="dark"
          />
{/* react-hot-toast */}
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
    </div>
  )
}

export default Seaded