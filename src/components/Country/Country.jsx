import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags,handleNewVisitedFlags}) => {
    const {name,cca3,flags,population,area} = country;
    // console.log(handleNewVisitedFlags);
    const [visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${ visited && 'isVisited'}`}>
            
            <h3>Name: {name?.common}</h3>
            <p>Official Name: {name?.official}</p>
            <img src={flags.png} alt="" />
            <p>{cca3}</p>
            <p>Populatiion:{population}</p>
            <p>Land of area: {area} km<sup>2</sup></p>
            <br />
            <button onClick={()=>handleNewVisitedFlags(country.flags.svg)}>Again Added Flag:</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={()=>handleVisitedCountries(country)}>Mark as visited</button>
            <button onClick={handleVisited}>{visited?'Visited':'Not visited'}</button>
           
        </div>
    );
};

export default Country;