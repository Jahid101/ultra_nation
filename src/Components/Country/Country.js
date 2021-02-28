import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAdedCountry = props.handleAdedCountry;
    const countryStyle = {
        border: '1px solid red', margin: '10px', padding: '10px',
    }
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <h5>Population: {population}</h5>
            <p><small>Region : {region}</small></p>
            <button onClick={() => handleAdedCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;
