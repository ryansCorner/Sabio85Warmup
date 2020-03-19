import React from 'react'
import { FaRegEdit as Edit, } from 'react-icons/fa'
import { MdDeleteForever as Delete } from 'react-icons/md'
import {
    Card, Button, CardImg, CardTitle, CardText, CardImgOverlay,
    CardSubtitle, CardBody
} from 'reactstrap';


// <Card>
//     <CardImg top width="100%" src={(author.id % 2 === 0 ? "https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" : 'https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg')} alt="Card image cap" />
//     <CardImgOverlay>
//         <Button name={author.id} className='author-delete-btn' data-toggle="modal" data-target=".bd-example-modal-sm" onClick={props.onDeleteClicked}><Delete /></Button>
//     </CardImgOverlay>
//     <CardBody>
//         <CardTitle>{author.firstName} {author.lastName}</CardTitle>
//         <CardSubtitle>Age: {author.age} Salary: {author.salary}</CardSubtitle>
//         <CardText>Click The Button Below To See The Author Profile</CardText>
//         <Button name={author.id}
//             onClick={props.onProfileClick}>Profile</Button>
//         <Button name={author.id} data-toggle="modal" data-target=".bd-example-modal-sm" onClick={props.onClick}><Edit /></Button>
//     </CardBody>
// </Card>

const AuthorCards = props => {
    console.log('author carD!', props)

    const mappedAuths = props.authors.map((author, idx) => {
        var date = new Date(author.dateCreated)
        var dateShown = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date)
        return <React.Fragment>
            <div>
                <div className="card person-card h-100">
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"
                        className="card-img-top" alt="..." />
                    <div className="person-card-img-overlay card-img-overlay">
                        <div className='row'>
                            <div className='col-9'>

                                <p className='card-text text-left'>{author.firstName} {author.lastName}</p>
                            </div>
                            <div className='col-3'>

                                <a className='author-delete-btn text-right' onClick={props.onDeleteClicked}><Delete /></a>
                            </div>
                        </div>
                        <div className='row'>

                            <a className='card-text text-left'><Edit /></a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    })

    return (
        <React.Fragment>

            {props.authors && (
                <React.Fragment>

                    {mappedAuths}

                </React.Fragment>
            )}


        </React.Fragment>
    )
}
export default AuthorCards