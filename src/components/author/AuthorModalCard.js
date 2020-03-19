import React from 'react'

const AuthorModalCard = props => {
    console.log('modal card props', props)
    return (
        <React.Fragment>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.firstNameUpdate} {props.lastNameUpdate}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.ageUpdate}</h6>
                    <p className="card-text">{props.salaryUpdate}</p>
                    <a href="#" className="card-link">{props.createdByUpdate}</a>
                    <a href="#" className="card-link">{props.idUpdate}</a>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AuthorModalCard