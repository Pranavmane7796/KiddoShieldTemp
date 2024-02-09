import React from "react";
import "../styles/registration.css";

export default function Registration() {
  return (
    <>
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
            <b style={{ fontSize: "80%" }}>Register Yourself</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="uname">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    aria-describedby="uname"
                    placeholder=" Enter username"
                  />
                  <label for="cnumber">Mobile number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cnumber"
                    aria-describedby="cnumber"
                    placeholder="Enter mobile number"
                  />

                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                  />
                </div>
                <div class="col-sm">
                  <label for="fname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    aria-describedby="fname"
                    placeholder="Enter your first name"
                  />
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Tell us your email id"
                  />
                  <div className="gen" style={{ marginTop: "3%" }}>
                    <label className="gen">Gender</label>
                    <br></br>
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
                <div class="col-sm">
                  {" "}
                  <label for="lname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    aria-describedby="lname"
                    placeholder="Enter your last name"
                  />
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="create a password for your account"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
