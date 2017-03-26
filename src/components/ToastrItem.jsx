import React, {Component} from 'react';

export default class ToastrItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: ''
        }
    }

    componentWillMount(){
        this.setState({className:'toaster animated fadeIn'})
    }

    componentWillUpdate(){
        this.setState({className:'toaster'})
    }

    render(){
            return (
                <div key={this.props.id} className={this.state.className}>
                    {this.props.message}
                </div>
            )
    }
}

