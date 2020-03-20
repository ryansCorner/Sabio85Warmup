import React from 'react'
import { withRouter } from 'react-router'
import * as blogService from '../../services/blog/blogService'
import * as authorService from '../../services/authorService'
import BlogCard from './card/BlogCard'
import PageButtons from '../common/PageButtons'
import BlogForm from './form/BlogForm'
import FormErrors from '../common/FormErrors'

class BlogsHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Content: '',
            AuthorId: null,
            formErrors: {
                Title: '',
                Content: '',
                AuthorId: '',
            },
            TitleValid: '',
            ContentValid: '',
            AuthorIdValid: '',
            formValid: false,
            showErrors: false,
            pageIndex: 0,
            pageSize: 9,
            displayedBlogs: [],
            hasNextPage: false,
            hasPreviousPage: false,
            totalPages: '',
            show: false,
        }
        this.baseState = this.state
    }

    onCreateClicked = props => {
        if (this.state.formValid) {
            const {
                Title,
                Content,
                AuthorId,

            } = this.state;
            const payload = {
                Title: Title,
                Content: Content,
                AuthorId: parseInt(AuthorId, 10)
            }
            const pagePayload = {
                pageIndex: 0,
                pageSize: 7
            }

            blogService.create(payload, this.onCreateSuccess, this.onCreateError)
        }
    }
    onDeleteBlogClick = evt => {
        const target = evt.target.name
        blogService.remove(target, this.onRemoveSuccess, this.onRemoveError)
    }
    onRemoveSuccess = resp => {
        console.log('target removed', resp)
        const payload = {
            pageIndex: this.state.pageIndex,
            pageSize: this.state.pageSize
        }
        blogService.getAll(payload, this.onGetBlogsSuccess, this.onGetBlogsError)
    }
    onCreateSuccess = resp => {
        console.log('WE CREATED A NEW BLOG', resp)
        const pagePayload = {
            pageIndex: 0,
            pageSize: 7
        }
        this.setState({

        })
        blogService.getAll(pagePayload, this.onGetBlogsSuccess, this.onGetBlogsError)

    }
    onCreateError = err => {
        console.log("we ran into an are while creating our blog", err)
    }

    onChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val,
        }, () => this.validateField(key, val)
        )
    }

    onNextBtnClick = props => {
        var pageIndex = this.state.pageIndex + 1
        var pageSize = this.state.pageSize
        var payload = {
            pageIndex: pageIndex,
            pageSize: pageSize
        }
        blogService.getAll(payload, this.onGetBlogsSuccess, this.onGetBlogsError)
    }

    onPrevBtnClick = props => {
        var pageIndex = this.state.pageIndex - 1
        var pageSize = this.state.pageSize
        var payload = {
            pageIndex: pageIndex,
            pageSize: pageSize
        }
        blogService.getAll(payload, this.onGetBlogsSuccess, this.onGetBlogsError)
    }

    onGetBlogsSuccess = resp => {
        console.log('get blogs success', resp)
        var pageData = resp.data.item
        this.setState({
            pageIndex: pageData.pageIndex,
            pageSize: pageData.pageSize,
            totalPages: pageData.totalCount,
            hasNextPage: pageData.hasNextPage,
            hasPreviousPage: pageData.hasPreviousPage,
            displayedBlogs: pageData.pagedItems
        })
    }
    onGetBlogsError = err => {
        console.log('get blogs ERROR: ', err)
    }

    onGetBlogById = evt => {
        console.log('evt.target.name', evt.target.name)
        const id = evt.target.name
        const authId = evt.target.id
        console.log('evt.target.id', evt.target.id)
        blogService.getById(id, this.getByIdSuccess, this.getByIdError)
        authorService.getBlogsForAuthor(authId, this.onBlogAuthSuccess, this.onBlogAuthError)

    }
    onBlogAuthSuccess = resp => {
        console.log("all blogs written by this author: ", resp)
    }
    onBlogAuthError = err => {
        console.log('could not get all blogs written by this author : ', err)
    }

    getByIdSuccess = resp => {
        console.log('got blog by id : ', resp)
    }
    getByIdError = err => {
        console.log('an error occured whiled getting by id: ', err)
    }
    validateField = (fieldName, val) => {
        console.log(fieldName, val)
        let FieldValidationErrors = this.state.formErrors;
        let TitleValid = this.state.TitleValid;
        let ContentValid = this.state.ContentValid;
        let AuthorIdValid = this.state.AuthorIdValid

        switch (fieldName) {
            case 'Title':
                TitleValid = val.length > 1 && val.length < 50;
                FieldValidationErrors.TitleValid = TitleValid ? '' : ' is invalid';
                break;
            case 'Content':
                ContentValid = val.length > 5 && val.length < 300;
                FieldValidationErrors.ContentValid = ContentValid ? '' : ' is invalid';
                break;
            case 'AuthorId':
                AuthorIdValid = val > 0 && val < 1000;
                FieldValidationErrors.AuthorIdValid = AuthorIdValid ? '' : ' is invalid';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: FieldValidationErrors,
            TitleValid: TitleValid,
            ContentValid: ContentValid,
            AuthorIdValid: AuthorIdValid
        }, this.validateForm)
    }
    validateForm() {
        this.setState({
            formValid: this.state.TitleValid
                && this.state.ContentValid
                && this.state.AuthorIdValid
        })
    }

    componentDidMount() {
        var payload = {
            pageIndex: this.state.pageIndex,
            pageSize: this.state.pageSize
        }
        blogService.getAll(payload, this.onGetBlogsSuccess, this.onGetBlogsError)
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-5'>
                        <div className='person-form-card'>
                            <h6 className='card-header'>
                                Create Blog
                            </h6>
                            <div className='card-body'>
                                <FormErrors
                                    formErrors={this.state.formErrors}
                                />
                                <BlogForm
                                    {...this.state}
                                    TitleValid={
                                        this.state.TitleValid
                                        || !this.state.showErrors
                                    }
                                    ContentValid={
                                        this.state.ContentValid
                                        || !this.state.showErrors
                                    }
                                    AuthorIdValid={
                                        this.state.AuthorIdValid
                                        || !this.state.showErrors
                                    }
                                    disabled={!this.state.formValid}
                                    onChange={this.onChange}
                                    onClick={this.onCreateClicked}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='row row-cols-3 row-cols-md-3'>
                            <BlogCard
                                onBlogClick={this.onGetBlogById}
                                blogs={this.state.displayedBlogs}
                                onDeleteClick={this.onDeleteBlogClick}
                            />
                        </div>
                        <div className='btn-row row'>
                            <PageButtons
                                onPrevBtnClick={this.onPrevBtnClick}
                                onNextBtnClick={this.onNextBtnClick}
                                hasNextPage={this.state.hasNextPage}
                                hasPreviousPage={this.state.hasPreviousPage}

                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(BlogsHome)