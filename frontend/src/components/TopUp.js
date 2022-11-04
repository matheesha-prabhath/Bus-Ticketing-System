import React, { useState,useEffect} from "react"
import Cards from './Cards';
import EnterForm from "./EnterForm";
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';




export default function TopUp(){

    useEffect(() => {
        localStorage.removeItem("BanKName");
        localStorage.removeItem("Pay_date");
        localStorage.removeItem("productName");
        localStorage.removeItem("Order_ID");
        localStorage.removeItem("Card_No");
        localStorage.removeItem("Cvv");
        localStorage.removeItem("productID");

        localStorage.removeItem("Expiry");
        localStorage.removeItem("bankOwner");
        localStorage.removeItem("Pay_ID");
        localStorage.removeItem("BanKName");
        localStorage.removeItem("Totle_price");
    }, [])
    

    return(
        <div className='back'>
            <EnterForm/>
            <Cards/>
            <Footer/>
        </div>
    )
}