import React from 'react';

// const SignUp1 = React.lazy(() => import('./pages/authentication/SignUp/SignUp1'));
const Signin = React.lazy(() => import('./pages/authentication/SignIn/SignIn1'));

const route = [
    // { path: '/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/signin', exact: true, name: 'Signin', component: Signin }
];

export default route;