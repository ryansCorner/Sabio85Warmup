import React from 'react'

const TextInput = props => {
    return (
        <div className="form-group" htmlFor={props.name}>
            {props.showLabel && (
                <label className="form-label" htmlFor={props.name}>
                    {props.label}
                </label>
            )}
            <input
                readOnly={props.readOnly}
                index={props.index}
                className={`form-control ${props.isValid ? "" : "is-invalid"}`}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            // defaultValue={props.defaultValue}
            />
            {/* <div className="invalid-feedback">{props.hintText}</div> */}
        </div>
    )
}
export default TextInput;