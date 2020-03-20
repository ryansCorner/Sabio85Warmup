import React from 'react'
import { withRouter } from 'react-router-dom'
import * as personService from '../../services/person/personService'
import PersonCard from './PersonCard'
import { CardDeck, CardColumns } from 'reactstrap'
import PageButtons from '../common/PageButtons'
import PersonForm from './PersonForm'
import PersonProfileCard from './profile/PersonProfileCard'
class PersonHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            First: '',
            Last: '',
            Email: '',
            Gender: '',
            Dob: '',
            CreatedBy: '',
            Phone: '',
            Cell: '',
            Large: '',
            Medium: '',
            Thumbnail: '',
            Street: '',
            City: '',
            State: '',
            PostCode: '',
            formErrors: {
                Title: '',
                First: '',
                Last: '',
                Email: '',
                Gender: '',
                Dob: '',
                CreatedBy: '',
                Phone: '',
                Cell: '',
                Large: '',
                Medium: '',
                Thumbnail: '',
                Street: '',
                City: '',
                State: '',
                PostCode: '',
            },
            pageSize: 6,
            pageIndex: 0,
            totalCount: 0,
            totalPages: 0,
            displayedPeople: [],
            hasPreviousPage: false,
            hasNextPage: false,
            showProfileView: false,
        }

    }
    onChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        console.log(key, val)
        this.setState({
            [key]: val,
        },
            // this.state.show ? () => this.validateUpdateField(key, val) : () => this.validateField(key, val)
        )

    }
    onNextBtnClick = props => {
        var pageIndex = this.state.pageIndex + 1
        const payload = {
            pageIndex: pageIndex,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    onPrevBtnClick = props => {
        var pageIndex = this.state.pageIndex - 1
        const payload = {
            pageIndex: pageIndex,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    onPersonCreate = evt => {
        const {
            Title,
            First,
            Last,
            Email,
            Gender,
            Dob,
            CreatedBy,
            Phone,
            Cell,
            Large,
            Medium,
            Thumbnail,
            Street,
            City,
            State,
            PostCode,
        } = this.state;
        const payload = {
            Email: Email,
            Gender: Gender,
            Dob: Dob,
            registered: 'null',
            Phone: Phone,
            Cell: Cell,
            Nat: 'null',
            HasBeenCloned: false,
            CreatedBy: parseInt(CreatedBy, 10),
            Title: Title,
            First: First,
            Last: Last,
            Large: Large,
            Medium: Medium,
            Thumbnail: Thumbnail,
            Street: Street,
            City: City,
            State: State,
            PostCode: parseInt(PostCode, 10),
        }
        personService.insert(payload, this.onCreateSuccess, this.onCreateError)
    }
    onCreateSuccess = resp => {
        console.log('we created a person!', resp)
        const payload = {
            pageIndex: 0,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    onCreateError = err => {
        console.log('we DIDNT Create a person!', err)
    }
    onPersonClick = evt => {
        let target = evt.target.name
        personService.kitchenSinkId(target, this.onPersonClickSuccess, this.onPersonClickError)
    }

    onPersonClickSuccess = resp => {
        console.log('person Click success', resp)
        const updatedPerson = delete resp.__proto__
        this.setState({
            ...this.state,
            showProfileView: true,
            email: resp.email,
            gender: resp.gender,
            dob: resp.dob,
            registered: resp.registered,
            phone: resp.phone,
            cell: resp.cell,
            nat: resp.nat,
            hasBeenCloned: resp.hasBeenCloned,
            createdBy: resp.createdBy,
            id: resp.id,
            title: resp.title,
            first: resp.first,
            last: resp.last,
            large: resp.large,
            medium: resp.medium,
            thumbnail: resp.thumbnail,
            street: resp.street,
            city: resp.city,
            state: resp.state,
            postCode: resp.postCode
        })
    }
    onPersonClickError = err => {
        console.log("person click err", err)
    }

    onUpdateClick = evt => {
        console.log('begin update', this.state.id)

        const payload = {
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            registered: 'null',
            phone: this.state.phone,
            cell: this.state.cell,
            nat: 'null',
            hasBeenCloned: this.state.hasBeenCloned,
            title: this.state.title,
            first: this.state.first,
            last: this.state.last,
            large: this.state.large,
            medium: this.state.medium,
            thumbnail: this.state.thumbnail,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            postCode: parseInt(this.state.postCode, 10)
        }
        personService.updateFull(this.state.id, payload, this.updateFullSuccess, this.updateFullError)
    }

    updateFullSuccess = resp => {
        console.log('we updated a person', resp)
        const payload = {
            pageIndex: 0,
            pageSize: this.state.pageSize
        }
        this.setState({
            showProfileView: false,
        })
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }

    onGetAllPersonSuccess = resp => {
        console.log('all person success', resp)
        this.setState({
            ...this.state,
            pageIndex: resp.pageIndex,
            pageSize: resp.pageSize,
            totalCount: resp.totalCount,
            totalPages: resp.totalPages,
            displayedPeople: resp.pagedItems,
            hasPreviousPage: resp.hasPreviousPage,
            hasNextPage: resp.hasNextPage

        })
    }
    onGetAllPersonError = err => {
        console.log('kitchen sink ERROR: ', err)
    }

    onDeleteClick = evt => {
        let id = evt.target.name
        console.log('delete click ', id)
        personService.remove(id, this.onRemoveSuccess, this.onRemoveError)
    }
    onRemoveSuccess = resp => {
        console.log('Delete Success')
        const payload = {
            pageIndex: 0,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    onRemoveError = resp => {
        console.log("remove failed")
    }

    componentDidMount() {
        const payload = {
            pageIndex: 0,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {!this.state.showProfileView && (

                    <div className='row'>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='card person-form-card'>

                                    <div className='person-row'>
                                        <PersonForm
                                            showLabel='true'
                                            onCreate={this.onPersonCreate}
                                            onChange={this.onChange}
                                            {...this.state}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <div className='row'> */}

                        <div className='col-8'>
                            <div className='row row-cols-3 row-cols-md-3'>

                                <PersonCard
                                    onDeleteClick={this.onDeleteClick}
                                    onPersonClick={this.onPersonClick}
                                    people={this.state.displayedPeople}
                                />
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
                {this.state.showProfileView && (
                    <div className='row'>
                        <div className='col-5 offset-1'>
                            <div className='row'>
                                <div className='card person-form-card'>

                                    <div className='person-row'>
                                        <PersonForm
                                            // {...this.state.updatePersonObj}
                                            update='true'
                                            onUpdateClick={this.onUpdateClick}
                                            onChange={this.onChange}
                                            {...this.state}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <PersonProfileCard
                                {...this.state}

                            // updatedPersonObj={this.state.updatePersonObj}
                            />
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
export default withRouter(PersonHome);