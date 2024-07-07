import React, { useContext } from 'react'
import img from '../../img/Screenshot 2024-06-14 011607.png'
import './NavTop.scss'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
import { WishListContext } from '../../context/WishListProvider'
function NavTop() {
  const {basket} = useContext(MainContext)
  const {WishList} = useContext(WishListContext)
  return (
   <>
   <div className="navtop_header">
   <div className="navtop_contact">
   <div className="call"><i className="fa-solid fa-phone"></i>
   <p>+994 51 578 13 13</p></div>
  <div className="insta">
  <h3><i className="fa-brands fa-instagram"></i></h3>
  {/* <p>mrz.va_</p> */}
  </div>
   </div>
   <div className="navtop_logo">
    <div className="logo_navtop">
    <img src={img}   alt="" />   </div>
    </div>
   <div className="navtop_link">
    <ul>
    <Link to={"/basket"}><i className="fa-solid fa-basket-shopping"></i>{basket.length}</Link>
    <Link to={"/wishList"}><i className="fa-solid fa-heart"></i>{WishList.length}</Link>
    </ul>
   
   </div>
   </div>


   </>
  )
}

export default NavTop