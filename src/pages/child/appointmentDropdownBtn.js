import "../../styles/appDropdownBtn.css";
export default function AppDropDownBtn() {
  return (
    <>
      <div className="btn-group">
        <a
          className="btn  btn-outline-info btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Appoinment
        </a>
        <ul id="dropdown-menu" className="dropdown-menu">
          <li id="vaccination" style={{ marginLeft: "5%" }}>
            <a className="appointment-link" href="/scheduleVaccine.js">
              Vaccination
            </a>
          </li>

          <li id="monthlyCheckup" style={{ marginLeft: "5%" }}>
            <a className="appointment-link" href="monthlyCheckUp.js">
              Monthly checkup
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
