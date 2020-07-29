import React,{useState,useContext} from 'react';
import { AuthContext } from '../App';
import sectionImage from './Images/section2.jpeg';
import { withRouter } from 'react-router-dom';
import * as firebase from "firebase";
import Background from './Images/home1.jpeg';

const LoginForm=({history})=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Auth = useContext(AuthContext);

           const handleSubmit=event=>{
            event.preventDefault();
        
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
            console.log(res)
            if (res.user) Auth.setLoggedIn(true);
               history.push({
                pathname: '/home',
                state: { email: email}
              })
            })
            .catch(e => {
             setError(e.message);
        });
        }

    return(
        <div style={style.container}>

            <div style={style.section1}>
                <img src={sectionImage} alt="Section image" style={style.sectionImage} />
            </div>

            <div style={style.section2}>

                <form onSubmit={(event)=>handleSubmit(event)}>
                    <h2 style={style.heading}><strong>Sign In</strong></h2>

                    <div>
                        <label >E-mail</label><br/>
                        <input type='email' style={style.email} value={email} onChange={event => {setEmail(event.target.value);}} required />
                    </div>
                    <br/>

                    <div>
                        <label>Password</label><br/>
                        <input type='password' style={style.email} value={password}  onChange={(event)=>setPassword(event.target.value)} required/>
                    </div>
                    <br/>

                    <input type="submit" value="login" className="btn btn-primary "/>
                    <br/><br/>

                    </form>
                    <p style={style.errorText}>{error}</p>
                </div>
            </div>
    )

}
const style={
    container:{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        flexDirection: 'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    section1:{
        display:'flex',
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    section2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:3,
        border:'2px solid black', 
        display:'flex',
        margin:20,
        height:500,
    },
    sectionImage:{
        height:650,
        width:'100%'
        
    },
    heading:{
        paddingTop:20
    },
    errorText:{
        fontSize: 15,
        color: "red",
        marginTop: 10
    },
    email:{
        alignItems:'center',
        justifyContent:'center'
    }
}

export default withRouter(LoginForm);