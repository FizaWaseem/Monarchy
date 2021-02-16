import { Grid,Container } from "@material-ui/core";
import React from "react";
import order from "../../assets/images/Allposting/order.png";
import classes from "./Product.module.css"

const Product=()=>{
    return(<>
<Grid container className={classes.block} >
<Grid item xs={12} >
   <div className={classes.header}>
   Cart
   </div>
</Grid>
<Container className={classes.main} >
<Grid container className={classes.main} >
    <Grid item xs={4} sm={2}>
<img className={classes.img} src={order}/>
    </Grid>
    <Grid item xs={6}>
        <span>
            <b>Sun Glass Multi Shades</b><br/>
            Color:Purple
        </span>
        <h4 className={classes.text}>
            $18 x 1
        </h4>
    </Grid>
    </Grid>
    <Grid container className={classes.main} >
    <Grid item xs={4} sm={2}>
<img className={classes.img} src={order}/>
    </Grid>
    <Grid item xs={6}>
        <span>
            <b>Sun Glass Multi Shades</b><br/>
            Color:Purple
        </span>
        <h4 className={classes.text}>
            $18 x 1
        </h4>
    </Grid>
</Grid>
</Container>


<Grid container  >
    <Grid item  sm={2} md={5}>
    </Grid>
    
    <Grid item xs={6} sm={4} md={3} className={classes.border1}>
        <span>
        <p>Item Price
        <br/>
             Shipping Fees
           
            <br/>
            Estimated tax</p>
           
        </span>
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.border}>
        <span>
        <p  > $18.00
         
            <br/>
           $1.00
           
            <br/>
           $0.00</p>
        
        </span>
        </Grid>
        </Grid>
        <Grid container >
    <Grid item  sm={2} md={5}>
    </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.paytext}>
        <span>
        You Pay
         </span>
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.pay}>
        <span >
         $19.00
         </span>
       
        </Grid>
        </Grid>
</Grid>
    </>)
};
export {Product};