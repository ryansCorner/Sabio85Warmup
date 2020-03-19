import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
const PersonCard = props => {
    let mappedPeople = props.people.map((person, idx) => {
        return <div class="col mb-6">
            <div className="card person-card h-65">
                <img src={person.medium} className="card-img-top h-65" style={{ backgroundColor: '#5A7769 !important' }} alt="..." />
                <div className="person-card-img-overlay card-img-overlay">
                    <p className='card-text text-left'>{person.title} {person.first} {person.last}</p>

                </div>
            </div>
        </div>
    })
    return (
        <React.Fragment>
            {mappedPeople}
        </React.Fragment>
    )
}
export default PersonCard