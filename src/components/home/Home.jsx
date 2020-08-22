import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{
    
    // componentDidMount(){
    //     const { myKey } = this.props.match.params
    //     console.log(myKey )
    // }

    render(){
       return(
           <div>
           <div>Home page</div>
           {/* <div><Link to="/">Logout</Link></div> */}
           </div>
       )
    }
}

export default Home