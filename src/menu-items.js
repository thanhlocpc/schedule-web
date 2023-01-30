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
                },

                {
                    id: 'sample-page',
                    title: 'Xem lịch thi',
                    type: 'item',
                    url: '/schedule-page',
                    classes: 'nav-item',
                    icon: 'feather icon-check-square'
                },

                {
                    id: 'logout',
                    title: 'Đăng xuất',
                    type: 'item',
                    url: '/logout',
                    classes: 'nav-item',
                    icon: 'feather icon-log-out'
                },
                // {
                //     id: 'docs',
                //     title: 'Xem thời khóa biểu',
                //     type: 'item',
                //     url: '/docs',
                //     classes: 'nav-item',
                //     icon: 'feather icon-calendar'
                // },
            ]
        }
    ]
}