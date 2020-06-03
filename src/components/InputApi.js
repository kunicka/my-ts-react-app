import React, { Component } from 'react'

class InputApi extends Component {
    state = {
        text:"w tym roku pokonalismy krzyzakow",
        error: ""
    }

    handleDateChange=(e)=>{
        const value = e.target.value;
        // const value = this.refs.numer.vaule;
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
        .then(res=>{
            if(res.ok){
                
                    return res
                } throw Error(res.statusText);
        })
        
        .then(res=>res.json())
        .then(data=>this.setState({
            text:data.title
        }))
        .catch(err=>console.log(err))
        this.setState({text:"Jest Problem :("})
    }
    render() {
        return (
            <div>
                <h3>Api</h3>
                <div className="div-container">
                <input onChange={this.handleDateChange} type="text" ref="numer"/>
                <p>Wpisz od 1 do 100: {this.state.text}</p>
                </div>
            </div>
        )
    }
}

export default InputApi
