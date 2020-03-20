import React from 'react'
import { withRouter, Link } from "react-router-dom";


const NavBar = props => {
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#CCC1C1" }}>
                <a className="navbar-brand nav-text" href="#" onClick={props.loginClick}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7tU1B-D2PVC55t-M71rSVh4J_I0LPakP-9MUE8a_uQQp9gn9M" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Sabio Warmup
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to='/authorHome'>  <li className="nav-item active">
                            <a className="nav-link nav-text" href="#">Authors <span className="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to='/personHome'>    <li className="nav-item">
                            <a className="nav-link nav-text" href="#">People</a>
                        </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link disabled nav-text" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default withRouter(NavBar)