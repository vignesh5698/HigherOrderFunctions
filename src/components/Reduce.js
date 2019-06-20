import React, { Component } from 'react';

class Reduce extends Component {

    constructor(props){
        super(props);
        this.state = {
            operation : null,
            funcName : '',
            array : []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        return {array: nextProps.array, funcName: nextProps.name}
    }

    onSelectOperation = (event) => {
        this.setState({
            operation: event.target.value
        })
    }
    
    addArray = () => {
        let array = this.state.array;
        return array.reduce((total,element) => {
            return total+element
        })
    }

    mulArray = () => {
        let array = this.state.array;
        return array.reduce((total,element) => {
            return total*element
        })
    }

    render() {
        let operationType = this.state.operation;
        console.log(this.state.operation);
        return ( 
            <div>
                <select className='form-control' onChange={this.onSelectOperation}>
                    <option>Select operation</option>
                    <option value='add'>+</option>
                    <option value='mul'>*</option>
                </select>
                {operationType == 'add' ? this.addArray() : ''}
                {operationType == 'mul' ? this.mulArray() : ''}
            </div>
         );
    }
}
 
export default Reduce;