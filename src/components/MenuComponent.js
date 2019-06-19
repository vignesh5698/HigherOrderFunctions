import React, { Component } from 'react';
import Map from './Map';
import Filter from './Filter';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr1 : [12, 13, 14, 15, 16],
            elements : [],
            currentElement : '',
            funcName : ''
        }
    }

    renderMapFunction = () => {
        return <Map array = {this.state.elements} name = {this.state.funcName}/>
    }

    renderFilterFunction = () => {
        return <Filter array = {this.state.elements} name = {this.state.funcName}/>
    }

    setInputField = (event) => {
        this.setState({
            currentElement: parseInt(event.target.value),
            funcName: ''
        })
    }

    onAddElement = () => {
        this.setState({
            elements: [...this.state.elements, this.state.currentElement]
        })
        this.setState({
            currentElement: ''
        })
    }
    
    onSetFunction =(event) => {
        this.setState({
            funcName: event.target.value
        })
    }

    render() {
        return ( 
            <div>
                <h1>Higher Order Functions</h1>
                <div>
                    <input type='text' placeholder='Add element  ' value={this.state.currentElement} onChange={this.setInputField}></input>
                    <div>
                        <button className='btn btn-primary' onClick={this.onAddElement}>Add Element</button>
                    </div>
                    <div>
                        <b>
                        Elements in the array : 
                            {this.state.elements.map((element, index) => {
                                return(
                                    <li key={index}>
                                        {element}
                                    </li>
                                )
                                
                            })}
                        </b>
                    </div>
                </div>
                <select className='form-control' onChange={this.onSetFunction}>
                    <option>Select function</option>
                    <option value='Map'>Map</option>
                    <option value='Filter'>Filter</option>
                    <option value='Join'>Join</option>
                    <option value='Find'>Find</option>
                    <option value='Reduce'>Reduce</option>
                </select>
                {this.state.funcName === 'Map' ? this.renderMapFunction() : ''}
                {this.state.funcName === 'Filter' ? this.renderFilterFunction() : ''}
            </div>
         );
    }
}
 
export default Menu;