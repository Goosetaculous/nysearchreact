import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';

class Saved extends Component{
    constructor(){
        super()
        this.state = {
            savedResults:""
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
    render(){
        return(
            <div>
                <h1>Inside Saved</h1>
                {
                    this.state.savedResults? <div style={{textAlign:"center"}}><h1>Saved</h1></div> : null
                }

                <Table>
                    <TableBody>
                        {
                            this.state.savedResults ?  this.state.savedResults.map((this.populateResults)) : null
                        }
                    </TableBody>
                </Table>

            </div>

        )
    }
}

export default Saved