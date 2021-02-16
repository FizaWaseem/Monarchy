import { Grid } from "@material-ui/core";
import React from "react";
import Billing from "../SideMenu-1/Billing/Billing";
import BillingAddress from "../../components/BillingAddress/BillingAddress";
import classes from './Addtocart.module.css';
import { Product } from "../../components/Product";
import google from "../../assets/images/Cart/google.png";
import apple from "../../assets/images/Cart/apple.png";
import { ThirdTemplate } from "../../components/Template/Third-template";

const Addtocart=()=>{
    return(
        <>
<ThirdTemplate>
<Grid container >
<Grid item xs={12} className={classes.main}>
    PAY Before:23:44:16
</Grid>
    <Grid item xs={12} sm={6} className={classes.div}>
    <Product></Product>
    </Grid>
    <Grid item xs={12} sm={5}>
   
    <BillingAddress></BillingAddress>
    </Grid>
</Grid>
<Grid container className={classes.div2} xs={12}>
    <Grid item xs={6}>
<img className={classes.img} src={google}/>
    </Grid>
    <Grid item xs={6}>
    <img className={classes.img2} src={apple}/>   
    </Grid>
</Grid>

</ThirdTemplate>

        </>
    )
};
export {Addtocart};