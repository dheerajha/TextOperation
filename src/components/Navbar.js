import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    // we are passing the props and passing the props.title and in the title we are doing {props.title}and in the title we are doing props.title and {} because it is the javaScript
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">
                {props.title}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {props.aboutText}
                        </a>
                    </li>
                </ul>

                <div className={`form-check form-switch text-$[props.mode === 'light' ? dark : light ]`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>


            </div>
        </nav >
    );
}


// ----------------------types of the props------------------------


// propType Sets the types of the props so that we cant pass any other type and reduce chance of mistake
Navbar.proptype = { title: PropTypes.string, aboutText: PropTypes.string };
// isRequired is used to set the mandotry feild without this it will result in error
Navbar.proptype = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
// this will get the default text of the props
Navbar.defaultProps = {
    title: "set the title here",
    aboutText: "Set the about us here "
}