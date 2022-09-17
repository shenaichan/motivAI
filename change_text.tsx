import React from "react";

interface State {
    input?: String,
    motivation: String
}

export default class Submitter extends React.Component {
    state: State = {
        motivation: "How do you wanna spend your day?",
    };

    handleInputChange = (event: any) => {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        
        this.setState({
            input: undefined,
            motivation: this.state.input
        });
    }

    render() {
        return (
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

                <div className="w3-display-middle">
                    <h1 id="motivate" className="w3-jumbo w3-animate-top">COMING SOON</h1>

                    <input
                        type="text"
                        placeholder="Type something..."
                        onChange={this.handleInputChange}
                        id="myInput"
                    >{this.state.input}</input>
                    <button
                        type="button"
                        onClick={((event:React.MouseEvent) => this.handleSubmit(event))}
                    >Get Value</button>
                </div>
            </div>
        );
    }
}