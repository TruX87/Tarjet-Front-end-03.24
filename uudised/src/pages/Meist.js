import React from 'react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = [
    {nimi:"Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+3727897897"},
    {nimi:"Kelly Sildaru", ala: "Püstolreporter", telefon: "+3724564564"},
    {nimi:"Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+3726546546"},
    {nimi:"Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+3729879879"},
    {nimi:"Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+3727897897"},
    {nimi:"Kelly Sildaru", ala: "Püstolreporter", telefon: "+3724564564"},
    {nimi:"Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+3726546546"},
    {nimi:"Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+3729879879"}
  ]
  const [valitud, uuendaValitud] = useState("");
  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }

  const notify = () => toast("Täname huvi tundmast ja jääme ootama sinu kõnet!",
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );


  return (
    <div>
        <div>Meist, siin olev info on nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        {/* VALITUD INIMENE: {valitud} */}
        <br />
        <div>{tootajad.map(tootaja => 
          <div className={tootaja.nimi === valitud ? 'valitud' : undefined}>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => {v6taYhendust(tootaja); notify();}}>Võta ühendust</button>
          </div>)}
        </div>
        {/* <div>Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => {n2itaKontakt("+3727897897"); notify();}}>Võta ühendust</button>
        <br /><br />
        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => {n2itaKontakt("+3724564564"); notify();}}>Võta ühendust</button>
        <br /><br />
        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => {n2itaKontakt("+3726546546"); notify();}}>Võta ühendust</button>
        <br /><br />
        <div>Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => {n2itaKontakt("+3729879879"); notify();}}>Võta ühendust</button>
        <br /><br /> */}
        { kontakt !== "" && <div className='kontakt'>Tema kontakt: {kontakt}</div>}

        <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
    </div>
  )
}

export default Meist