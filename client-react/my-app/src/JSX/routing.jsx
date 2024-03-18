
import { Route, Routes } from "react-router-dom"
import { Login } from './login'
import { AllApartment } from "./allApartment"
import { ApartmentCard } from "./apartmentCard"
import { SignIn } from "./signIn"
import { Details } from "./details"
import { HomePage } from "./homePage"
import { Add } from "./privteArea"
import {  Form } from "./addApartment"
import { AddCategory } from "./addCategory"
import { AddCity } from "./addCity"



export const Routing = () => {
    return <>
        {/* ניתובים לדפים  */}
        <Routes>
      
            <Route path={'./'} element={<AllApartment></AllApartment>}></Route>
            <Route path={'privateArea'} element={<Add></Add>}></Route>
            <Route path={'homePage'} element={<HomePage></HomePage>}></Route>
            <Route path={'allApartment'} element={<AllApartment></AllApartment>}></Route>
            <Route path={'apartmentCard'} element={<ApartmentCard></ApartmentCard>}></Route>
            <Route path={'login'} element={<Login></Login>}></Route>
            <Route path={'signIn'} element={<SignIn></SignIn>}></Route>
            <Route path={'addApartment'} element={<Form></Form>}></Route>
            <Route path={'category'} element={<AddCategory></AddCategory>}></Route>
            <Route path={'city'} element={<AddCity></AddCity>}></Route>
            <Route path={`details/:apartmentName/:description/:address/:numOfBeds/:additives/:price/:id`} element={<Details></Details>}></Route>
            {/* <Route path={'recipes'} element={<Recipes></Recipes>}>
                <Route path={`recipe/:name/:pic/:userId`} element={<Recipe></Recipe>}></Route>
                <Route path={`details/:details/:id/:name/:categoryId/:levelId/:preparationTime/:instructions`} element={<Details></Details>}>
                    <Route path={`react/:id`} element={<React></React>}></Route>
                </Route>
            </Route>

            <Route path={'signin'} element={<Signin></Signin>}></Route>
            <Route path={'privateArea'} element={<PrivateArea></PrivateArea>}></Route>
            <Route path={'category'} element={<Managerset id={1}></Managerset>}>
                <Route path={'addcategory'} element={<Addcategory ></Addcategory>}></Route>
            </Route>
            <Route path={'level'} element={<Managerset id={2}></Managerset>}>
                <Route path={'addlevel'} element={<Addlevel ></Addlevel>}></Route>
            </Route>
           
      */}
        </Routes>
    </>
}