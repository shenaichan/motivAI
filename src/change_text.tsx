import React from "react";

interface State {
    input?: string,
    motivation: string
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

    handleSubmit = () => {
        this.setState({
            input: "",
            motivation: this.state.input
        });
    }

    render() {
        return (
            <div>
                <h1 id="motivate">{this.state.motivation}</h1>

                <input
                    type="text"
                    placeholder="Type something..."
                    onChange={this.handleInputChange}
                    id="myInput"
                    value={this.state.input}
                />
                <button
                    type="button"
                    onClick={this.handleSubmit}
                >Get Value</button>
            </div>
        );
    }
}