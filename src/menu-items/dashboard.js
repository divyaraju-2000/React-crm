// assets
import { DashboardOutlined ,AppstoreAddOutlined} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'dashboard1',
            title: 'Leads',
            type: 'item',
            url: '/leads',
            icon: icons.AppstoreAddOutlined,
            breadcrumbs: false

        },
        {
            id: 'serviceRequest',
            title: 'Service Request',
            type: 'item',
            url: '/service-request',
            icon: icons.AppstoreAddOutlined,
            breadcrumbs: false

        },
        {
            id: 'contacts',
            title: 'Contacts',
            type: 'item',
            url: '/contacts',
            icon: icons.AppstoreAddOutlined,
            breadcrumbs: false

        }
    ]
};

export default dashboard;
