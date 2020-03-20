import React from 'react'
const PersonProfileCard = props => {
    let updatedPerson = props.updatePersonObj
    return (
        <React.Fragment>
            <div className='card'>
                <div className='card'>
                    <div className='card-header'>
                        <img className='profile-card-img float-left' src={props.medium ? props.medium : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdKUkYkSE_qxG4Be61wzonc7cNyD7ztiwC2Hc4aZJYkbAk9Ssh'} alt='Profile Avatar' />
                        <h5 className='card-title'>{props.title} {props.first} {props.last}</h5>
                        <h6 className='card-subtitle'>{props.email}</h6>
                        <h6 className='card-subtitle'>{props.gender}</h6>
                        <h6 className='card-subtitle'>{props.dob}</h6>
                        <h6 className='card-text'>{props.street}</h6>
                        <h6 className='card-text'>{props.city}</h6>
                        <h6 className='card-text'>{props.state}</h6>
                        <h6 className='card-text'>{props.postCode}</h6>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PersonProfileCard