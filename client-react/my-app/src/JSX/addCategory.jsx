import { useEffect, useRef, useState } from "react";
import { addCategory, allCategory } from "../JS/apartmentService";
import Swal from "sweetalert2";


export const AddCategory=()=>{
const nameRef=useRef()
    const [categoryList, setCategoryList] = useState([]);
  
   useEffect(() => {

        debugger
        allCategory()
            .then(x => {
                setCategoryList(x.data.category)
            })
            .catch(x => {
                console.log("category err");
            })
    }, []);

    const add=()=>{
        debugger
        const newC={categoryName:nameRef.current.value}
    
        addCategory(localStorage.getItem('currentUser'),newC)
        .then(x => {
            console.log("work!")
           Swal.fire("הוספת קטגוריה בוצעה בהצלחה","",'success')
        })
        .catch(x => {
            console.log("city err");
        })
    }   
        return<>
          
        <div className="all">
        <div className="login-box">
       {categoryList?.map((i) =><p>{i.categoryName}</p> )} 
              <form>
           <input type="text" name="email" ref={nameRef} required />
                <label>שם הקטגוריה</label>
    <button onClick={add} style={{ width: '200px' }}></button>
    </form></div></div>
        </>
}