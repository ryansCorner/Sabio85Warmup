import React from 'react'
import { withRouter } from "react-router-dom"
import "../Card.css"

const authorCards = props => {
    console.log('author carD!', props.authors)
    const author = props.author
    return (
        <React.Fragment>

            <div className="card" >
                <img className="card-img-top" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">'{author.FirstName} {author.LastName}'</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default authorCards