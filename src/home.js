import React from 'react'
import * as authorService from './services/authorService'
import * as loginService from './services/loginService'
import NavBar from './components/navigation/NavBar'
import ContentRouter from './components/navigation/ContentRouter'
import authorCards from './components/authorCards'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            authors: '',
        }
    }
    onLoginBtnClick = props => {
        loginService.serverLogin(this.onServerLoginSuccess, this.onServerLoginError)

    }

    onServerLoginSuccess = response => {

        console.log(response)
        this.setState({
            ...this.state,
            loggedIn: true
        }, console.log(this.state.loggedIn))
    }
    onServerLoginError = err => {
        console.log(err)
    }
    onPingSuccess = response => {
        console.log(response)
    }
    onPingError = err => {
        console.log(err)
    }
    onAuthorsSuccess = response => {
        console.log(response.data.item.pagedItems[0])

        this.setState({
            // authors: authorAry
        })
    }
    onAuthorsError = err => {
        console.log(err)

    }
    onPagedAuthorsSuccess = response => {
        console.log(response.data.item.pagedItems[0])

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
    onGetAuthorByIdSuccess = response => {
        console.log(response.data.item.pagedItems[0])
        this.setState({
            data: response
        })
    }
    onGetAuthorByIdSuccess = err => {
        console.log(err)

    }
    componentDidMount() {
        // loginService.serverLogin(this.onServerLoginSuccess, this.onServerLoginError)
        loginService.getPing(this.onPingSuccess, this.onPingError)
        authorService.getAllAuthors(this.onAuthorsSuccess, this.onAuthorsError)
        authorService.getPagedAuthors(0, 20, this.onPagedAuthorsSuccess, this.onPagedAuthorsError)
        authorService.getIdAuthors(13, this.onGetAuthorByIdSuccess, this.onGetAuthorByIdError)

    }

    render() {
        // console.log(this.state.authors)
        return (
            <React.Fragment>
                <NavBar
                    onLoginBtnClick={this.onLoginBtnClick} />
                {/* {this.state.loggedIn && (
                    // <h1>this is show only when logged in</h1>
                    <ContentRouter authors={this.state.authors} />
                )} */}
                <authorCards authors={this.state.authors} />
                {/* <div className="card" style="width:400px">
                    <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{author.FirstName} {author.LastName}</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div> */}
                {/* <p>{this.state.data.items[10].FirstName}</p> */}
            </React.Fragment>
        )

    }
}
export default Home
