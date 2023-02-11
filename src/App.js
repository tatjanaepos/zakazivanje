import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './components/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from './components/Kontakt';
import Doktori from './components/Doktori';
import { useState } from "react";
import Izabrani from './components/Izabrani';
function App() {
  const [brojIzabranih, setBrojIzabranih] = useState(0);
  const [doktori] = useState([ 
  {
    id:1,
    ime:"Dr Milica Jovanovic",
    tip: "OFTALMOLOG",
    izabran:0,
    kategorija: "Oftamologija"
  },
  {
    id:2,
    ime:"Dr Milica Stevanovic",
    tip: "SPECIJALISTA NEUROLOGIJE",
    izabran:0,
    kategorija: "Neurologija",
  },
  {
    id:3,
    ime:"Dr Jovana Obradovic",
    tip: "LEKAR OPŠTE MEDICINE",
    izabran:0,
    kategorija: "Opsta medicina",

  }, 
  {
    id:4,
    ime:"Dr Dusan Ilic",
    tip: "KARDIOLOG",
    izabran:0,
    kategorija: "Kardiologija",

  }, 
  {
    id:5,
    ime:"Dr Dusica Subotic",
    tip: "LEKAR OPŠTE MEDICINE",
    izabran:0,
    kategorija: "Opsta medicina"

  }, 
  {
    id:6,
    ime:"Dr Aleksandar Grujic",
    tip: "KARDIOLOG",
    izabran:0,
    kategorija: "Kardiologija"

  }, 
  {
    id:7,
    ime:"Dr Milos Lazarevic",
    tip: "ENDOKRINOLOG",
    izabran:0,
    kategorija: "Endokrinologija"

  }, 
  {
    id:8,
    ime:"Dr Djordje Ilic",
    tip: "LEKAR OPŠTE MEDICINE",
    izabran:0,
    kategorija: "Opsta medicina"

  }, 
  {
    id:9,
    ime: "Dr Danica Radic",
    tip:"OTORINOLARINGOLOG",
    izabran:0,
    kategorija: "Usi,Nos,Grlo",

  }, 
  {
    id:10,
    ime: "Dr Milan Tomic",
    tip: "LEKAR OPŠTE MEDICINE",
    izabran:0,
    kategorija: "Opsta medicina"
  }, 
]);

function dodajIzabran(id){
  doktori.forEach((d)=>{
    if(d.id===id){
      d.izabran=1;
      setBrojIzabranih(brojIzabranih+1)
      
    }
  })
}
  return (

    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>} />
            <Route path="/kontakt" element={<Kontakt doktori={doktori}></Kontakt>} />
            <Route path="/doktori" element={<Doktori doktori={doktori} dodajIzabran={dodajIzabran}></Doktori>} />
            <Route path="/izabrani" element={<Izabrani izabrani={doktori} brojIzabranih = {brojIzabranih}></Izabrani>} />
        </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;