import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import BEAPI from '../utils/beAPI'


class Main extends Component{
    constructor(){
        super()
    }

    handleHome(){
        window.location.href="/"

    }
    handleSaved(){
        window.location.href="/Saved"

    }

    handleSearch=()=>{
        //HashRouter.push('/Search')
        window.location.href="/Search"
    }

    handletest = () =>{
        BEAPI.search()
            .then((results)=>{
                console.log("DATA",results.data)
            })

    }
    render(){
        return(
            <div>
                <AppBar
                    title="New York times Search"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Card>

                    <CardText>
                       Best New York Times search app ever created....in React and Material-UI.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Home" onClick={()=>this.handleHome()}/>
                        <FlatButton label="Saved" onClick={()=>this.handleSaved()}/>
                        <FlatButton label="Search" onClick={()=>this.handleSearch()}/>

                        <FlatButton label="Test" onClick={()=>this.handletest()}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Main