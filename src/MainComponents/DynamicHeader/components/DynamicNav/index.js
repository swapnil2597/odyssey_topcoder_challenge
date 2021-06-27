import React from 'react'
import { dynamicNavObj } from '../../drupalObj'
import "./index.css"


function DynamicNavlist() {

    console.log("dynamic menu -----> ", dynamicNavObj)

    return (
        <div className="dynamicNavlist">
            {dynamicNavObj.data.map((item) => (
            <div className="dynamicNavlist__item">{item.attributes.title}</div>
            ))}
        </div>
    )
}

export default DynamicNavlist
