import React from 'react'

// //stateless component
// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}, Welcome to ReactJS</h1>
//     )
// }

//class based
class HelloWorld extends React.Component{
    render(){
        return(
            <h1>hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld