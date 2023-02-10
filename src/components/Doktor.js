function Doktor({doktor, dodajIzabran}) {
  return (
    <div >
       
        <div className="card">
           
            <h3>{doktor.ime}</h3>
            <p className="tip">{doktor.tip}</p>
            
            <p><button onClick={()=>dodajIzabran(doktor.id)}>Izaberi</button></p>
            </div>
        
    </div>
  )
}

export default Doktor;