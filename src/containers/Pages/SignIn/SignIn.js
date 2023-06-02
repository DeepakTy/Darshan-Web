import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import FirebaseLoginForm from '../../FirebaseForm/FirebaseForm';
import {
  signInWithGoogle,
  signInWithFacebook,
} from '@iso/lib/firebase/firebase.authentication.util';
import SignInStyleWrapper from './SignIn.styles';
import notification from "../../../components/Notification"

export default function SignIn() {

  let history = useHistory();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [Otp, setOtp] = React.useState("");

  React.useEffect(() => {
    const zeros = '0'.repeat(4 - 1);
    const x = parseFloat('1' + zeros);
    const y = parseFloat('9' + zeros);
    const confirmationCode = String(Math.floor(x + Math.random() * y));
    setOtp(confirmationCode);
  }, []);


  function handleLogin(e) {
    e.preventDefault();
    if (phoneNumber!=="") {
      const hash = "cae731ca2fe75383543f32bc1e1532d052a0449a4306f59ab171e1c22959d085";
      const message = "Your%20OTP%20for%20Darshann%20is%20:%20" + Otp + "%n%2012341234123";
      const requestOptions = { method: 'GET', };

      fetch('https://api.textlocal.in/send/' + "?username=" + "prmurthy@appsbay.in" + "&hash=" + hash + "&sender=" + "DARSNO" + "&numbers=" + "91" + phoneNumber + "&message=" + message, requestOptions)
        .then(response => response.json())
        .then((data) => {
          if (data.warnings) {
            notification("error", data.warnings[0].message);
          } else if (data.message) {
            notification("success", "OTP has been sent your number");
            history.push("/resetpassword");
            localStorage.setItem("otp", Otp);
          }
        });
    }else{
      notification("error","Please Enter Phone Number ")
    }

  }

  const handlePhoneNumberCheck = (e) => {
    setPhoneNumber(e.target.value);
  }

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <h2>DARSHAN</h2>
            </Link>
          </div>
          <div className="isoSignInForm">
            <form>

              <div className="isoInputWrapper" style={{ marginBottom: "40px" }}>
                <Input
                  size="large"
                  type="number"
                  placeholder="Phone Number"
                  autoComplete="false"
                  onChange={(e) => handlePhoneNumberCheck(e)}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent" style={{ display: "flex", justifyContent: "center" }}>

                <Button type="primary" onClick={(e) => handleLogin(e)}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
