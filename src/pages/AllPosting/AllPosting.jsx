import React from "react";
import classes from './AllPosting.module.css';
import { Grid,Typography } from "@material-ui/core";
import phone from "../../assets/images/Draft/phone.png";
import { Post } from "../Post";
const AllPosting = () => {
   
return (
     <>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
    
     <Grid className={classes.Pmain} container  >
<Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text} >All Posting
           </Typography>
        </Grid>
</Grid>

<Grid className={classes.draft} container  >
          <Grid item xs={12} sm={12} md={6} >
            <Post Img={phone} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Post Img={phone} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Post Img={phone} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Post Img={phone} />
          </Grid>
          </Grid> 
          </Grid>

</>
);
};

export default AllPosting;