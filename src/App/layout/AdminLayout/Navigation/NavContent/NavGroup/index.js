import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from "../../../../../../hoc/_Aux";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';

const navGroup = (props) => {
    let navItems = '';
    const { user } = props.auth
    let roles = []
    
    if (user?.roles) {
        roles = user.roles.map((e, index) => e.id)
    }
    if (props.group.children) {
        const groups = props.group.children;
        navItems = Object.keys(groups).map(item => {
            item = groups[item];
            if(item.role == 'ALL' || roles.includes(item.role)){
                switch (item.type) {
                    case 'collapse':
                        return <NavCollapse key={item.id} collapse={item} type="main" />;
                    case 'item':
                        return <NavItem layout={props.layout} key={item.id} item={item} />;
                    default:
                        return false;
                }
            }else{
                return false;
            }
        });
    }

    return (
        <Aux>
            <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li>
            {navItems}
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
    }
};


export default connect(mapStateToProps)(navGroup);
