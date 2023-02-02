import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./pages/HomePage'));

const SchedulePage = React.lazy(() => import('./pages/SchedulePage'));

const TimeTablePage = React.lazy(() => import('./pages/TimeTablePage'));

const routes = [
    { path: '/', exact: true, name: 'HomePage', component: DashboardDefault },
    { path: '/schedule', exact: true, name: 'SchedulePage', component: SchedulePage },
    { path: '/time-table', exact: true, name: 'TimeTablePage', component: TimeTablePage },
];

export default routes;