import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./pages/HomePage'));

const SchedulePage = React.lazy(() => import('./pages/SchedulePage'));


const routes = [
    { path: '/', exact: true, name: 'HomePage', component: DashboardDefault },
    { path: '/schedule-page', exact: true, name: 'SchedulePage', component: SchedulePage },
];

export default routes;