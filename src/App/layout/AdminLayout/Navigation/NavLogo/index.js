import React from 'react';
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";
import avatar1 from '../../../../../assets/images/user/avatar-1.jpg';



const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={DEMO.BLANK_LINK} className="b-brand">
                    <div className="b-bg">
                        {/* <i className="feather icon-trending-up" /> */}
                        <a href={DEMO.BLANK_LINK}>
                            <img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/>
                        </a>

                    </div>
                    <span className="b-title">ĐH Nông Lâm</span>
                 </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
