import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      {/* <div className="form-box">
        <form className="form ">
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <div className="terms">
            <p className="text-tertiary text-muted">
              By clicking the "Sign Up" button, you are joining adiClub, will
              receive emails with the latest news and updates, and agree to the
              TERMS OF USE and Tailored+ TERMS AND CONDITIONS and acknowledge you
              have read the ADIDAS PRIVACY POLICY. If you are a California
              resident, the adiClub membership may be considered a financial
              incentive. Please see the Financial Incentives section of our
              CALIFORNIA PRIVACY NOTICE for details
            </p>
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="/signin">Log in</a>
          </p>
        </div>
      </div> */}

      <form class="form">
        <div className="d-flex align-center justify-content-between">
          <p class="title"> Insert Logo</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="form-box"></div>
        <p class="message">Signup for free and enjoy exclusive discounts. </p>
        <div class="flex">
          <label>
            <input class="input" type="text" placeholder="" required="" />
            <span>Firstname</span>
          </label>

          <label>
            <input class="input" type="text" placeholder="" required="" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input class="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>

        <label>
          <input class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>
        <label>
          <input class="input" type="password" placeholder="" required="" />
          <span>Confirm password</span>
        </label>
        <div className="terms">
          <p className=" text-muted">
            By clicking the "Sign Up" button, you are joining Tailoredplus, will
            receive emails with the latest news and updates, and agree to the
            TERMS OF USE and Tailored+ TERMS AND CONDITIONS and acknowledge you
            have read the ADIDAS PRIVACY POLICY. If you are a California
            resident, the adiClub membership may be considered a financial
            incentive. Please see the Financial Incentives section of our
            CALIFORNIA PRIVACY NOTICE for details
          </p>
        </div>
        <button class="submit">Submit</button>
        <p class="signin">
          Already have an acount ? <Link href="/">Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
