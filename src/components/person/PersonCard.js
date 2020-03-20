import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import { IoIosPerson as PersonIcon } from 'react-icons/io'
const PersonCard = props => {
    let mappedPeople = props.people.map((person, idx) => {
        return <div className='col mb-6'>
            <div class="card person-card w-75 h-75 mb-4">
                <img src={person.medium ? person.medium : 'https://thenypost.files.wordpress.com/2020/01/derek-jeter-8.jpg?quality=80&strip=all'}
                    className="card-img-top w-100 h-100"
                    style={{ backgroundColor: '#5A7769 !important', opacity: "0.88" }}
                    alt="..." />
                <div class="card-img-overlay person-card-img-overlay">
                    <div class="card-body person-card-body w-100 h-100">
                        <p className='card-text cust-card-header text-left' >{person.title} {person.first} {person.last}</p>
                    </div>
                </div>
                <div class="btn-group" role="group" style={{ backgroundColor: "rgb(207, 197, 197, .888)" }} aria-label="Basic example">
                    <button type="button" class="btn btn-outline-primary" name={person.id} onClick={props.onPersonClick}>EDIT</button>
                    <button type="button" class="btn btn-outline-danger" name={person.id} onClick={props.onDeleteClick}>DELETE</button>
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