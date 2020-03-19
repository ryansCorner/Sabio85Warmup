import React from 'react'
import TextInput from '../common/TextInput'

// {
//     "FirstName": "string",
//     "LastName": "string",
//     "age": 0,
//     "salary": 0
//   }

const AuthorUpdateForm = props => {
    return (
        <React.Fragment>
            <form>
                <TextInput
                    label="First Name"
                    name="firstNameUpdate"
                    type="text"
                    value={props.firstNameUpdate}
                    placeholder="First Name"
                    onChange={props.onChange}
                    isValid={props.firstNameUpdateValid}
                    defaultValue=''
                    hintText="a name is required"
                // disabled='false'
                />
                <TextInput
                    label="Last Name"
                    name="lastNameUpdate"
                    type="text"
                    value={props.lastNameUpdate}
                    placeholder="Last Name"
                    // disabled='false'
                    hintText="a name is required"
                    defaultValue=''
                    isValid={props.lastNameUpdateValid}
                    onChange={props.onChange}
                />
                <TextInput
                    label="Age"
                    name="ageUpdate"
                    type="number"
                    hintText="Must be between 21 and 100"
                    value={props.ageUpdate}
                    placeholder="21-100"
                    onChange={props.onChange}
                    isValid={props.ageUpdateValid}
                    defaultValue=''
                // disabled='false'
                />
                <TextInput
                    label="Salary"
                    name="salaryUpdate"
                    type="number"
                    value={props.salaryUpdate}
                    hintText='Must be between $50,000 - $100,000'
                    placeholder="$50,000 - $100,000"
                    onChange={props.onChange}
                    isValid={props.salaryUpdateValid}
                    defaultValue=''
                // disabled='false'
                />
                <TextInput
                    label="CreatedBy"
                    name="createdByUpdate"
                    type="number"
                    hintText="must be a number between 1 - 1,000"
                    value={props.createdByUpdate}
                    placeholder="1 - 1,000"
                    onChange={props.onChange}
                    isValid={props.createdByUpdateValid}
                    defaultValue=''
                // disabled='false'
                />
                <button type="button" className="btn btn-success" disabled={props.disabled} onClick={props.onClick}>Success</button>

            </form>
        </React.Fragment>
    )
}
export default AuthorUpdateForm