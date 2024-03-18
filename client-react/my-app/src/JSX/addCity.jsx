import { useEffect, useRef, useState } from "react";
import { addCity, allCities } from "../JS/apartmentService";
import Swal from "sweetalert2";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddCity=()=>{
    const nameRef=useRef()
    const [cityList, setCityList] = useState([]);
    useEffect(() => {

        debugger
        allCities()
        .then(x => {
            setCityList(x.data.cities)
        })
        .catch(x => {
            console.log("city err");
        })
    }, []);
const add=()=>{
    debugger
    const newC={cityName:nameRef.current.value}
    addCity(localStorage.getItem('currentUser'),newC)
    .then(x => {
        console.log("work!")
       Swal.fire("הוספת עיר בוצעה בהצלחה","",'success')
    })
    .catch(x => {
        console.log("city err");
    })
}

    return<>
    <div className="all">
   
            <div className="login-box">
           {cityList?.map((i) =><p>{i.cityName}</p> )} 
           <form>
           <input type="text" name="email" ref={nameRef} required />
                <label>שם העיר</label>
    <button onClick={add} style={{ backgroundColor: 'none' }}><AddCircleOutlineIcon></AddCircleOutlineIcon></button>
    </form></div></div>
    </>
}