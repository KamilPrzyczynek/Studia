import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
<div>
    <nav>
        <h1><Link to="/home">Home</Link></h1>
        <h1><Link to="/posts">Posts</Link></h1>
    </nav>
</div>
        );
    }
}

export default Navbar;
