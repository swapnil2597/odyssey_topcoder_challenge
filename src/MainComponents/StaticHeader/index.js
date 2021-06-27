import React from 'react'
import "./index.css"

import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

function StaticHeader() {
    return (
        <div className="staticHeader" >
            <div className="staticHeader__menu">
                <div className="staticHeader__menuItem" >
                    <span className="staticHeader__menuItemLabel" >Business</span>
                </div>
                <div className="staticHeader__menuItem" >
                    <span className="staticHeader__menuItemLabel" >Private Banking</span>
                </div>
                <div className="staticHeader__menuItem" >
                    <span className="staticHeader__menuItemLabel" >Personal</span>
                </div>
                <div className="staticHeader__menuItem active" >
                    <span className="staticHeader__menuItemLabel" >About Us</span>
                    <div className="menuItem__bottomline" ></div>
                </div>
                <div className="staticHeader__menuItem" >
                    <span className="staticHeader__menuItemLabel" >Help & FAQs</span>
                </div>
            </div>
            <div className="staticHeader__right">
                <YoutubeSearchedForIcon />
                <div className="staticHeader__rightLogin"><div>Login</div></div>
            </div>
        </div>
    )
}

export default StaticHeader
