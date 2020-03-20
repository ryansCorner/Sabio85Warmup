import React from 'react'

const BlogCard = props => {
    const mappedBlogs = props.blogs.map((blog, idx) => {
        return <div className='col mb-6'>
            <div className="blog-card card mb-4" >
                <div className="card-body" key={idx}>
                    <h6 className="card-title">{blog.title}</h6>
                    <p className="card-subtitle mb-2 text-muted">Id of Author: {blog.authorId}</p>
                    <p className="card-text d-inline-block col-12 text-truncate">{blog.content}</p>
                    {/* <div className="btn-group " role="group" aria-label="Basic example"> */}
                    <button type="button" name={blog.id}
                        onClick={props.onBlogClick} className=" btn-sm btn btn-outline-primary">
                        Edit
                    </button>
                    <button type="button" name={blog.id} id={blog.authorId}
                        onClick={props.onDeleteClick} className="btn-sm  btn btn-outline-danger">
                        Delete
                    </button>
                    {/* </div> */}
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
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