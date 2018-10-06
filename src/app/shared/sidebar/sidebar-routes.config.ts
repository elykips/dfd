import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/dashboard/overview', title: 'Overview', icon: 'icon-speedometer success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/dashboard/bookings', title: 'Bookings', icon: 'ft-calendar success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/dashboard/my-channels', title: 'My Channels', icon: 'icon-shuffle success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Marketplace', icon: 'ft-briefcase success', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/dashboard/marketplaces', title: 'Travel Agencies', icon: 'ft-globe success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/social-media', title: 'Social Media', icon: 'ft-facebook success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            // {
            //     path: '/dashboard/insights', title: 'Insights ', icon: 'ft-trending-up success', class: '', badge: 'soon', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
            // }
        ]
    },
    {
        path: '/dashboard/payment-dashboard', title: 'Payments', icon: 'icon-wallet success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            // {
            //     path: '/dashboard/my-subscription', title: 'Upgrade Account', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/dashboard/receive-payments', title: 'Receive Payments', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/dashboard/payments', title: 'Transaction Logs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/payments/make-payment', title: 'Make Payment', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
        ]
    },
    {
        path: '/dashboard/tours', title: 'My Tours', icon: 'icon-globe-alt success', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            // {
            //     path: '/dashboard/new-tour', title: 'Create Tours', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/dashboard/tours', title: 'My Tours', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
        ]
    },
    {
        path: '/dashboard/insights', title: 'Insights', icon: 'ft-trending-up success', class: '', badge: 'soon', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },

    
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
