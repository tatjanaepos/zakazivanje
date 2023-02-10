import Doktor from './Doktor';

function Izabrani({izabrani, brojIzabranih}) {
  return (
    <div className='doktori'>

        {brojIzabranih===0 ? 
        
        <>
        <h1>Niste izabrali nijednog lekara</h1>
        </> 
        
        : 
        
        <>
       
          {izabrani
            .filter((i)=>i.izabran===1)
            .map((i)=>(<Doktor key={i.id} doktor={i}></Doktor>))}
            
        </>
        }
       
        
    </div>
  )
}

export default Izabrani;