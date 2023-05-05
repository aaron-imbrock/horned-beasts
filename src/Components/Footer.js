import { Component } from "react";

class Footer extends Component {
    render() {
        return <p>Created with ❤️ by {this.props.author}</p>
    }
}

export default Footer;