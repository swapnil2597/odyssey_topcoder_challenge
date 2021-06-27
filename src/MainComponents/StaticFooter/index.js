import React from 'react'
import "./index.css"

function StaticFooter() {
    return (
        <div className="staticFooter">
            <div className="staticFooter__left">
                <div className="staticFooter__leftTextbox">
                Odyssey Bank Limited. Registered in England and Wales: 04728421. Registration Office: 27-31 Charlotte Street, London W1T 1RP. Correspondence address: PO Box 17484, 87 Chase Side, London N14 5WH.
                <br /><br />
Odyssey Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority. Our main business is the provision of financial services under registration number no. 575105.
<br /><br />
Eligible deposits with Odyssey Bank Limited are protected up to a total of £85,000 by the Financial Services Compensation Scheme, the UK’s deposit guarantee scheme. Any deposits you hold above the protected limit are unlikely to be covered. Further information is available here or visit https://www.fscs.org.uk/
<br /><br />
Click here for free and impartial advice, set up by the government. Odyssey Bank Limited is a member of UK Finance and subscribes to the Standards of Lending Practice published by the Lending Standards Board which covers good practice in relation to loans, overdrafts and other types of lending that we do not currently offer. Further information is available here.
<br /><br />
Calls to 0345 850 5555 (+44 (0)20 3375 6422 from outside the UK) may be recorded for monitoring and training. 
                </div>
                <div className=""></div>
            </div>
            <div className="staticFooter__right"></div>
        </div>
    )
}

export default StaticFooter
