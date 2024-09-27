// *************This is functional component*************

// const User = ({name}) =>{
//     // const {name} = props;
//     return (
//     <div className="userDetailCard">
//         <h3>{name}</h3>
//         <p>Web Developer</p>
//         <p>IIT Bhilai, Durg</p>
//         <p>Contact:- 8839748603</p>
//     </div>
//     )}
// export default User;


// *************This is class component*************

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="userDetailCard">
            <h3>{this.props.name}</h3>
            <p>Web Developer</p>
            <p>IIT Bhilai, Durg</p>
            <p>Contact:- 8839748603</p>
            </div>
        )
    }
}
export default UserClass;