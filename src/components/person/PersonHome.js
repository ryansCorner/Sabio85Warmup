import React from 'react'
import { withRouter } from 'react-router-dom'
import * as personService from '../../services/person/personService'
import PersonCard from './PersonCard'
import { CardDeck, CardColumns } from 'reactstrap'
import PageButtons from '../common/PageButtons'
import PersonForm from './PersonForm'
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
            Title: Title,
            First: First,
            Last: Last,
            Email: Email,
            Gender: Gender,
            Dob: Dob,
            CreatedBy: parseInt(CreatedBy, 10),
            Phone: Phone,
            Cell: Cell,
            Large: Large,
            Medium: Medium,
            Thumbnail: Thumbnail,
            Street: Street,
            City: City,
            State: State,
            PostCode: PostCode,
        }
        personService.insert(payload, this.onCreateSuccess, this.onCreateError)
    }

    onCreateSuccess = resp => {
        console.log('we created a person!', resp)
    }
    onCreateError = err => {
        console.log('we DIDNT Create a person!', err)
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
    onGetAllPersonSuccess = resp => {
        console.log('kitchen sink: ', resp)
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
    componentDidMount() {
        const payload = {
            pageIndex: 0,
            pageSize: this.state.pageSize
        }
        personService.kitchenSinkAll(payload, this.onGetAllPersonSuccess, this.onGetAllPersonError)
    }
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='card person-form-card'>

                                <div className='person-row'>
                                    <PersonForm
                                        onChange={this.onChange}
                                        {...this.state}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className='row'> */}
                    <div className='col-6'>
                        <div className='row row-cols-1 row-cols-md-2'>

                            <PersonCard
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
            </React.Fragment>
        )
    }
}
export default withRouter(PersonHome);