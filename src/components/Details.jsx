import React from 'react'

export const Details = ({ data }) => {


    return data != null ? (
        <table className="table">

            <tbody>
                <tr>

                    <td>continente</td>
                    <td> {data.continent} </td>
                </tr>
                <tr>

                    <td>poblacion</td>
                    <td> {data.population} </td>
                </tr>
                <tr>

                    <td>area del pais</td>
                    <td> {data.sq_km_area} </td>
                </tr>
                <tr>

                    <td>Expectativa de vida</td>
                    <td> {data.life_expectancy} </td>
                </tr>
                <tr>

                    <td>casos confirmados</td>
                    <td> {data.confirmed} </td>
                </tr>
                <tr>

                    <td>numeros de muertes actuales</td>
                    <td>{data.deaths} </td>
                </tr>


            </tbody>
        </table>
    ) : (<div></div>)
}
