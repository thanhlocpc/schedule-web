import React from 'react';

const SignUp1 = React.lazy(() => import('./pages/authentication/SignUp/SignUp1'));
const Signin = React.lazy(() => import('./pages/authentication/SignIn/SignIn1'));
const Logout = React.lazy(() => import('./pages/authentication/LogoutPage'));


const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/signin', exact: true, name: 'Signin 1', component: Signin },
    { path: '/logout', exact: true, name: 'Signin 1', component: Logout}

];

export default route;