import React from 'react'
import Moment from 'react-moment';
// import 'moment-timezone';

function Time({children}) {
    return (
        <div>
            <Moment format="YYYY/MM/DD">
                {children}
            </Moment>
        </div>
    )
}

export default Time

