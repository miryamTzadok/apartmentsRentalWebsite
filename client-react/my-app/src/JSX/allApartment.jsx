import { useEffect, useState } from "react"
import { allApartment, apartmentByIP } from "../JS/apartmentService"
import { ApartmentCard } from "./apartmentCard"
import "../CSS/apartment.css"
import LocationCityIcon from '@mui/icons-material/LocationCity';


export const AllApartment = () => {
  let [r, setR] = useState([])
  let [rap, setRap] = useState("")

  const [selectedCity, setSelectedCity] = useState('');
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    debugger
    allApartment().then(x => {
      setR(x.data.apartment)

    })

    
  }, []);

 
  const sendIp = () => {
    debugger
    apartmentByIP()
      .then(x => {
        setR(x.data);
      })
      .catch(error => {
        console.log('שגיאה בקבלת מידע:', error);
      });
  };

  const cityChange = (e) => {
    setSelectedCity(e.target.value)
   }
  return <>
    <button onClick={sendIp} style={{marginLeft:'50%'}}><LocationCityIcon style={{width:'110px'}}></LocationCityIcon></button>

    <div className="user-box">
                        <select value={selectedCity} onChange={(e) => cityChange(e)}>
                            <option value="">בחר עיר</option>
                            {cityList.map((city) => (
                                <option key={city.cityName} value={city._id}>
                                    {city.cityName}
                                </option>
                            ))}
                        </select>
           </div>

    <div id="flex">
      {r && r.map((i) => <ApartmentCard apartmentName={i.apartmentName} description={i.description} image={i.image} address={i.address} numOfBeds={i.numOfBeds} additives={i.additives} price={i.price} id={i._id} ></ApartmentCard>)}
    </div>
  </>
}


