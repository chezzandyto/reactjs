import React from 'react';


import confLogo from '../images/badge-header.svg';
import "../styles/Badge.css";

class Badge extends React.Component {
    render(){
        return (
        <div className="badge">
            <div className="badge_header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="badge_section-name">
                <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>Richard <br/> Kaufam</h1>
            </div>
            <div className="badge_section-info" >
                <h3>Frontend Engineer</h3>
                <div>@sparragus</div>
            </div>
            <div className= "badge_footer"> #platziconf</div>
        </div>)
    }
}

export default Badge;