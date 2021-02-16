import { Typography,Grid, Container } from "@material-ui/core";
import React,{useState} from "react";
import classes from "./BiddingSection.module.css";
import { NavLink ,Link } from "react-router-dom";
import { ThirdTemplate } from "../../components/Template/Third-template";
import { Select } from "../../components/select/select";
import play from "../../assets/images/bidding/play.svg";
import { Bidding } from "../../components";
import shoe from "../../assets/images/home/shoe1.png";
import bluetooth from "../../assets/images/home/bluetooth.png";
import bag from "../../assets/images/bidding/bag.png";
import { PopularSeller } from "../../components/Selectors/PopularSeller";
import { PostDetail } from "../../components/Bidding-Post-Detail";
import { BiddingPost } from "../BiddingPost/BiddingPost";

const BiddingSection=()=>{

  

return(
    <>
<ThirdTemplate>
<PostDetail></PostDetail>
    <Container className={classes.main}>
        <Grid container >
        <Grid className={classes.grid} item xs={11} sm={2} md={2}>
          <Select />
        </Grid>
        <Grid item sm={1} ></Grid>
        <Grid item xs={11} sm={2} md={2} lg={2}>
          <NavLink to="/ProductList">
            <div className={classes.createlisting1}>
              <h4 className={classes.createtext}>Tutorial</h4>
              <img src={play}></img>
            </div>
          </NavLink>
        </Grid>
        <Grid className={classes.link} item xs={11} sm={2} md={2}>
          <NavLink to="/" className={classes.text}>
          <div className={classes.text}>Contact us</div></NavLink>
        </Grid>
        <Grid className={classes.link} item xs={11} sm={2} md={2}>
          <Link className={classes.text}><div className={classes.text}>F.A.Q</div></Link>
        </Grid>
        </Grid>   
    </Container>
    <Container>
      <Grid item xs={12}>
        <h4 className={classes.title}>Bidding</h4>
       <PostDetail text="bill"></PostDetail>
      </Grid>
     
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding  Img={shoe} bar="active" bar_value={80}  />       
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Bidding Img={bluetooth} bar="active" bar_value={30} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bag} bar="sold" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={shoe} bar="active" bar_value={80} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bluetooth} bar="active" bar_value={30} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bag} bar="sold" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={shoe} bar="active" bar_value={80} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bluetooth} bar="active" bar_value={30} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bag} bar="sold" />
          </Grid>
        </Grid>
    </Container>
    <Container>
    <Grid container  >
      <Grid item xs={12}>
<h3 className={classes.Seller}>Popular Seller</h3>
      </Grid>
    </Grid>
      <Grid container className={classes.content} >
        <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
          <PopularSeller/>
        </Grid>
        <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
          <PopularSeller/>
        </Grid>
        <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
          <PopularSeller/>
        </Grid>
        <Grid className={classes.grid1} item xs={11} sm={2} md={2}>
          <PopularSeller/>
        </Grid>

        
        
        </Grid>
    </Container>
</ThirdTemplate>
    </>
)
}
export {BiddingSection};