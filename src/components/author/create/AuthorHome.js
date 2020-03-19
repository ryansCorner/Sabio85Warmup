import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as AuthorService from '../../../services/authorService'
import FormErrors from '../../common/FormErrors'
import AuthorForm from '../AuthorForm'
import AuthorCards from '../AuthorCards'
import AuthorModal from '../AuthorModal'
import PageButtons from '../../common/PageButtons'
import AuthorProfile from '../profile/AuthorProfile'
import { CardDeck } from 'reactstrap'

class AuthorHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            Age: null,
            Salary: null,
            CreatedBy: null,
            formErrors: {
                FirstName: '',
                LastName: '',
                Age: '',
                Salary: '',
                CreatedBy: ''
            },
            FirstNameValid: '',
            LastNameValid: '',
            AgeValid: '',
            SalaryValid: '',
            CreatedByValid: '',
            updateFormValid: false,
            formValid: false,
            showErrors: false,
            editClicked: false,
            hasNextPage: null,
            show: false,
            hasPreviousPage: null,
            pageIndex: 0,
            pageSize: 5,
            displayedAuthors: [],
            profileClick: false

        }
        this.baseState = this.state
    }

    onAuthorProfileClick = evt => {
        const target = evt.target.name
        AuthorService.getBlogsForAuthor(target, this.onGetAuthorBlogsSuccess, this.onGetAuthorBlogsError)
    }

    onGetAuthorBlogsSuccess = resp => {
        console.log("blogs for author ", resp)
        this.setState({
            ...this.state,
            profileClick: true,
            targetAuthorBlogs: resp.data.value.item,
        })
    }
    onGetAuthorBlogsError = err => {
        console.log('an error occured while getting blogs for author')
    }

    onAuthorCreateClick = props => {
        if (this.state.formValid) {
            const {
                FirstName,
                LastName,
                Age,
                Salary,
                CreatedBy,
            } = this.state;
            const data = {
                FirstName: FirstName,
                LastName: LastName,
                Age: parseInt(Age, 10),
                Salary: parseInt(Salary, 10),
                CreatedBy: parseInt(CreatedBy, 10)
            };
            console.log(typeof (data.Age))
            AuthorService.authorCreate(data, this.onAuthorCreateSuccess, this.onAuthorCreateError)
        }
    }

    onNextBtnClick = props => {
        var pageIndex = this.state.pageIndex + 1
        AuthorService.getPagedAuthors(pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsSuccess)
    }

    onPrevBtnClick = props => {
        var pageIndex = this.state.pageIndex - 1
        AuthorService.getPagedAuthors(pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsSuccess)
    }

    onGetAuthorProfileClick = evt => {
        const key = evt.target.name
        AuthorService.getIdAuthors(key, this.getSingleAuthorSuccess, this.getSingleAuthorError)

    }

    getSingleAuthorSuccess = evt => {
        var authorToUpdate = evt.data.item
        console.log('get author success', evt)
        console.log('get author success', authorToUpdate)
        this.setState({
            ...this.state,
            show: true,
            idUpdate: authorToUpdate.id,
            firstNameUpdate: authorToUpdate.firstName,
            lastNameUpdate: authorToUpdate.lastName,
            ageUpdate: authorToUpdate.age,
            salaryUpdate: authorToUpdate.salary,
            createdByUpdate: authorToUpdate.createdBy,
            formErrorsUpdate: {
                firstNameUpdate: '',
                lastNameUpdate: '',
                ageUpdate: '',
                salaryUpdate: '',
                createdByUpdate: ''
            },
            firstNameUpdateValid: '',
            lastNameUpdateValid: '',
            ageUpdateValid: '',
            salaryUpdateValid: '',
            createdByUpdateValid: '',
        }
        )
        AuthorService.getBlogsForAuthor(authorToUpdate.id, this.onGetAuthorBlogsSuccess, this.onGetAuthorBlogsError)
    }
    getSingleAuthorError = err => {
        console.log('get author error', err)
    }

    onAuthorCreateSuccess = resp => {
        console.log("Create Success: ", resp)
        var pageIndex = this.state.pageIndex
        var hasNextPage = this.state.hasNextPage
        var hasPreviousPage = this.state.hasPreviousPage
        var displayedAuthors = this.state.displayedAuthors
        this.setState({
            ...this.baseState,
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage,
            displayedAuthors: displayedAuthors
        })
        AuthorService.getPagedAuthors(pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsSuccess)
    }

    onAuthorCreateError = err => {
        console.log('An Error Occured. Could Not Create Author: ', err)
    }

    onGetPageAuthorsSuccess = resp => {
        console.log(`got authors on page ${resp.data.item.pageIndex + 1}`)
        this.setState({
            ...this.state,
            displayedAuthors: resp.data.item.pagedItems,
            hasNextPage: resp.data.item.hasNextPage,
            hasPreviousPage: resp.data.item.hasPreviousPage,
            pageIndex: resp.data.item.pageIndex,


        })
    }
    onGetPageAuthorsError = err => {
        console.log('get paged authors error: ', err)
    }
    onAuthorUpdateClicked = props => {
        var id = this.state.idUpdate
        var age = parseInt(this.state.ageUpdate, 10)
        var salary = parseInt(this.state.salaryUpdate, 10)
        var createdBy = parseInt(this.state.createdByUpdate, 10)
        var data = {
            FirstName: this.state.firstNameUpdate,
            LastName: this.state.lastNameUpdate,
            Age: age,
            Salary: salary,
            CreatedBy: createdBy
        }
        AuthorService.authorUpdate(id, data, this.onUpdateSuccess, this.onUpdateError)
    }

    onUpdateSuccess = resp => {
        console.log('WE UPDATED THE AUTHOR', resp)
        this.setState({
            // ...this.baseState,
            idUpdate: '',
            firstNameUpdate: '',
            lastNameUpdate: '',
            ageUpdate: '',
            salaryUpdate: '',
            createdByUpdate: '',
            formErrorsUpdate: {
                firstNameUpdate: '',
                lastNameUpdate: '',
                ageUpdate: '',
                salaryUpdate: '',
                createdByUpdate: ''
            },
            firstNameUpdateValid: false,
            lastNameUpdateValid: false,
            ageUpdateValid: false,
            salaryUpdateValid: false,
            createdByUpdateValid: false,
            updateFormValid: false,
            show: false
        })
        AuthorService.getPagedAuthors(this.state.pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsError)

    }

    onUpdateError = err => {
        console.log("WE HAD A PROBLEM UPDATING THE AUTHOR", err)
    }

    onDeleteClicked = evt => {
        var target = evt.target.name
        console.log('delete target id: ', target)
        AuthorService.authorDelete(target, this.onDeleteSuccess, this.onDeleteError)
    }

    onDeleteError = err => {
        console.log("AN ERROR OCCURED DURING AUTHOR DELETE: ", err)
    }

    onDeleteSuccess = resp => {
        console.log('DELETE SUCCESS!!!', resp)
        AuthorService.getPagedAuthors(this.state.pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsError)
    }


    onModalBtnClose = props => {
        this.setState({
            ...this.state,
            show: false,
            // ...this.baseState,
            idUpdate: '',
            firstNameUpdate: '',
            lastNameUpdate: '',
            ageUpdate: '',
            salaryUpdate: '',
            createdByUpdate: '',
            formErrorsUpdate: {
                firstNameUpdate: '',
                lastNameUpdate: '',
                ageUpdate: '',
                salaryUpdate: '',
                createdByUpdate: ''
            },
            firstNameUpdateValid: '',
            lastNameUpdateValid: '',
            ageUpdateValid: '',
            salaryUpdateValid: '',
            createdByUpdateValid: '',
            updateFormValid: false,
            show: false
        })
    }
    onKeyDown = event => {
        if (event.keyCode === 27) {
            this.setState({
                ...this.state,
                show: false
            })
        }
    };

    onChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val,
        }, this.state.show ? () => this.validateUpdateField(key, val) : () => this.validateField(key, val)
        )

    }
    validateUpdateField = (fieldName, value) => {
        console.log('validate update field', fieldName, value)
        let UpdateFieldValidationErrors = this.state.formErrorsUpdate;
        let firstNameUpdateValid = this.state.firstNameUpdateValid;
        let lastNameUpdateValid = this.state.lastNameUpdateValid;
        let ageUpdateValid = this.state.ageUpdateValid;
        let salaryUpdateValid = this.state.salaryUpdateValid;
        let createdByUpdateValid = this.state.createdByUpdateValid;

        switch (fieldName) {
            case 'firstNameUpdate':
                firstNameUpdateValid = value.length > 1 && value.length < 50;
                UpdateFieldValidationErrors.firstNameUpdateValid = firstNameUpdateValid ? '' : ' is invalid';
                break;
            case 'lastNameUpdate':
                lastNameUpdateValid = value.length > 1 && value.length < 50;
                UpdateFieldValidationErrors.lastNameUpdateValid = lastNameUpdateValid ? '' : ' is invalid';
                break;
            case "ageUpdate":
                ageUpdateValid = value > 20 && value < 101;
                UpdateFieldValidationErrors.ageUpdateValid = ageUpdateValid ? '' : ' is invalid';
                break;
            case "salaryUpdate":
                salaryUpdateValid = value > 49999 && value < 100001;
                UpdateFieldValidationErrors.salaryUpdateValid = salaryUpdateValid ? '' : ' is invalid';
                break;
            case "createdByUpdate":
                createdByUpdateValid = value > 0 && value < 1001;
                UpdateFieldValidationErrors.createdByUpdateValid = createdByUpdateValid ? '' : ' is invalid';
                break;
            default:
                break;
        }

        this.setState({
            firstNameUpdateValid: firstNameUpdateValid,
            lastNameUpdateValid: lastNameUpdateValid,
            ageUpdateValid: ageUpdateValid,
            salaryUpdateValid: salaryUpdateValid,
            createdByUpdateValid: createdByUpdateValid,
            formErrorsUpdate: UpdateFieldValidationErrors
        }, this.validateUpdateForm)
    }


    validateField = (fieldName, value) => {
        console.log(fieldName, value)
        // console.log(typeof value)

        let FieldValidationErrors = this.state.formErrors;
        let FirstNameValid = this.state.FirstNameValid;
        let LastNameValid = this.state.LastNameValid;
        let AgeValid = this.state.AgeValid;
        let SalaryValid = this.state.SalaryValid;
        let CreatedByValid = this.state.CreatedByValid;



        switch (fieldName) {
            case 'FirstName':
                FirstNameValid = value.length > 1 && value.length < 50;
                FieldValidationErrors.FirstNameValid = FirstNameValid ? '' : ' is invalid';
                break;
            case 'LastName':
                LastNameValid = value.length > 1 && value.length < 50;
                FieldValidationErrors.LastNameValid = LastNameValid ? '' : ' is invalid';
                break;
            case "Age":
                AgeValid = value > 20 && value < 101;
                FieldValidationErrors.AgeValid = AgeValid ? '' : ' is invalid';
                break;
            case "Salary":
                SalaryValid = value > 49999 && value < 100001;
                FieldValidationErrors.SalaryValid = SalaryValid ? '' : ' is invalid';
                break;
            case "CreatedBy":
                CreatedByValid = value > 0 && value < 1001;
                FieldValidationErrors.CreatedByValid = CreatedByValid ? '' : ' is invalid';
                break;

            default:
                break;
        }
        this.setState({
            formErrors: FieldValidationErrors,
            FirstNameValid: FirstNameValid,
            LastNameValid: LastNameValid,
            AgeValid: AgeValid,
            SalaryValid: SalaryValid,
            CreatedByValid: CreatedByValid,

        }, this.validateForm);
    }
    validateForm() {
        this.setState({
            formValid: this.state.FirstNameValid
                && this.state.LastNameValid
                && this.state.AgeValid
                && this.state.SalaryValid
                && this.state.CreatedByValid
        });
    }
    validateUpdateForm() {
        console.log('validate update form ', this.state.firstNameUpdateValid
            && this.state.lastNameUpdateValid
            && this.state.ageUpdateValid
            && this.state.salaryUpdateValid
            && this.state.createdByUpdateValid)
        this.setState({
            updateFormValid: this.state.firstNameUpdateValid
                && this.state.lastNameUpdateValid
                && this.state.ageUpdateValid
                && this.state.salaryUpdateValid
                && this.state.createdByUpdateValid
        });
    }
    componentDidMount() {
        AuthorService.getPagedAuthors(this.state.pageIndex, this.state.pageSize, this.onGetPageAuthorsSuccess, this.onGetPageAuthorsError)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {this.state.displayedAuthors && !this.state.profileClick && (
                    <div className='row'>

                        {/* <div className='col-5'>
                            <div className='authorFormCard'>
                                <h6 className='card-header'>
                                    Create Author
                                </h6>
                                <div className='card-body'>
                                    <FormErrors
                                        formErrors={this.state.formErrors}
                                    />
                                    <AuthorForm
                                        {...this.state}
                                        FirstNameValid={
                                            this.state.FirstNameValid
                                            || !this.state.showErrors
                                        }
                                        LastNameValid={
                                            this.state.LastNameValid
                                            || !this.state.showErrors
                                        }
                                        AgeValid={
                                            this.state.AgeValid
                                            || !this.state.showErrors
                                        }
                                        SalaryValid={
                                            this.state.SalaryValid
                                            || !this.state.showErrors
                                        }
                                        CreatedByValid={
                                            this.state.CreatedByValid
                                            || !this.state.showErrors
                                        }
                                        disabled={!this.state.formValid}
                                        onChange={this.onChange}
                                        onClick={this.onAuthorCreateClick}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className='col-auto'>
                            <div className='row'>
                                <div className='person-card-container card-deck'>

                                        <AuthorCards
                                            onDeleteClicked={this.onDeleteClicked}
                                            authors={this.state.displayedAuthors}
                                            onProfileClick={this.onAuthorProfileClick}
                                            onClick={this.onGetAuthorProfileClick} />

                                </div>
                            </div>
                            <div className='btn-row row'>
                                <PageButtons
                                    onPrevBtnClick={this.onPrevBtnClick}
                                    onNextBtnClick={this.onNextBtnClick}
                                    hasPreviousPage={this.state.hasPreviousPage}
                                    hasNextPage={this.state.hasNextPage}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {this.state.displayedAuthors && this.state.profileClick && (
                    <AuthorProfile
                        blogs={this.state.targetAuthorBlogs}
                        firstName={this.state.firstNameUpdate}
                        lastName={this.state.lastNameUpdate}
                    />
                )}
                {/* {this.state.show && (
                    <AuthorModal
                        {...this.state}
                        onKeyDown={this.onKeyDown}
                        show={this.state.show}
                        onChange={this.onChange}
                        onCloseClick={this.onModalBtnClose}
                        firstNameUpdateValid={
                            this.state.firstNameUpdateValid
                            || !this.state.showErrors
                        }
                        lastNameUpdateValid={
                            this.state.lastNameUpdateValid
                            || !this.state.showErrors
                        }
                        ageUpdateValid={
                            this.state.ageUpdateValid
                            || !this.state.showErrors
                        }
                        salaryUpdateValid={
                            this.state.salaryUpdateValid
                            || !this.state.showErrors
                        }
                        createdByUpdateValid={
                            this.state.createdByUpdateValid
                            || !this.state.showErrors
                        }
                        disabled={!this.state.updateFormValid}
                        onUpdateClick={this.onAuthorUpdateClicked}
                    />
                )
                } */}

            </React.Fragment>
        )
    }
}
export default withRouter(AuthorHome)