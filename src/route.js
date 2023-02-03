import React from 'react';

const SignUp1 = React.lazy(() => import('./pages/SignUpPage'));
const Signin = React.lazy(() => import('./pages/SignInPage'));
const Logout = React.lazy(() => import('./pages/LogoutPage'));


const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/signin', exact: true, name: 'Signin 1', component: Signin },
    { path: '/logout', exact: true, name: 'Signin 1', component: Logout}

];

export default route;