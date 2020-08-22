import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class SignUpSuccess extends Component{

    render(){
       return(
           <div>
           <div>Successfully SignUp</div>
           <div>Welcome</div>
           {/* <div><Link to="/logout">Logout</Link></div> */}
           </div>
       )
    }
}

export default SignUpSuccess