import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToastrContainer, {Toast} from '../src/main';
import ToastrTypes from '../src/common/ToastrTypes';

class ToastrDemo extends Component{
    constructor(){
        super();

        this.state = {
            id: 0
        }

        this.showToast = this.showToast.bind(this);
        this.showDangerToastr = this.showDangerToastr.bind(this);
    }

    showToast(){
        this.setState({id: this.state.id + 1});
        Toast("Just a toast! " + this.state.id);
    }

    showDangerToastr(){
        this.setState({id: this.state.id + 1});
        Toast("Just a dangerous toast! " + this.state.id, ToastrTypes.danger);
    }

    render(){
        return (
            <div>
                <ToastrContainer />
                <div className="container">
                    <div className="jumbotron">
                        <h1>react-toastr-basic</h1>
                        <p>A Basic Toastr that is easy to install and easy to use</p>
                        <p>
                            <a className="btn btn-primary btn-lg" onClick={this.showToast}>Toast It!</a>
                            <a className="btn btn-danger btn-lg" onClick={this.showDangerToastr}>Toast a Dangerous Toast!</a>
                        </p>
                    </div>
                    <div className="well">
                        Just import ToastrContainer <br/>
                        <code>import ToastrContainer from 'react-toastr-basic'<br/></code>
                        <br/>
                        Add &lt;ToastrContainer/> in your index.html (or your parent html. whatever you call that)<br/>
                        <code>&lt;ToastrContainer/></code>
                        <br/>
                        <br/>
                        import Toast to your other htmls (where you want to trigger toast)<br/>
                        <code>import &#123;Toast} from 'react-toastr-basic'<br/></code>
                        <br/>
                        Use It<br/>
                        <code>
                        Toast('My Toast Message')
                        </code>
                    </div>
                    <div>
                        Sample.jsx <br/>
                        <pre>
                            import React, &#123;Component} from 'react' <br/>
                            import ToastrContainer, &#123;Toast} from 'react-toastr-basic'<br/>
                            <br/>
                            class MyMainApp extends Component&#123; <br/>
                                &nbsp;&nbsp;&nbsp;constructor()&#123;<br/><br/>


                                &nbsp;&nbsp;&nbsp;}<br/><br />
                                &nbsp;&nbsp;&nbsp;showToast()&#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toast('toast message');<br/>
                                &nbsp;&nbsp;&nbsp;}<br/><br />

                                &nbsp;&nbsp;&nbsp;render()&#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return( <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt; <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastrContainer /><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;this.showToast}&gt;CLICK TO TOAST&lt;/button&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
                                <br/>
                                &nbsp;&nbsp;&nbsp;}<br/>
                            }
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ToastrDemo />, 
    document.getElementById('root')
);