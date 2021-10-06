import { Link, withRouter } from "react-router-dom";

const MyNavBar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <a className="navbar-brand" href="/" style={{ marginLeft: "2px" }}>
        <img src="\img\Netflix_Logo_RGB.png" width="95px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">
              <a className="nav-link active">
                Home <span className="sr-only"></span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="hvh">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="hvh">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="vhvh">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="hvhvy">
              My List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="hgfy">
              B/O
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <div className="btn-group dropdown">
            <div className="mb-3"></div>

            <a
              className="text-light nav-link dropdown-toggle"
              href="vhvgh"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="span mr-3">KIDS</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bell"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
                <img src="./assets/kids_icon.png" width={25} alt="" />
              </span>
            </a>
          </div>
        </form>
      </div>
    </nav>
  </>
);

export default withRouter(MyNavBar);
