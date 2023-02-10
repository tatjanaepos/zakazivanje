import Doktor from './Doktor';
import Kategorije from './Kategorije';
import { useState } from 'react';
function Doktori({doktori, dodajIzabran}){
    const allCategories =['sve',...new Set(doktori.map((u)=>u.kategorija))]
    const[categories]= useState(allCategories);
    const [dok,setDok]= useState(doktori);

    const filterItems=(kategorija)=>{
        if(kategorija==='sve'){
      setDok(doktori);
       return;
      }
        const newItems = doktori.filter((d)=>d.kategorija === kategorija);
        setDok(newItems);
      };

    return(
        <div>
             <Kategorije categories={categories} filterItems={filterItems}/>
        <div className='doktori'>
            {dok.map((d)=>(<Doktor key={d.id} doktor = {d} dodajIzabran={dodajIzabran}></Doktor>))}
        </div>
   
        </div>
      )  

}

export default Doktori;