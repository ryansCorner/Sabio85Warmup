import React from 'react'

const AuthorProfile = props => {
    console.log('author profile props', props)
    const mappedBlogs = props.blogs.map((blog, idx) => {
        console.log(blog)
        return <div className='col-auto'>
            <div class="card">
                <div class="card-body">
                    <div class="card">
                        <div class="card-body">
                            <div key={idx}>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    })
    return (
        <React.Fragment>
            {props.firstName && (
                <React.Fragment>
                    <div class="card">
                        <div class="card-body">
                            <div class="card">
                                <div class="card-body">
                                    <h1>

                                        {props.firstName} {props.lastName}'s Blog Posts
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>


                        <div>{mappedBlogs}</div>
                    </div>

                </React.Fragment>
            )}
        </React.Fragment>
    )
}
export default AuthorProfile