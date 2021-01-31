import React from 'react'
import Octicon from 'react-component-octicons';
function Subnavbar() {
    return (
        <div className="sub-navbar">
            <div className="child-subnavbar">
             <div className="heading-one">octocat / <span className="heading-two">hello-world</span></div>
             <div className="subnavbar-button">
             <div className="btn-icons">
                <button className="btn btn-secondary btn-sm"><Octicon name="eye" className="btn-octicon-icon" />&nbsp;Watch</button><button className="btn btn-default btn-sm">10k</button>
                </div>
                &nbsp;
                &nbsp;
             <div className="btn-icons">

                <button className="btn btn-secondary btn-sm "><Octicon name="star" className="btn-octicon-icon" />&nbsp;Unstar</button><button className="btn btn-default btn-sm">1.1k</button>
               </div> &nbsp;
                &nbsp;
             <div className="btn-icons">

                <button className="btn btn-secondary btn-sm "><Octicon name="repo-forked" className="btn-octicon-icon"/>&nbsp;Fork</button><button className="btn btn-default btn-sm">1.5k</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Subnavbar
