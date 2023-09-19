import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "../countries/countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries,setVisitedCountries] = useState([]);

  const [visitedFlags,setVisitedFlags] = useState([]);

  const [newVisitedFLags,setNewVisitedFlags] = useState([]);

  const handleNewVisitedFlags = (svgFlag)=>{
    const newSvg = [...newVisitedFLags,svgFlag];
    setNewVisitedFlags(newSvg);
  }


  const handleVisitedCountries = country=>{
    // console.log('this is mark as visited');
    // console.log(country);
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries);
  }



  const handleVisitedFlags = flags=>{
    const newVisitedFlags = [...visitedFlags,flags]
    setVisitedFlags(newVisitedFlags);
  }
  


  // const [name] = countries;
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3> No of Countries: {countries.length}</h3>
      <div>
        <h3>Again Visited:</h3>
        {
          newVisitedFLags.map((newS,idx)=><img key={idx} src={newS}></img>)
        }
      </div>
      <div className="flag-container">
        <h3>Visited Flags:</h3>
        {visitedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)}
      </div>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
            {visitedCountries.map((country,idx)=><li  key={idx} >{country.name.common}</li>)}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country 
          key={country.cca3}
          handleVisitedFlags={handleVisitedFlags}
          handleVisitedCountries={handleVisitedCountries}
          handleNewVisitedFlags={handleNewVisitedFlags}
          country={country}>

          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
