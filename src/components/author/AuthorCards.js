import React from 'react'
import { FaRegEdit as Edit, } from 'react-icons/fa'
import { MdDeleteForever as Delete } from 'react-icons/md'
import {
    Card, Button, CardImg, CardTitle, CardText, CardImgOverlay,
    CardSubtitle, CardBody
} from 'reactstrap';


// <Card>
//     <CardImg top width="100%" src={(author.id % 2 === 0 ? "https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" : 'https://img.pngio.com/author-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg')} alt="Card image cap" />
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
        return <React.Fragment> <div className='col mb-6'>
            <div class="card person-card w-75 h-75 mb-4">
                <img src={author.medium ? author.medium : 'https://thenypost.files.wordpress.com/2020/01/derek-jeter-8.jpg?quality=80&strip=all'}
                    className="card-img-top w-100 h-100"
                    style={{ backgroundColor: '#5A7769 !important', opacity: "0.88" }}
                    alt="..." />
                <div class="card-img-overlay person-card-img-overlay">
                    <div class="card-body person-card-body w-100 h-100">
                        <p className='card-text cust-card-header text-left' >
                            {author.firstName} {author.lastName}
                        </p>
                    </div>
                </div>
                <div class="btn-group" role="group"
                    style={{ backgroundColor: "rgb(207, 197, 197, .888)" }} aria-label="Basic example">
                    <button type="button" class="btn btn-outline-primary"
                        name={author.id} onClick={props.onGetAuthorProfileClick}>EDIT
                        </button>
                    <button type="button" class="btn btn-outline-danger"
                        name={author.id} onClick={props.onDeleteClicked}>DELETE
                        </button>
                </div>
            </div>
        </div>


        </React.Fragment >
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