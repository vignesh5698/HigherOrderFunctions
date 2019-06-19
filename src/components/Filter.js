import React, { Component } from 'react';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            array : [],
            divider : 1,
            funcName : ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return {array : nextProps.array, funcName : nextProps.name}
    }

    updateDivider = (event) => {
        this.setState({
            divider : event.target.value
        })
    }

    filterFunction = () => {
        return this.props.array.filter((value) => {
            return value%this.state.divider === 0
        })
    }

    render() {
        return ( 
            <div>
                <input type='text' placeholder=' Enter number to divide ' onChange={this.updateDivider}/>
                <div>
                    {'Function used : '+this.state.funcName}
                </div>
                <div>
                    {this.filterFunction()}
                </div>
            </div>
         );
    }
}
 
export default Filter;