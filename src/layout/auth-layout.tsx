import { Outlet } from "react-router-dom";

// type Props = {};

function AuthLayout() {
  return (
    <div className="main justify-content-center d-flex w-100">
      <main className="content d-flex p-0">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10  col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
