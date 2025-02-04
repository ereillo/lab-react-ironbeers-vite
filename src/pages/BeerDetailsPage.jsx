import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";


function BeerDetailsPage() {

const [details, setDetails] = useState(null)

const params = useParams()

useEffect(() => {
    getData()
}, [params.beerId])

const getData = async () => {

try {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
  );
  console.log(response)
  setDetails(response.data)
} catch (error) {
    console.log(error)
}

}

if (details === null) {
    return <h3><MoonLoader/></h3>;
  }


return (
<div key={details._id} style={{marginLeft: "30px", marginTop: "30px"}}>
<img src={details.image_url} alt="imagen-cerve" width={150}/>
<h1>{details.name}</h1>
<h3>{details.tagline}</h3>
<h3>{details.first_brewed}</h3>
<h3>{details.attenuation_level}</h3>
<p>{details.description}</p>
<h4>{details.contributed_by}</h4>


</div>
    
)
}

export default BeerDetailsPage;
