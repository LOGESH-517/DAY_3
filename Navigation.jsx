import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Division.css'
export default function Navigation() {
  return (
    <div class='divisions' style={{justifyContent:'center'}}>
          <ul style={{textAlign:"center"}}>
            <div> <img  src={'https://th.bing.com/th/id/OIP.ggWjUsBJPh7m2maHCzH6lgHaMA?w=133&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt=""  style={{height:"25vh",width:"8vw",paddingBottom:"4.2vh"}}/></div>
            <Link to="/coffee" style={{textDecorationLine:"none"}}><Button variant="contained" color="primary" >COFFEE</Button></Link>
          </ul>
          <ul style={{ textAlign:"center"}}>
          <div><img src={'https://th.bing.com/th/id/OIP.8Loe5bD5kOQgi3F87iB-1wHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt="" style={{height:"29vh",width:"12.5vw",marginLeft:"11vh",marginRight:"5vw"}}/></div>
            <Link to="/tea" style={{textDecorationLine:"none", color:"#CD5888",fontSize:"0.6cm"}}><Button variant="contained" color="primary" style={{marginLeft:"11vh",marginRight:"5vw"}}>TEA</Button></Link>
          </ul>
          <ul style={{ textAlign:"center"}}>
          <div><img src={'https://th.bing.com/th/id/OIP.Wp_cUu2PFIW3pSc-ydfcuAHaHa?w=179&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt="" style={{height:"26vh",width:"12vw",paddingBottom:"2.5vh"}}/></div>
            <Link to="/pasteries" style={{textDecorationLine:"none", color:"#CD5888",fontSize:"0.6cm"}}><Button variant="contained" color="primary">PASTERIES</Button></Link>
          </ul>
          
    </div>
  )
}
