import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Details } from './Details';

export const Search = () => {


    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(null)


    useEffect(() => {
        axios.get("data.json")
            .then((res) => {
                setCountries(res.data)

            })

    }, [])

    const findCountry = (country) => {
        let details = countries.filter(c => c.country == country)

        setCountry(details[0])
    }




    return (
        <div>
            <select className="form-select" onChange={(e) => findCountry(e.target.value)}>

                {countries.map(({ country }) => (
                    <option key={country} value={country}> {country} </option>

                ))}

            </select>
            <Details data={country} />
        </div>
    )
}
