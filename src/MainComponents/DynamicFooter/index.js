import React from 'react'
import { dynamicFooterObj } from './drupalObj'
import "./index.css"

function DynamicFooter() {

    console.log("dyn footer -----> ", dynamicFooterObj)

    return (
        <div className="dynamicFooter">
            {dynamicFooterObj.included.slice(0, 5).map((item) => (

                <div className="dynamicFooter__col">
                    <p className="dynamicFooter__colTitle"> {item.attributes.field_title} </p>

                    <div className="dynamicFooter__colBody">

                        {item.attributes.field_links?.map((link) => (

                            <p className="dynamicFooter__colLink">{link.title} </p>
                        ))}
                    </div>

                </div>

            ))}
        </div>
    )
}

export default DynamicFooter
