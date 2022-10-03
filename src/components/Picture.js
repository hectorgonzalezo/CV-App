import React, { Component } from 'react';
import face from '../assets/face.jpg';

class Picture extends Component{
    constructor(props){
        super(props)
        this.state = { url: face};
        this.changePicture = this.changePicture.bind(this);
    }

    // Adds image uploaded as src from img
    changePicture(e){
        console.log(URL.createObjectURL(e.target.files[0]))
        this.setState({url: URL.createObjectURL(e.target.files[0])})

    }

    render(){
        return (
            <div id="picture">
                <img src={this.state.url} alt=""/>
                    <input
                    type="file"
                    name='upload'
                    id='upload'
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={this.changePicture}
                    />
                    <label htmlFor='upload'>Upload picture</label>
            </div>
        )
    }
}

export default Picture