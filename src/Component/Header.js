import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import qatarlogo from './Images/qatar.PNG';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarBrand, NavItem, NavLink, NavDropdown, Container, Nav } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (

    <div className='container-fluid' id='maindiv'>
    <div className='row' style={{backgroundColor:'#F8F9FA'}}>

    <div className='col-3' style={{backgroundColor:'#9f1a65' , position:'relative' , paddingBottom:'1%'}} className='changewidth'>
    <img src={qatarlogo} style={{ width: '100%', height: 'auto' }} />
    <button style={{border:'none' , backgroundColor:'#9f1a65' , color:'white' , float:'left' ,padding:'2%'}}>
    <DensityMediumIcon/>&nbsp;Login</button>
    <button style={{border:'none' , backgroundColor:'#D33C57' , color:'white' , float:'right' ,padding:'2%'}}>
    <AddIcon/>Post&nbsp;</button>
     
    </div>

    <div className='col-9' style={{width:'70%'}}>
                  <nav>
                    <ul className="navbar" style={{marginTop:'14%'}} >
                      <li><a href="/products.html" style={{color:'#D33C53'}} >Properties</a></li>
                      <li><a href="/contact.html" style={{color:'#479E9A'}} >Vehicles</a></li>
                      <li><a href="/" style={{color:'#FAD509'}} >Classified</a></li>
                      <li><a href="/products.html" style={{color:'#DF790E'}} >Services</a></li>
                      <li><a href="/contact.html" style={{color:'#D3A438' }} >Jobs</a></li>
                      <li><a href="/" style={{color:'#544B49'}} >Forums</a></li>
                      <li><a href="/products.html"  style={{color:'#544B49'}} >Events</a></li>
                    </ul>
                  </nav> 
                           
    </div>
    <hr style={{width:'100%' , marginLeft:'0px'}}></hr>
{/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className='row'>

    <div className='col-3'>
   <input type='search' placeholder='Search' style={{borderLeft:'none' , borderRight:'none', borderTop:'none',
  backgroundColor:'#F8F9FA' }} />
    <SearchIcon/>
    </div>

    <div className='col-9'>

    <div className='row'>

    <div className='col' style={{textAlign:'left' }}>
    <p style={{lineHeight:1.5}}><a href="" style={{color:'#D33C53'}} >Apartment</a><br></br>
    <a href="" style={{color:'#D33C53' ,marginTop:'-220px'}} >Villa</a><br></br>
    <a href="" style={{color:'#D33C53'}} >Shared</a><br></br>
    <a href="" style={{color:'#D33C53'}} >Office Space</a></p>
    </div>

    <div className='col mve' style={{textAlign:'left'}}>
    <p style={{lineHeight:1.5}}><a href="" style={{color:'#479E6D'}} >4x4/SUV</a><br></br>
    <a href="" style={{color:'#479E6D'}} >Car/Sedan</a><br></br>
    <a href="" style={{color:'#479E6D'}} >Car Rental</a><br></br>
    <a href="" style={{color:'#479E6D'}} >Showrooms</a></p>
    </div>

    <div className='col mve1' style={{textAlign:'left'}}>
    <p style={{lineHeight:1.5}}><a href="" style={{color:'#FACC09'}} > Furniture & Decor</a><br></br>
    <a href="" style={{color:'#FACC09'}} >Electronics</a><br></br>
    <a href="" style={{color:'#FACC09'}} >Fashion & Beauty</a><br></br>
    <a href="" style={{color:'#FACC09'}} >Phones & Tablets</a></p>
    </div>

    <div className='col mve2' style={{textAlign:'left'}}>
    <p style={{lineHeight:1.5}}><a href="" style={{color:'#DF790E'}} >  Labor & Moving</a><br></br>
    <a href="" style={{color:'#DF790E'}} >Household Services</a><br></br>
    <a href="" style={{color:'#DF790E'}} >Cleaning Services</a><br></br>
    <a href="" style={{color:'#DF790E'}} >Computer Services</a></p>
    </div>

    <div className='col mve3' style={{textAlign:'left'}}>
    <p v><a href="" style={{color:'#c39838'}} >Accounting</a><br></br>
    <a href="" style={{color:'#c39838'}} >HR</a><br></br>
    <a href="" style={{color:'#c39838'}} >Sales</a><br></br>
    <a href="" style={{color:'#c39838'}} >Marketings</a></p>
    </div>

    <div className='col mve4' style={{textAlign:'left'}}>
    <p style={{lineHeight:1.5}}><a href="" style={{color:'#544B49'}} >eShops</a><br></br>
    <a href="" style={{color:'#544B49'}} >New Posts</a><br></br>
    <a href="" style={{color:'#544B49'}} >News</a><br></br>
    <a href="" style={{color:'#544B49'}} >Videos</a></p>
    </div>

    </div>
   
    </div>

    </div>

    </div>
    </div>

  );
}

export default Header;
