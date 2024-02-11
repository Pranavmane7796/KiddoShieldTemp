import "../../styles/hospitalDashboard.css";
export default function HosspitalDashboard() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <a href="/">
          <img
            src="/images/kidLogo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </a>
      </nav>
      <div id="container-dashboard" className="container">
        <div id="hospital-dashboard" className="card border-info bg-info">
          <div className="card-body">
            <img
              class="card-img-top"
              src="images/appointment.jpg"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">Appointments</h5>
            <p className="card-text">Click here to see the Appointments</p>

            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
        <div
          id="hospital-dashboard"
          className="card border-info bg-info"
          style={{ width: "50%" }}
        >
          <div className="card-body">
            <img
              class="card-img-top"
              src="images/doctor.jpg"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">Doctors</h5>
            <p className="card-text">Doctors registration and doctor Details</p>
            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
        <div
          id="hospital-dashboard"
          className="card border-info bg-info"
          style={{ width: "50%" }}
        >
          <div className="card-body">
            <img
              class="card-img-top"
              src="images/child.jpg"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">All Children</h5>
            <p className="card-text">All childrens information and history</p>
            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div id="container-dashboard" className="container">
        <div id="hospital-dashboard" className="card border-info bg-info">
          <div className="card-body">
            <img
              class="card-img-top"
              src="images/reminder.png"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">Reminder</h5>
            <p className="card-text">Send reminders</p>
            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
        <div id="hospital-dashboard" className="card border-info bg-info">
          <div className="card-body">
            <img
              class="card-img-top"
              src="images/vaccination.png"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">Vaccination</h5>
            <p className="card-text">See the vaccination</p>
            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
        <div id="hospital-dashboard" className="card border-info bg-info">
          <div className="card-body">
            <img
              style={{ height: "0%" }}
              class="card-img-top"
              src="images/child.jpg"
              alt="Card image cap"
            />
            <hr></hr>
            <h5 className="card-title">Appointments</h5>
            <p className="card-text">Appointments</p>
            <a
              id="dashboard-button"
              href="#"
              class="btn btn-outline-warning rounded-pill "
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
