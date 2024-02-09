import React from "react";

export default function Registration() {
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
      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        KiddoShield
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Child Registration</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="fname">Child First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="childname"
                    aria-describedby="fname"
                    placeholder="Enter your first name"
                  />

                  <label for="age">Weight</label>
                  <input
                    type="number"
                    className="form-control"
                    id="childweight"
                    aria-describedby="emailHelp"
                    placeholder="enter Weight of your child"
                  />
                  <label for="bloodGroup" style={{ paddingTop: "2%" }}>
                    Blood Group :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <select
                    className="btn btn-outline-secondary rounded-pill"
                    value=""
                    id="bloodGroup"
                    name="bloodGroup"
                  >
                    <option>Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div class="col-sm">
                  <label for="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="childage"
                    aria-describedby="emailHelp"
                    placeholder="enter age of your child"
                  />
                  <label for="child-dob">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    id="child-dob"
                    placeholder="Enter DOB"
                  />
                  <div className="gen" style={{ marginTop: "3%" }}>
                    <label className="gen">Gender :</label>
                    &nbsp;&nbsp;&nbsp;
                    <label className="gender" for="male">
                      Male
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="male" name="gender" value="male" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className="gender" for="female">
                      Female
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className="gender" for="other">
                      Other
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

{
}
