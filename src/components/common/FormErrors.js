import React from 'react'

const FormErrors = ({ formErrors }) => {
    return (
        <div className="formErrors">
            {Object.keys(formErrors).map((fieldName, idx) => {
                if (formErrors[fieldName].length > 0) {
                    return (
                        <p key={idx}>{fieldName} {formErrors[fieldName]}</p>
                    )
                } else {
                    return ""
                }
            })}
        </div>
    )
}
export default FormErrors