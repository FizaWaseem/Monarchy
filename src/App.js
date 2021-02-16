import {Home,CreateListing,CreateListing1,CreateListing2,CreateListing3,SignUp,ProductDetailApproval,ProductDetail, SideMenu} from './pages';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import { Addtocart } from './pages/AddtoCart/Addtocart';
import { BiddingSection } from './pages/Bidding-Section';
import { ProductList, Productlist1 } from './pages/Product-list-1/Product-list-1';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { SideMenu2 } from './pages/SideMenu-2/SideMenu2';


const App = () => {
  return (
    <div className="App">
  <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/create_listing_1" component={CreateListing}/>
        <Route path="/create_listing_2" component={CreateListing1}/>
        <Route path='/create_listing_3' component={CreateListing2}/>
        <Route path='/create_listing_4' component={CreateListing3}/>
        <Route path='/create_listing_4' component={CreateListing3}/>
        <Route path="/product_detail" component={ProductDetail}/>
        <Route path='/product_detail_approval' component={ProductDetailApproval}/> 
         <Route path='/BiddingSection' component={BiddingSection}/> 
         <Route path='/ProductList' component={ProductList}/>
        <Route path='/AddtoCart' component={Addtocart}/>
     
   </Switch> 
    {/* Below components are not link to each so we can render these components seperately for temperarily */}
{/* <SideMenu/>   */}
{/* <UserInfo></UserInfo> */}
{/* 
<SideMenu2></SideMenu2> */}

{/*     
    <ApplicationReview></ApplicationReview> */}
  
    </div>
  );
}

export default App;
