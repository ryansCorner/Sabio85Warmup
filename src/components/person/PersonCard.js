import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import { IoIosPerson as PersonIcon } from 'react-icons/io'
const PersonCard = props => {
    let mappedPeople = props.people.map((person, idx) => {
        return <div class="col mb-6">
            <div className="card person-card " key={idx} name={person.id}>
                <img
                    src={person.medium ? person.medium : 'https://thenypost.files.wordpress.com/2020/01/derek-jeter-8.jpg?quality=80&strip=all'} className="card-img-top " style={{ backgroundColor: '#5A7769 !important' }} alt="..." />
                <div className="person-card-img-overlay card-img-overlay">
                    <a className='card-text text-left' name={person.id} onClick={props.onPersonClick} >{person.title} {person.first} {person.last}</a>

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