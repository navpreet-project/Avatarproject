import React from 'react';
import './avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar=(props)=>{
    const avatarlistarray=[
        {
            id:1,
            name:"Harmanjit",
            work:"Web developer"
        },
        {
            id:2,
            name:"Harjit",
            work:"Web developer"
        },
        {
            id:3,
            name:"Harpreet",
            work:"Web developer"
        },
        {
            id:4,
            name:"Harmanjit",
            work:"Web developer"
        },
        {
            id:5,
            name:"Harjinder",
            work:"Software developer"
        }
    ]
    const arrayavatarcard =avatarlistarray.map((avatarcard,i) => {
        return <Avatarlist id={avatarlistarray[i].name} 
        name={avatarlistarray[i].name} 
        work={avatarlistarray[i].work} />

    }
    )
    return (
        <div className="mainpage">
            <h1 >Welcome to React</h1>
            {arrayavatarcard}<br/>

            {/* <Avatarlist id={avatarlistarray[0].name} 
                           name={avatarlistarray[0].name} 
                           work={avatarlistarray[0].work}/>
            <Avatarlist id={avatarlistarray[1].name} name={avatarlistarray[1].name} 
                           work={avatarlistarray[1].work}/>
            <Avatarlist id={avatarlistarray[2].name} name={avatarlistarray[2].name} 
                           work={avatarlistarray[2].work}/>
                           <Avatarlist id={avatarlistarray[3].name} name={avatarlistarray[3].name} 
                           work={avatarlistarray[3].work}/><br/> */}
            {/* <Avatarlist id="1" name="Sarbjit" work="Software Developer"/><br/> */}
            <button>Subscribe</button>
        </div>
    
      )  }
export default Avatar;