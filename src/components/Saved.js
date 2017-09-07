import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';

import API from '../utils/'

class Saved extends Component{
    constructor(){
        super()
        this.state = {
            savedResults:[]
        }
    }

    componentDidMount(){
        this.getSavedArticles()
    }

    getSavedArticles=()=>{
        API.getsaved().then((res)=>{
            console.log(res.data)
            this.setState({
                savedResults: res.data
            })
        })
    }

    handleRemove=(id)=>{
        API.removedArticle(id)
        this.getSavedArticles()

    }

    populateResults=(data)=>{
        return(
            <TableRow key={data._id}>
                <TableRowColumn>
                    {data.title}
                </TableRowColumn>
                <TableRowColumn>
                    {data.date}
                </TableRowColumn>
                <TableRowColumn>
                    <FlatButton
                        label="Remove"
                        secondary={true}
                        onClick={()=>this.handleRemove(data._id)}
                    />
                </TableRowColumn>
            </TableRow>
        )
    }
    render(){
        return(
            <div>
                {
                    this.state.savedResults ? <div style={{textAlign:"center"}}><h1>Saved Articles</h1></div> : null
                }
                <Table>
                    <TableBody>
                        {
                            this.state.savedResults  ?  this.state.savedResults.map((this.populateResults)) : null
                        }
                    </TableBody>
                </Table>

            </div>

        )
    }
}

export default Saved