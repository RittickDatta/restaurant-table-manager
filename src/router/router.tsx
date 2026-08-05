import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/app/layout/RootLayout';
import Admin from '@/app/pages/admin/Admin';

import Home from '@/app/components/Home';

import Staff from '@/app/pages/staff/Staff';
import StaffDetails from '@/app/pages/staff/staff-details/StaffDetails';

import Tables from '@/app/pages/tables/Tables';
import TableDetails from '@/app/pages/tables/table-details/TableDetails';

import Menu from '@/app/pages/menu/Menu';

import Orders from '@/app/pages/orders/Orders';
import ViewOrder from '@/app/pages/orders/view/ViewOrder';
import EditOrder from '@/app/pages/orders/edit/EditOrder';

import NotFound from '@/app/shared/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'staff',
        element: <Staff />,
      },
      {
        path: 'staff/:id',
        element: <StaffDetails />,
      },
      {
        path: 'tables',
        element: <Tables />,
      },
      {
        path: 'tables/:id',
        element: <TableDetails />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'orders/view/:id',
        element: <ViewOrder />,
      },
      {
        path: 'orders/edit/:id',
        element: <EditOrder />,
      },
    ],
  },
]);
