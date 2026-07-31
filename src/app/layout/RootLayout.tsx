import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/tables">Tables</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">Orders</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
