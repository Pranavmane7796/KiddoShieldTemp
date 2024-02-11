import "../styles/childHistory.css";
import AppDropDownBtn from "./child/appointmentDropdownBtn";
export default function ChildDashboard() {
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
      <div id="dashboard-card" className="card">
        <div className="card-header">Children Datails</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Children name 1</h5>
                <div className="child-dashboard">
                  <p>Date Of Birth : dobbbbbb</p>
                  <p> Age : ageeeeeee</p>
                  <p>Child Id : Iddddddddddd</p>
                  <p>Weight:Weightttttttttt</p>
                </div>

                <hr></hr>
                <div id="history-app-btn" className="text-end">
                  <a
                    id="history-btn"
                    href="/childHistory.js"
                    className="btn btn-outline-info btn-sm"
                  >
                    View History
                  </a>
                  {/* dropdown btn for appointment */}
                  <AppDropDownBtn></AppDropDownBtn>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Children name 2</h5>
                <div className="child-dashboard">
                  <p>Date Of Birth : dobbbbbb</p>
                  <p> Age : ageeeeeee</p>
                  <p>Child Id : Iddddddddddd</p>
                  <p>Weight:Weightttttttttt</p>
                </div>
                <hr></hr>
                <div id="history-app-btn" className="text-end">
                  <a
                    id="history-btn"
                    href="/childHistory.js"
                    className="btn btn-outline-info btn-sm"
                  >
                    View History
                  </a>
                  {/* dropdown btn for appointment */}
                  <AppDropDownBtn></AppDropDownBtn>
                </div>
              </div>
            </div>
            <div></div>
            <div id="dashboard-register-btn" className="text-center">
              <a
                href="/childRegistration.js"
                className="btn btn-outline-primary"
              >
                + Register
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </>
  );
}
