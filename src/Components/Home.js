import React from 'react';
import firebase from 'firebase';
import HomeForm from './HomeForm';
import HomeTable from './HomeTable';
import { withRouter } from 'react-router-dom';


const Home=(props)=>{
    return(
        <div>
         <nav className="navbar navbar-custom" style={style.navbarcustom} >
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Home</a>
                </div>
    
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">{props.location.state.email}</a></li>
                    <li><a href="#" onClick={()=>{firebase.auth().signOut();
                    props.history.push('/');}}>Sign out</a></li>
                </ul>
            </div>
         </nav> 


         <div style={style.homeContainer}>
             <div style={style.tableContainer}>
                <HomeTable/>
             </div>
             <div style={style.formContainer}>
                <HomeForm/>
             </div>
        </div>        
        </div>
    )
}
const style={
    homeContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    navbarcustom:{
        backgroundColor:'black'
    },
    tableContainer:{
        display:'flex',
        flex:1,
        paddingLeft:130,
        paddingRight:10,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
    
    },
    formContainer:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20

    }
}
export default withRouter(Home);