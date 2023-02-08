export default {
    items: [

        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'home',
                    title: 'Trang chủ',
                    type: 'item',
                    url: '/',
                    icon: 'feather icon-home',
                    role:"ALL"
                },

                {
                    id: 'sample-page',
                    title: 'Xem lịch thi',
                    type: 'item',
                    url: '/schedule',
                    classes: 'nav-item',
                    icon: 'feather icon-check-square',
                    role:"ALL"
                },

                {
                    id: 'time-table',
                    title: 'Xem thời khóa biểu',
                    type: 'item',
                    url: '/time-table',
                    classes: 'nav-item',
                    icon: 'feather icon-calendar',
                    role:"ALL"
                },

                {
                    id: 'score-table',
                    title: 'Xem điểm',
                    type: 'item',
                    url: '/score-table',
                    classes: 'nav-item',
                    icon: 'feather icon-feather',
                    role:"STUDENT"
                },

                {
                    id: 'logout',
                    title: 'Đăng xuất',
                    type: 'item',
                    url: '/logout',
                    classes: 'nav-item',
                    icon: 'feather icon-log-out',
                    role:"ALL"
                },

            ]
        }
    ]
}