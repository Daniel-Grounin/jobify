import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      {/*<Outlet /> is a React Router component
       that renders the matching child route element inside a parent route layout. */}
      <Outlet />
    </>
  );
};
export default HomeLayout;
