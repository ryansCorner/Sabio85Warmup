import React from 'react'

const TextArea = props => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.name}>
                {props.label}:{" "}
            </label>
            <textarea
                className={`form-control ${props.isValid ? "" : "is-invalid"}`}
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                index={props.index}
                id={props.id}
                onChange={props.onChange}
                disabled={props.disabled}
            />
        </div>
    )
}
export default TextArea;