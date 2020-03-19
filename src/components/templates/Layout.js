import React from 'react'
import * as authorService from '../../services/authorService'
import * as loginService from '../../services/loginService'
import NavBar from '../navigation/NavBar'
import ContentRouter from '../navigation/ContentRouter'
import { withRouter } from "react-router-dom";
import authorCards from '../authorCards'
import AuthorCards from '../author/AuthorCards'
import BlogsHome from '../blogs/BlogsHome'
import { Container } from 'reactstrap'


class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            // authors: [],
        }
    }




    onLoginBtnClick = props => {
        console.log('login button clicked...')
        loginService.serverLogin(this.onServerLoginSuccess, this.onServerLoginError)
    }
    onServerLoginSuccess = response => {
        console.log('login success')
        this.setState({
            ...this.state,
            loggedIn: true
        })
        authorService.getPagedAuthors(0, 5,
            this.onPagedAuthorsSuccess, this.onPagedAuthorsError)

    }
    onServerLoginError = err => {
        console.log('login failed')
    }
    onPagedAuthorsSuccess = response => {
        // console.log(response.data.item.pagedItems[0])
        var authorAry = []
        var mapAuthors = response.data.item.pagedItems.map((author, idx) => {
            return (
                authorAry.push(author)
            )
        })
        this.setState({
            authors: authorAry
        })
    }
    onPagedAuthorsError = err => {
        console.log(err)
    }

    componentDidMount() {
        authorService.getPagedAuthors(0, 5,
            this.onPagedAuthorsSuccess, this.onPagedAuthorsError)

    }

    render() {
        // console.log(this.state.authors)
        return (
            <React.Fragment>
                <Container>

                    <div>
                        <NavBar
                            loggedIn={this.state.loggedIn}
                            loginClick={this.onLoginBtnClick} />
                    </div>
                    <div>
                        {/* <BlogsHome /> */}
                        {/* <AuthorCards /> */}
                        {/* <authorCards /> */}
                        {this.state.loggedIn && (

                            <ContentRouter
                                onChange={this.onChange}
                                authors={this.state.authors}
                                authbtnclick={this.onProfileBtnClick} />
                        )}
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
export default withRouter(Layout)