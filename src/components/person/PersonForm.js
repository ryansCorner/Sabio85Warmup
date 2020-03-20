import React from 'react'
import TextInput from '../common/TextInput'

const PersonForm = props => {
    console.log('form props', props)
    return (
        <React.Fragment>
            <form className='person-form'>
                <div class="form-row">
                    <div class="col">
                        <TextInput
                            label="Title"
                            showLabel={props.showLabel}
                            name={props.update ? 'title' : "Title"}
                            type="text"
                            value={props.update ? props.title : props.Title}
                            placeholder="Title"
                            onChange={props.onChange}
                            isValid={props.TitleValid}
                            defaultValue=''
                            hintText="a name is required"
                        />
                    </div><div class="col">
                        <TextInput
                            label="First Name"
                            showLabel={props.showLabel}
                            name={props.update ? 'first' : "First"}
                            type="text"
                            value={props.update ? props.first : props.First}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'last' : "Last"}
                            type="text"
                            value={props.update ? props.last : props.Last}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'email' : "Email"}
                            type="text"
                            value={props.update ? props.email : props.Email}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'gender' : "Gender"}
                            type="text"
                            value={props.update ? props.gender : props.Gender}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'dob' : "Dob"}
                            type="text"
                            value={props.update ? props.dob : props.Dob}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'createdBy' : "CreatedBy"}
                            type="text"
                            readOnly={props.update}
                            value={props.update ? props.createdBy : props.CreatedBy}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'phone' : "Phone"}
                            type="text"
                            value={props.update ? props.phone : props.Phone}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'cell' : "Cell"}
                            type="text"
                            value={props.update ? props.cell : props.Cell}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'large' : "Large"}
                            type="text"
                            value={props.update ? props.large : props.Large}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'medium' : "Medium"}
                            type="text"
                            value={props.update ? props.medium : props.Medium}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'thumbnail' : "Thumbnail"}
                            type="text"
                            value={props.update ? props.thumbnail : props.Thumbnail}
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
                        showLabel={props.showLabel}
                        name={props.update ? 'street' : "Street"}
                        type="text"
                        value={props.update ? props.street : props.Street}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'city' : "City"}
                            type="text"
                            value={props.update ? props.city : props.City}
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
                            showLabel={props.showLabel}
                            name={props.update ? 'state' : "State"}
                            type="text"
                            value={props.update ? props.state : props.State}
                            placeholder="State"
                            onChange={props.onChange}
                            isValid={props.StateValid}
                            defaultValue=''
                            hintText="a name is required"
                        />

                    </div>
                    <div className="form-group col-md-3">
                        <TextInput
                            label="Zip Code"
                            showLabel={props.showLabel}
                            name={props.update ? 'postCode' : "PostCode"}
                            type="text"
                            value={props.update ? props.postCode : props.PostCode}
                            placeholder="Zip Code"
                            onChange={props.onChange}
                            isValid={props.PostCodeValid}
                            defaultValue=''
                            hintText="a name is required"
                        />

                    </div>
                </div>
                {props.update && (
                    <div className=''><button type="button" onClick={props.onUpdateClick} class="btn btn-primary btn-lg btn-block">UPDATE</button></div>
                )}
                {!props.update && (
                    <div className=''><button type="button" onClick={props.onCreate} class="btn btn-primary btn-lg btn-block">SUBMIT</button></div>
                )}
            </form>
        </React.Fragment>
    )
}
export default PersonForm