import React, { Component } from 'react'

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
//API CALL TO NY API
import API from '../utils/nytAPI'


class Search extends Component{
    constructor(){
        super()
        this.state = {
            value : 1,
            Topic : "",
            startYear: "",
            endYear:"",
            searchResults:""

        }
    }

    handleInputChange=event=>{
        const value = event.target.value;
        const name = event.target.name
        this.setState({
            [name]:value
        });

    }
    handleSave=(data)=>{
        // console.log(data.snippet)
        // console.log(data.web_url)
        // console.log(data.pub_date)s
        this.removeSavedResultfromState(data._id)

    }

    removeSavedResultfromState=(id)=>{
        for(let i = 0; i<this.state.searchResults.length; i++){
            if(this.state.searchResults[i]._id === id){
                this.state.searchResults.splice(i,1)
                let newArr = this.state.searchResults
                this.setState({
                    searchResults: newArr
                })
            }
        }




    }

    populateResults=(data)=>{
        return(

                <TableRow key={data._id}>
                    <TableRowColumn>
                        {data.snippet}
                    </TableRowColumn>
                    <TableRowColumn>
                        <FlatButton
                            label="Save"
                            secondary={true}
                            onClick={()=>this.handleSave(data)}
                        />
                    </TableRowColumn>
                </TableRow>


        )
    }



    searchForm=event=>{
        event.preventDefault()
        API.search(this.state.Topic,this.state.startYear,this.state.endYear)
            .then((results)=>{
            this.setState({
                searchResults:results.data.response.docs
            })
            })
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <TextField
                    hintText="Topic"
                    name="Topic"
                    onChange={this.handleInputChange}
                    floatingLabelText="Topic"
                /><br />

                <TextField
                    hintText="Start Year"
                    name="startYear"
                    onChange={this.handleInputChange}
                    floatingLabelText="Start Year"
                /><br />

                <TextField
                    hintText="End Year"
                    name="endYear"
                    onChange={this.handleInputChange}
                    floatingLabelText="End Year"
                />
                <br/>

                <Divider />
                <br/>

                <RaisedButton
                    label="Search"
                    primary={true}
                    onClick={this.searchForm}
                />
                <br/>
                <br/>
                <Divider />
                {
                    this.state.searchResults.length > 0 ? <h4>Results</h4>: null
                }
                <Table style={{overflow:"auto"}} >
                    <TableBody>
                        {
                            this.state.searchResults ?  this.state.searchResults.map((this.populateResults)) : null
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default Search