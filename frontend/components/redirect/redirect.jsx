import React from 'react';

class Redirect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      component: ''
    };
  }

  componentDidMount(){
    let code = this.props.location.search.split('=')[1];
    if(code){
      if(code === 'access_denied'){
        this.setState({component: this._redirectFailure()});
      } else {
        this.setState({component: this._redirectSuccess()});
      }
    }
  }

  _redirectSuccess(){
    return (
      <div>
        You have been successfully signed up for birthday reminder!
      </div>
    );
  }

  _redirectFailure(){
    return (
      <div>
        Please authorize in order to use birthday reminder!
      </div>
    );
  }

  render(){
    return (
      <div className='redirect'>
        {this.state.component}
      </div>
    );
  }
}

export default Redirect;
