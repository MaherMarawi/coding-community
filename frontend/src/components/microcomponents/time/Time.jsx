import React from 'react'
import moment from 'moment';
// import 'moment-timezone';

function Time({time}) {
    let date = new Date()
    let h = date.getHours()
    return (
        <div>
            {moment(time).startOf(h).fromNow()}
        </div>
    )
}

export default Time

