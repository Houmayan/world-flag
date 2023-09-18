import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries,setCountries] = useState([]);
    // const [name] = countries;
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3> No of Countries: {countries.length}</h3>
           {
            countries.map(country=><Country key={country.cca3} country={country}></Country>)
           }
           
        </div>
    );
};

export default Countries;