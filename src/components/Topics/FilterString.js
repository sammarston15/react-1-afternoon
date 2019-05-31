import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor () {
        super();

        this.state = {
            unfilteredStrings: ['hello', 'howdy do', 'whats up'],
            userInput: '',
            filteredStrings: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    filteredStrings(props) {
        let strings = this.state.unfilteredStrings;
        let filteredStrings = [];

        for (let i = 0; i < strings.length; i++) {
            if (strings[i].includes(props)) {
                filteredStrings.push(strings[i])
            }
        }

        this.setState({filteredStrings: filteredStrings})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unfilteredStrings, null, 10)}</span>
                <input className="inputLine" onChange={ (element) => this.handleChange(element.target.value)} />
                <button className="confirmationButton" onClick={() => this.filteredStrings(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredStrings, null, 10)}</span>
            </div>
        )
    }
}