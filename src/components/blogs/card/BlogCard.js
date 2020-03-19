import React from 'react'

const BlogCard = props => {
    const mappedBlogs = props.blogs.map((blog, idx) => {

        return <div className="blog-card card col-3" >
            <div className="card-body" key={idx}>
                <h6 className="card-title">{blog.title}</h6>
                <p className="card-subtitle mb-2 text-muted">Id of Author: {blog.authorId}</p>
                <p className="card-text d-inline-block col-12 text-truncate">{blog.content}</p>
                {/* <div className="btn-group " role="group" aria-label="Basic example"> */}
                <button type="button" name={blog.id} onClick={props.onBlogClick} className=" btn-sm btn btn-outline-primary">Primary</button>
                <button type="button" className="btn-sm  btn btn-outline-danger">Danger</button>
                {/* </div> */}
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    })
    return (
        <React.Fragment>
            {mappedBlogs}

        </React.Fragment>
    )
}

export default BlogCard