import './Country.css'

const Country = ({country}) => {
    const {name,cca3,flags} = country;
    // console.log(country);
    return (
        <div className='country'>
            
            <h3>Name: {name?.common}</h3>
            <p>Official Name: {name?.official}</p>
            <img src={flags.png} alt="" />
            <p>{cca3}</p>
        </div>
    );
};

export default Country;