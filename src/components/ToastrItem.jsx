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

    render(){
            return (
                <div className={this.state.className}>
                    {this.props.message}
                </div>
            )
    }
}

