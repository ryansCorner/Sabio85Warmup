import React from 'react'
import { Route } from 'react-router-dom'
import authorCards from '../authorCards'
import { withRouter } from "react-router-dom"
import Home from '../../home'
import AuthorCards from '../author/AuthorCards'
// import AuthorCreate from '../author/create/AuthorHome'
import AuthorHome from '../author/create/AuthorHome'
import BlogsHome from '../blogs/BlogsHome'
import PersonHome from '../person/PersonHome'


const ContentRouter = props => {
    var authors = props.authors
    var onChange = props.onChange
    var authbtnclick = props.authbtnclick
    return (
        <React.Fragment>
            <div className='container-fluid content-router'>
                {/* <Route path='/home' component={Home} /> */}
                <Route exact path='/blogsHome'
                    render={props => <BlogsHome {...props} />} />
                <Route exact path='/personHome'
                    render={props => <PersonHome {...props} />} />
                {/* <Route path='/authorHome' component='{AuthorCreate}' /> */}
                <Route exact path='/authorHome'
                    // component={authorCards}
                    render={props => <AuthorHome {...props} authors={authors} />} />

            </div>
        </React.Fragment>
    )
}
export default ContentRouter