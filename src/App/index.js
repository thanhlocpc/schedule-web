import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        const { auth } = this.props
        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {menu}
                            {/* <Route path="/" component={AdminLayout} /> */}
                            <Route path="/" render={() => (
                                auth.user ? <AdminLayout /> : <Redirect from="/" to="/signin" />
                            )} />

                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export default withRouter(connect(mapStateToProps)(App));

