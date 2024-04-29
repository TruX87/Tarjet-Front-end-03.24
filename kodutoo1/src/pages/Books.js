import React from 'react'
import { useState } from 'react';

function Books() {
    const [books, muudaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Robin Hood", "Harry Potter"]);
  
    const reset = () => {
        muudaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Robin Hood", "Harry Potter"]);
    }
    
    const sorteeriAZ = () => {
        books.sort((a,b) => a.localeCompare(b));
        muudaBooks(books.slice());
    }

    const sorteeriZA = () => {
        books.sort((a,b) => b.localeCompare(a));
        muudaBooks(books.slice());
    } 

    const sorteeriTahemargidVaiksemast = () => {
        books.sort((a,b) => a.length - b.length);
        muudaBooks(books.slice());
    }

    const sorteeriTeineTähtAZ = () => {
        books.sort((a,b) => a[1].localeCompare(b[1]));
        muudaBooks(books.slice());
    }

    const sorteeriSõnadeArvuJärgi = () => {
        books.sort((a, b) => a.split(' ').length - b.split(' ').length);
        muudaBooks(books.slice());
    }

    const sorteeriEelviimaseTaheJärgiAZ = () => {
        books.sort((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
        muudaBooks(books.slice());
    }

    const filtreeriTheAlg = () => {
        const vastus = books.filter(t => t.startsWith("The"));
        muudaBooks(vastus);
    }

    const filtreeriAndSisaldav = () => {
        const vastus = books.filter(t => t.includes("and"));
        muudaBooks(vastus);
    }

    const filtreeriRohkemKui10 = () => {
        const vastus = books.filter(t => t.length > 10);
        muudaBooks(vastus);
    }

    const filtreeriVahemKui7 = () => {
        const vastus = books.filter(t => t.length < 7);
        muudaBooks(vastus);
    }

    const jätaAllesKolmeVõiRohkemaSõnalised = () => {
        const vastus = books.filter(book => book.split(' ').length >= 3);
        muudaBooks(vastus);
    }

    const jätaAllesEelviimaseTähegaC = () => {
        const vastus = books.filter(book => book[book.length - 2].toLowerCase() === 'c');
        muudaBooks(vastus);
    }

    return (
    <div>
        <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahemargidVaiksemast}>Sorteeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriTeineTähtAZ}>Sorteeri teisest tähest A-Z</button>
        <button onClick={sorteeriSõnadeArvuJärgi}>Sorteeri sõnade arvu järgi</button>
        <button onClick={sorteeriEelviimaseTaheJärgiAZ}>Sorteeri eelviimase tähe järgi A-Z</button>
        <br /><br />
        <button onClick={filtreeriTheAlg}>Jäta alles The-ga algavad</button>
        <button onClick={filtreeriAndSisaldav}>Jäta alles millel on keskel "and"</button>
        <button onClick={filtreeriRohkemKui10}>Jäta alles millel on rohkem kui 10 tähemärki</button>
        <button onClick={filtreeriVahemKui7}>Jäta alles millel on vähem kui 7 tähemärki</button>
        <button onClick={jätaAllesKolmeVõiRohkemaSõnalised}>Jäta alles kolme või rohkema sõnalised</button>
        <button onClick={jätaAllesEelviimaseTähegaC}>Jäta alles kellel eelviimane täht on “c”</button>
        <br /><br />
        <button onClick={reset}>Taasta algasetus</button>
        <span>Raamatute koguarv: {books.length} tk</span>
        <br /><br />
        {books.map((raamatud, index) => <div key={index}>{raamatud}</div>)}
        </div>
    </div>
  )
}

export default Books