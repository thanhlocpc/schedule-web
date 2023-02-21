import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';

import NavSearch from './NavSearch';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../redux/common/constant";
import * as actionTypes from "../../../../../redux/common/actions";

class NavLeft extends Component {

    render() {
        let iconFullScreen = ['feather'];
        iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }


        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    <li><a href={DEMO.BLANK_LINK} className="full-screen" onClick={this.props.onFullScreen}><i className={iconFullScreen.join(' ')} /></a></li>
                    <li className={navItemClass.join(' ')}>
                        <Dropdown alignRight={dropdownRightAlign} color='black'>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                Chức năng
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu>
                                    <li><a className="dropdown-item" href={"/schedule"}>Xem lịch thi</a></li>
                                    <li><a className="dropdown-item" href={"time-table"}>Xem thời khóa biểu</a></li>
                                    <li><a className="dropdown-item" href={"/score-table"}>Xem điểm</a></li>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown>
                    </li>
                    <li className="nav-item"><NavSearch/></li>
                </ul>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.common.isFullScreen,
        rtlLayout: state.common.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
