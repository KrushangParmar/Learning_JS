import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { getCountries } from "./../Exportfile/apiData";

  const GetpostApi = () =>{
    const[record, setRecord] = useState([])
    useEffect(()=>{
    Axios.get('https://0khexwkon8.execute-api.us-east-1.amazonaws.com/dev/api/v1/customers/?search=janaktest15@mailinator.com')
    .then(res => {
      console.log("getting from" , res.data.results[0].miplan_dr_data.Mercado[0]);
      setRecord(res.data)
    }).catch(err => console.log(err))
  }, []);

  const arr = record.map((database, index) => {
    return(
      <tr>
      <th scope="row">2</th>
      <td>{record.id}</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    )
  })

  
    
//     const[countries, setCountries] = useState([]);
//     const getAllCountries = async () => {
//         const data = await getCountries();
//         setCountries(data);
//     }
//     useEffect(()=>{
//       getAllCountries();
//     }, [])
//     return(
//     <>
//      <form>
//                 <select name="country" id="countryname">
//                   {countries.map(
//                     (country, i) =>
//                       <option key={i} 
//                       value={country.name}>
//                         {country.name}
//                       </option>
//                   )}
//                 </select>
//               </form>
//     </>
//     );

return(
  <>
  <h2>A basic HTML table</h2>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </>
)
}

export default GetpostApi;