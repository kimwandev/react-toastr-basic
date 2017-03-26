import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToastrContainer, {Toast} from '../src/main';

class ToastrDemo extends Component{
    constructor(){
        super();

        this.state = {
            id: 0
        }

        this.showToast = this.showToast.bind(this);
    }

    showToast(){
        this.setState({id: this.state.id + 1});
        Toast("Message " + this.state.id);
    }

    render(){
        return (
            <div>
                <ToastrContainer />
                <button className="btn btn-primary" onClick={this.showToast}>Show Toast</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ToastrDemo />, 
    document.getElementById('root')
);