import React, { Component } from 'react';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberToBeAdded : 0,
            funcName : this.props.name,
            array : this.props.array
        }
    }
    
    mapFunction = () => {
        return this.state.array.map((arr,index) =>{
            return(
                <ul key={index}>
                    {arr+parseInt(this.state.numberToBeAdded)}
                </ul>
            )
        })
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return {funcName: nextProps.name, array: nextProps.array}
    }

    updateAddtionNumber = (event) => {
        this.setState({
            numberToBeAdded : event.target.value
        })
     }

    render() {
        return ( 
            <div>
                <input type='text' placeholder='Enter number to add' onChange={this.updateAddtionNumber}></input>
                <div>
                    <b>
                        <i>
                            {'Function used : '+this.state.funcName}
                        </i>
                    </b>
                </div>
                <div>
                    {this.mapFunction()}
                </div>
            </div>
         );
    }
}
 
export default Map;