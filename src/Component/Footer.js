import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import b1 from './Images/b1.PNG';
import b2 from './Images/b2.PNG';
import shakehand from './Images/shakehand.PNG';
import Button from '@restart/ui/esm/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Footer = () => {
    return (
        <div className='container-fluid' id='maindiv'>
       
       <div className='footerleft'>

<div className='row mv1' style={{width:'100%'}}>
<hr style={{marginLeft:'0px'}}></hr>

<div className='col-lg-8 col-md-8 col-sm-12'>
<div className='row'>

<div className='col-2  reswidth' style={{
textAlign:'left' }}><h6><a href='' style={{color:'#d73855' ,  marginLeft:'0px'}}>Properties 
<p style={{color:'black'}}><br></br>Apartment<br></br>
Shared <br></br> accommodation<br></br>
Villa<br></br>
Office space</p>
</a>
</h6> 
</div>

<div className='col-2 reswidth ' style={{ textAlign:'left' }}>
<a href='' style={{color:'#009e6c'}}><h6>Vehicles
<p style={{color:'black'}}><br></br>4x4/SUV<br></br>
Car Sedan<br></br>
Car rental <br></br>
Showrooms<br></br></p> 
</h6></a>
</div>

<div className='col-2 reswidth ' style={{ textAlign:'left' }}>
<a href='' style={{color:'#facc09'}}><h6 >Classified   
<p style={{color:'black'}}><br></br>Furniture & Decor<br></br>
Electronics<br></br>
Fashion & Beauty<br></br>
Phones & Tablets</p>
  </h6></a>  
  </div>

<div className='col-2 reswidth ' style={{ textAlign:'left'}}>
<a href='' style={{color:'#e07900'}}><h6>Services 
<p style={{color:'black'}}>
<br></br>Labor & Moving<br></br>
Household Services<br></br>
Cleaning Services
</p>
</h6></a> 
</div>

</div>
</div>

<div className='col-lg-3 col-md-3 givemargin swapdiv' style={{display:'flex' , flexDirection:'column' , justifyContent:'flex-start'}}>

<div className='row'>
<div className='col-3' >
<img src={shakehand} className='img3' style={{marginLeft:'0px' , float:'center' , marginTop:'0px'}}/>
</div>
<div className='col-9'>
<p style={{textAlign:'center'}} id='moveleft'>Want to advertise on Qatar Living?<br></br>
Take a look at our Advertise page</p>
</div>

</div>
<h5 className='givespc givemargin' >Help us improve Qatar Living Send us <a href=''>feedback now </a>or <a href=''>Contact Us</a></h5>

<div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-evenly' , gap:1}}>
<a href=''><img src={b1} className='img1 givespc givemargin'  style={{marginLeft:'0px'}}/></a>
<a href=''><img src={b2} className='img1 givespc givemargin' style={{marginLeft:'0px'}}/></a>
</div>


</div>

</div> 

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

<div className='row mv1' style={{width:'100%' , marginTop:'1%' }}>


<div className='col-lg-6 col-md-6 col-sm-12 givemargin swapdiv2'>
<div className='row'>

<div className='col-2 reswidth1' style={{textAlign:'left' }}><h6>
    <a href='' style={{color:'#d73855' ,  marginLeft:'0px'}}>
Properties 
<p style={{color:'black'}}><br></br>Jobs <br></br>
Jobseekers<br></br>Freelancers</p>
</a>
</h6> 
</div>

<div className='col-2 reswidth1' style={{ textAlign:'left' }}><h6><a href='' style={{color:'#1686AD'}}>
Pages
<p style={{color:'black'}}><br></br>Living2022<br></br>
eShops</p> 
</a></h6></div>

<div className='col-2 reswidth1' style={{ textAlign:'left' }}><h6><a href='' style={{color:'#1686AD'}}>

Social
<p style={{color:'black'}}><br></br>COVID-19<br></br>
Groups<br></br>
Events<br></br>
Forums<br></br>
Videos<br></br>
Help</p>
</a></h6></div>

</div>
</div>



<div className='col-lg-5 col-md-5 col-sm-12 offset-1 givemargin leftziddy' >
<div className='row' style={{backgroundColor:'#C094B5' , width:'100%' , height:'auto' }}>

 <h5 style={{fontfamily:'Franklin-Gothic-Medium' , marginTop:'5%' ,
 display:'flex' , flexDirection:'row' , justifyContent:'center', color:'purple'}}>
 Subscribe to our newsletter to get the latest updates   </h5> 

<div className='col-7 offset-1' 
style={{display:'flex' , flexDirection:'row' , justifyContent:'flex-start'}} >
<input type='email' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email' style={{width:'100%' , backgroundColor:'white', color:'white',
border:'2px solid #C094B5'}}/>
</div>

<div className='col-3 '
style={{ display:'flex' , flexDirection:'row' , justifyContent:'flex-start'}} >
<Button style={{color:'#C094B5' , backgroundColor:'white' , border:'none',
height:'90%'}} className='btn widthissue'>Subscribe</Button>
</div>

<h5></h5><h5></h5><h5></h5>
</div>
</div>

</div> 

{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}

<div className='row mv1' style={{marginTop:'2%' , width:'100%'}}>
<hr style={{marginLeft:'0px'}}></hr>
<div className='col-lg-5 col-md-5 col-sm-12 givemargin' id='iconleft'>
<div className='row' style={{display:'flex', flexDirection:'row' , gap:10}}>
    <div className='col-1 miniicon' style={{backgroundColor:'white'  }} >
   <a href=''><InstagramIcon style={{color:'gray'}} /></a>
   </div>
   
   <div className='col-1 miniicon '  style={{backgroundColor: 'white'  }}>
   <a href=''><FacebookIcon style={{color:'gray'}}/></a>
   </div>

     <div className='col-1 miniicon ' style={{backgroundColor: 'white'  }}>
     <a href=''><TwitterIcon style={{color:'gray'}}/></a>
   </div>

  <div className='col-1 miniicon ' style={{backgroundColor: 'white'  }}>
  <a href=''><YouTubeIcon style={{color:'gray'}}/></a>
   </div>

  <div className='col-1 miniicon ' style={{backgroundColor: 'white'  }}>
  <a href=''> <LinkedInIcon style={{color:'gray'}}/></a>
   </div>

<div className='col-1 miniicon ' style={{backgroundColor: 'white'  }}>
<a href=''><MusicNoteIcon style={{color:'gray'}}/></a>
 </div>   
  <div className='col-1 miniicon ' style={{backgroundColor: 'white'  }}>
  <a href=''><NotificationsActiveIcon style={{color:'gray'}}/></a>
   </div> 
</div>
</div>


<div className='col-lg-6 col-md-6 col-sm-12 offset-1' id='bottomleft'>
<div className='row givemargin'>
<div className='col-3' >
<a href=''><p>Help</p></a>
</div>  

<div className='col-3' >
<a href=''><p>Advertise Terms</p></a>
</div> 

<div className='col-3' >
<a href=''><p>Website Terms</p></a>
</div> 

<div className='col-3' >
<a href=''><p>Rules for posting ads</p></a>
</div> 

</div>
</div>
</div>

    </div>
</div>



    );
}

export default Footer;
