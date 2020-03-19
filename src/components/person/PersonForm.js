import React from 'react'
import TextInput from '../common/TextInput'

const PersonForm = props => {
    return (
        <React.Fragment>
            <form className='person-form'>
                <div class="form-row">
                    <div class="col">
                        <TextInput
                            label="Title"
                            name="Title"
                            type="text"
                            value={props.Title}
                            placeholder="Title"
                            onChange={props.onChange}
                            isValid={props.TitleValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div><div class="col">
                        <TextInput
                            label="First Name"
                            name="First"
                            type="text"
                            value={props.First}
                            placeholder="First Name"
                            onChange={props.onChange}
                            isValid={props.FirstValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="col">
                        <TextInput
                            label="Last Name"
                            name="Last"
                            type="text"
                            value={props.Last}
                            placeholder="Last Name"
                            onChange={props.onChange}
                            isValid={props.LastValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <TextInput
                            label="Email"
                            name="Email"
                            type="text"
                            value={props.Email}
                            placeholder="Email"
                            onChange={props.onChange}
                            isValid={props.EmailValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-3">
                        <TextInput
                            label="Gender"
                            name="Gender"
                            type="text"
                            value={props.Gender}
                            placeholder="Gender"
                            onChange={props.onChange}
                            isValid={props.GenderValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-3">
                        <TextInput
                            label="Date Of Birth"
                            name="Dob"
                            type="text"
                            value={props.Dob}
                            placeholder="12/31/1999"
                            onChange={props.onChange}
                            isValid={props.DobValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Created By"
                            name="CreatedBy"
                            type="text"
                            value={props.CreatedBy}
                            placeholder="1-1000"
                            onChange={props.onChange}
                            isValid={props.CreatedByValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Phone Number"
                            name="Phone"
                            type="text"
                            value={props.Phone}
                            placeholder="1-281-330-8004"
                            onChange={props.onChange}
                            isValid={props.PhoneValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Cell Number"
                            name="Cell"
                            type="text"
                            value={props.Cell}
                            placeholder="1-678-999-8212"
                            onChange={props.onChange}
                            isValid={props.CellValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Large"
                            name="Large"
                            type="text"
                            value={props.Large}
                            placeholder="Large"
                            onChange={props.onChange}
                            isValid={props.LargeValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Medium"
                            name="Medium"
                            type="text"
                            value={props.Medium}
                            placeholder="Medium"
                            onChange={props.onChange}
                            isValid={props.MediumValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <TextInput
                            label="Thumbnail"
                            name="Thumbnail"
                            type="text"
                            value={props.Thumbnail}
                            placeholder="Thumbnail"
                            onChange={props.onChange}
                            isValid={props.ThumbnailValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <TextInput
                        label="Street Address"
                        name="Street"
                        type="text"
                        value={props.Street}
                        placeholder="Street Address"
                        onChange={props.onChange}
                        isValid={props.StreetValid}
                        defaultValue=''
                        hintText="a name is required"
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <TextInput
                            label="City"
                            name="City"
                            type="text"
                            value={props.City}
                            placeholder="City"
                            onChange={props.onChange}
                            isValid={props.CityValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <TextInput
                            label="State"
                            name="State"
                            type="text"
                            value={props.State}
                            placeholder="State"
                            onChange={props.onChange}
                            isValid={props.StateValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                        {/* <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select> */}
                    </div>
                    <div className="form-group col-md-3">
                        <TextInput
                            label="Zip Code"
                            name="PostalCode"
                            type="text"
                            value={props.PostalCode}
                            placeholder="Zip Code"
                            onChange={props.onChange}
                            isValid={props.PostalCodeValid}
                            defaultValue=''
                            hintText="a name is required"
                        />

                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}
export default PersonForm