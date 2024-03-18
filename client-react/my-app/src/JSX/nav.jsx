import { NavLink } from "react-router-dom"
import "../CSS/homePage.scss"
import { useState } from "react";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import InterestsIcon from '@mui/icons-material/Interests';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

export const Nav = () => {
    return <>

        <div className="page-background">
            <div class="side-panel a">
                <div className="navbar">
                <NavLink to='homePage ' id={'homepage'} > <DehazeIcon style={{color:'white'}}></DehazeIcon></NavLink>
                    <ul>
                        <br></br>       <br></br>
                        <li><span class="entypo-doc-text-inv"></span><span class="menu-item"><NavLink to='allApartment' className={'link black'} id={'allApartment'} > <AddHomeWorkIcon style={{color:'white'}}></AddHomeWorkIcon></NavLink></span></li>
                        <br></br>       <br></br> <br></br>
                        <li><span class="entypo-layout"></span><span class="menu-item"><NavLink to='login' className={'link black'} id={'login'}><AccountCircleIcon style={{color:'white'}}></AccountCircleIcon></NavLink></span></li>
                        <br></br>      <br></br> <br></br>
                        <li><span class="entypo-rocket"></span><span class="menu-item"><NavLink to='signIn' className={'link black'} id={'signIn'}><GroupAddIcon style={{color:'white'}}></GroupAddIcon></NavLink></span></li>
                        <br></br>      <br></br> <br></br>
                        <li><span class="entypo-cog"></span><span class="menu-item" ><NavLink to='privateArea' className={'link black'} id={'privateArea'}><InterestsIcon style={{color:'white'}}></InterestsIcon></NavLink></span></li>
                        <br></br>      <br></br> <br></br>
                        <li><span class="entypo-cog"></span><span class="menu-item" ><NavLink to='city' className={'link black'} id={'city'}><AddLocationAltIcon style={{color:'white'}}></AddLocationAltIcon></NavLink></span></li>
                        <br></br>      <br></br> <br></br>
                        <li><span class="entypo-cog"></span><span class="menu-item" ><NavLink to='category' className={'link black'} id={'category'} ><DashboardCustomizeIcon style={{color:'white'}}></DashboardCustomizeIcon></NavLink></span></li>
                      
                    </ul>
                </div>
            </div>
        </div>

    </>
    // const [isLoginMenuOpen, setisLoginMenuOpen] = useState(false);
    //     const [issignMenuOpen, setissignMenuOpen] = useState(false);
    //     const [isapartmentMenuOpen, setisapartmentMenuOpen] = useState(false);
    //     const [isConnect, setIsConnect] = useState(true);

    //     // if(localStorage.getItem('currentUser')!=""){
    //     //     setIsConnect(true)
    //     // }
    //     const loginMenu = () => {
    //         setisLoginMenuOpen(!isLoginMenuOpen);
    //       }
    //       const signMenu = () => {
    //         setissignMenuOpen(!issignMenuOpen);
    //       }
    //       const apartmentMenu = () => {
    //         setisapartmentMenuOpen(!isapartmentMenuOpen);
    //       }
    //         const close = () => {
    //             // setisLoginMenuOpen(false);
    //             // setissignMenuOpen(false);
    //             // setisapartmentMenuOpen(false);
    //       }
    // return<>

    // <div  className="navbar">
    //    <div onMouseOver={loginMenu} onMouseLeave={close} className="check "></div>
    //    <div onMouseOver={signMenu} onMouseLeave={close} className="check"></div>
    //    <div onMouseOver={apartmentMenu} onMouseLeave={close} className="check"></div>
    //    <div onMouseOver={apartmentMenu} onMouseLeave={close} className="check"></div>

    //     <NavLink  to='homePage 'id={'homepage'} > <DehazeIcon ></DehazeIcon></NavLink>
    //     <br></br>
    //    {isapartmentMenuOpen && <NavLink  to='allApartment' className={'link black'} id={'allApartment'} ><AddHomeWorkIcon></AddHomeWorkIcon></NavLink>} 
    //    <br></br>
    //    {isLoginMenuOpen &&  <NavLink to='login' className={'link black'} id={'login'}><AccountCircleIcon></AccountCircleIcon></NavLink>} 
    //    <br></br>
    //    {issignMenuOpen && <NavLink to='signIn' className={'link black'} id={'signIn'}><GroupAddIcon></GroupAddIcon></NavLink>} 
    //    <br></br>
    //    {isConnect && issignMenuOpen && <NavLink to='privateArea' className={'link black'} id={'privateArea'}><InterestsIcon></InterestsIcon></NavLink>} 

    // </div>
    // </>


}