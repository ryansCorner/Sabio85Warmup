import React from 'react'
import TextInput from '../../common/TextInput'
import TextArea from '../../common/TextArea'


// @Title NVARCHAR(50),
// 		@Content NVARCHAR(MAX),
// 		@AuthorId INT
const BlogForm = props => {
    console.log(props.isValid)
    return (
        <React.Fragment>
            <form>
                <TextInput
                    label='Title'
                    name='Title'
                    type='text'
                    value={props.Title}
                    placeHolder='Title...'
                    onChange={props.onChange}
                    isValid={props.TitleValid}
                    hintText='a title is required'
                />
                <TextArea
                    label='Content'
                    name='Content'
                    type='text'
                    value={props.Content}
                    placeHolder='Content...'
                    onChange={props.onChange}
                    isValid={props.ContentValid}
                    hintText='a Content is required'
                />
                <TextInput
                    label='AuthorId'
                    name='AuthorId'
                    type='text'
                    value={props.AuthorId}
                    placeHolder='AuthorId...'
                    onChange={props.onChange}
                    isValid={props.AuthorIdValid}
                    hintText='a AuthorId is required'
                />
                <button type="button" class="btn btn-success" onClick={props.onClick} disabled={props.disabled} onClick={props.onClick}>Success</button>

            </form>
        </React.Fragment>
    )
}
export default BlogForm