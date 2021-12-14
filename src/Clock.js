import moment from 'moment-timezone'
import React from 'react'
import './Clock.css'

const Clock = ({ timezone, datetime, utc_offset }) => {

    return (
        <div className="Main-clock">
            <p className="time">{moment.tz(datetime, timezone).format('hh:mm:ss')}</p>
            <div className="timezone-container">
                <p className="timezone">{timezone}</p>
                <p>{utc_offset} - Sunday, 6 Dec 10</p>
            </div>
        </div>
    )
}

export default Clock
