import { Typography,Grid, Container } from "@material-ui/core";
import React,{useState} from "react";
import classes from "./BiddingPost.module.css";
import { NavLink ,Link } from "react-router-dom";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import pic from "../../assets/images/ApplicationReview/pic.svg";


const BiddingPost=()=>{

  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);

    return(
        <>  
<SecondaryTemplate>
<Container className={classes.Application}>
    <Grid container className={classes.main}>
    <Grid item xs={12} >
<img src={pic}/>
    </Grid>
    <Grid item xs={3} className={classes.btn} >
          <NavLink to="/create_listing_1">
            <div className={classes.createlisting}>
              <h4 className={classes.createtext}>Submit</h4>
            </div>
          </NavLink>
        </Grid>
    </Grid>
</Container>
</SecondaryTemplate>
 

        </>
    );
};
export {BiddingPost};