import React from 'react'
const PageButtons = props => {
    return (
        <React.Fragment>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={props.onPrevBtnClick} disabled={!props.hasPreviousPage}>Left</button>
                {/* <button type="button" className="btn btn-secondary">Middle</button> */}
                <button type="button" className="btn btn-secondary" onClick={props.onNextBtnClick} disabled={!props.hasNextPage}>Right</button>
            </div>
        </React.Fragment>
    )
}
export default PageButtons