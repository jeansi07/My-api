import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Details } from './Details';

export const Search = () => {

    const Swal = require('sweetalert2')

    const [countries, setCountries] = useState([])
    //  const [country, setCountry] = useState(null)
    const [data, setData] = useState({})


    useEffect(() => {
        axios.get("data.json")
            .then((res) => {
                setCountries(res.data)

            })
        getData()
    }, [])

    const getData = async (country = 'Colombia') => {



        try {
            const res = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`, { method: 'GET' })
            const response = await res.json()

            if (response.All) {
                setData(response.All)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        } catch (error) {

        }

    }

    const findCountry = (countryy) => {
        let { country } = countries.find(c => c.country == countryy)
        console.log({ country });
        getData(country)

        //   setCountry(details[0])
    }




    return (
        <div>
            <select className="form-select" onChange={(e) => findCountry(e.target.value)}>

                {countries.map(({ country }) => (
                    <option key={country} value={country}> {country} </option>

                ))}

            </select>
            <Details data={data} />
        </div>
    )
}
