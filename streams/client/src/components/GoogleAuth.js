import React, { Component } from 'react'

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "506599947941-lko5r6150fcknmrkqc8s1armndh2h982.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  RenderAuthButton() {
      if (this.state.isSignedIn === null || this.state.isSignedIn === false) {
          return <div>Sign In</div>
      } else return <div>Sign Out</div> 
  }

  render() {
    return <div>{this.RenderAuthButton()}</div>;
  }
}

export default GoogleAuth
