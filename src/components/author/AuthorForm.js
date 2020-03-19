import React from 'react'
import TextInput from '../common/TextInput'

// {
//     "FirstName": "string",
//     "LastName": "string",
//     "age": 0,
//     "salary": 0
//   }

const AuthorForm = props => {
    console.log('author form', props)
    return (
        <React.Fragment>
            <form>
                <TextInput
                    label="First Name"
                    name="FirstName"
                    type="text"
                    value={props.FirstName}
                    placeholder="First Name"
                    onChange={props.onChange}
                    isValid={props.FirstNameValid}
                    defaultValue=''
                    hintText="a name is required"
                // disabled='false'
                />
                <TextInput
                    label="Last Name"
                    name="LastName"
                    type="text"
                    value={props.LastName}
                    placeholder="Last Name"
                    // disabled='false'
                    hintText="a name is required"
                    defaultValue=''
                    isValid={props.LastNameValid}
                    onChange={props.onChange}
                />
                <TextInput
                    label="Age"
                    name="Age"
                    type="number"
                    hintText="Must be between 21 and 100"
                    value={props.Age}
                    placeholder="21-100"
                    onChange={props.onChange}
                    isValid={props.AgeValid}
                    defaultValue=''
                // disabled='false'
                />
                <TextInput
                    label="Salary"
                    name="Salary"
                    type="number"
                    value={props.Salary}
                    hintText='Must be between $50,000 - $100,000'
                    placeholder="$50,000 - $100,000"
                    onChange={props.onChange}
                    isValid={props.SalaryValid}
                    defaultValue=''
                // disabled='false'
                />
                <TextInput
                    label="CreatedBy"
                    name="CreatedBy"
                    type="number"
                    hintText="must be a number between 1 - 1,000"
                    value={props.CreatedBy}
                    placeholder="1 - 1,000"
                    onChange={props.onChange}
                    isValid={props.CreatedByValid}
                    defaultValue=''
                // disabled='false'
                />
                <button type="button" className="btn btn-success" disabled={props.disabled} onClick={props.onClick}>Success</button>

            </form>
        </React.Fragment>
    )
}
export default AuthorForm