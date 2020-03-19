import React from 'react'
import AuthorForm from './AuthorForm'
import AuthorModalCard from './AuthorModalCard'
import AuthorUpdateForm from './AuthorUpdateForm'
const AuthorModal = props => {
    console.log('modal props', props)
    return (
        <React.Fragment>
            <div className={props.show ? "display-show modal " : 'display-none modal '} tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-main" role="document">
                    <div className="modal-content">
                        <div className='modal-body'>
                            <div classname='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-6'>

                                        <AuthorUpdateForm
                                            onChange={props.onChange}
                                            firstNameUpdateValid={props.firstNameUpdateValid}
                                            lastNameUpdateValid={props.lastNameUpdateValid}
                                            ageUpdateValid={props.ageUpdateValid}
                                            salaryUpdateValid={props.salaryUpdateValid}
                                            createdByUpdateValid={props.createdByUpdateValid}
                                            disabled={props.disabled}
                                            onClick={props.onUpdateClick}
                                        />

                                    </div>
                                    <div className='col-md-6'>
                                        <AuthorModalCard
                                            {...props} />
                                    </div>
                                    <button type="button" className="btn btn-outline-danger" onClick={props.onCloseClick}>Danger</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default AuthorModal