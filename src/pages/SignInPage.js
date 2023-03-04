import React from 'react';
import { NavLink, } from 'react-router-dom';

import '../assets/scss/style.scss';
import Aux from "../hoc/_Aux";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";
import { login } from '../redux/auth/actions';
import { connect } from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";
import { NotificationManager } from 'react-notifications';

class SignUp1 extends React.Component {
    state = {
        username: '',
        password: '',
        messageEmail: ''
    }

    componentDidMount() {
        if (this.props.auth.user) {
            window.location.href = "/"
        }
    }
    componentDidUpdate() {
        if (this.props.auth.user) {
            window.location.href = "/"
        }
    }
    componentWillUnmount() {

    }
    render() {

        const login = () => {
            if(!this.state.messageEmail && this.state.username && this.state.password){
                this.props.login(this.state.username, this.state.password)
            }else{
                NotificationManager.error("Vui lòng nhập đầy đủ thông tin");
            }
        }

        const override = {
            display: "block",
            margin: "0 auto",
            borderColor: "white",
            left: -12
        };

        const onChangeEmail = (e) => {
            this.setState({ username: e.target.value })
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                this.setState({ messageEmail: "" })
            } else {
                this.setState({ messageEmail: "Email không hợp lệ." })
            }
        }

        return (
            <Aux>
                {/* <Breadcrumb /> */}
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon" />
                                </div>
                                <h3 className="mb-4">Đăng nhập</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control w-100" placeholder="Email"
                                        onInput={(e) => { onChangeEmail(e) }} />
                                    <p className="text-danger mb-0">
                                        {this.state.messageEmail}
                                    </p>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password"
                                        onInput={(e) => { this.setState({ password: e.target.value }) }} />
                                </div>

                                <button className="btn btn-primary shadow-2 mb-4" onClick={login}>
                                    {this.props.auth.loading ?
                                        <PacmanLoader
                                            cssOverride={override}
                                            size={11}
                                            color='white'
                                            loading={this.props.auth.loading}
                                            speedMultiplier={1.5}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        /> : "Đăng nhập"}
                                </button>
                                <p className="mb-2 text-muted">Quên mật khẩu? <NavLink to="/forgot-password">Cấp lại</NavLink></p>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password)),
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);