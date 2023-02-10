import { useState } from "react";
function Forma({doktori}){
    function posalji(){
        document.getElementById("prikaz").innerHTML=`
    
            <h4>Ime:${ime}</h4>
            <h4>Prezime${prezime}</h4>
            <h4>E-mail:${mail}</h4>
            <h4>Telefon:${telefon}</h4>
            <h4>Izbrani doktor: ${dok}</h4>
            <h4>Datum:${datum}</h4>
            <h4>Vreme:${vreme}</h4>
            
            `;   
        
        }
        const [ime,setIme]=useState("");
        const[prezime,setPrezime]=useState("");
        const[mail,setMail]=useState("");
        const[telefon,setTelefon]=useState("");
        const[dok,setDok]=useState("");
        const[datum,setDatum]=useState("");
        const[vreme,setVreme]=useState("");
        return(
            <div className="center">
                <h2>Zakažite termin</h2>
                <div id='zakazi'>
                    <form >
                        <input type="text" placeholder='Ime' className='razmak' onInput={(e) => { setIme(e.target.value);}} />
                        <input type="text" placeholder='Prezime' className='razmak' onInput={(e) => { setPrezime(e.target.value);}} />
                        <input type="email" placeholder='Mail' className='razmak' onInput={(e) => { setMail(e.target.value); }} />
                        <input type="text" placeholder='Broj telefona' className='razmak' onInput={(e) => { setTelefon(e.target.value);}} />
                        <input type="date" placeholder='Datum' className='razmak' onInput={(e) => { setDatum(e.target.value);}} />
                        <input type="time" placeholder='Vreme' className='razmak' onInput={(e) => { setVreme(e.target.value);}} />
                        <select name="doktori" className='razmak' onChange={(e) => { setDok(e.target.value) }} >
                            {doktori.map((d) => (
                                <option key={d.id} >{d.ime} - {d.tip}</option>
                            ))}
    
                        </select>
                        <button onClick={(e) => { e.preventDefault(); posalji() }} className='razmak'>Zakazi</button>
                    </form>
                </div>
                <h4>Vasi podaci:</h4>
                <div id="prikaz">
                </div>
            </div>
            
           
        );
}
export default Forma;