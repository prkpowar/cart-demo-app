import React from "react";
import '../App.css';

class Counter extends React.Component {

    state = {
        value: 0
    };

    handleIncrement = () => {
        this.setState({value: this.state.value+1})
    };

    handleDecrement = () =>{
        this.setState({value: this.state.value-1})
    };

    render() {
        return <div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                <button onClick={this.handleDecrement}
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Decrement
                </button>
                <div><ul>{this.state.value}</ul></div>
                <button onClick={this.handleIncrement}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Increment
                </button>

            </div>
        </div>;
    }
}
export default Counter;