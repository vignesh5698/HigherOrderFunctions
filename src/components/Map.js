import React, { Component } from 'react';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberToBeAdded : 0
        }
    }
    
    mapFunction = () => {
        return this.props.array.map((arr,index) =>{
            return(
                <ul>
                    {arr+parseInt(this.state.numberToBeAdded)}
                </ul>
            )
        })
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
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
                            {'Function used : '+this.props.name}
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