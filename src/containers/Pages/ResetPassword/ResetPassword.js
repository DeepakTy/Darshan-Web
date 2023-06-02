import React from 'react';
import { Link, useHistory,useLocation ,Redirect} from 'react-router-dom';
import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import ResetPasswordStyleWrapper from './ResetPassword.styles';
import OtpInput from 'react-otp-input';
import notification from "../../../components/Notification"
import { useSelector, useDispatch } from 'react-redux';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';

const { login } = authAction;
const { clearMenu } = appAction;

export default function () {

  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  const [otp, setOtp] = React.useState('');

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  const hadleSave = (token = false) => {
    if (otp === localStorage.getItem("otp")) {
      notification("success", "OTP matched successfully");
      if (token) {
        dispatch(login(token));
      } else {
        dispatch(login());
      }
      dispatch(clearMenu());
      history.push('/dashboard');
    } else {
      notification("error", "OTP is invalid");
    }
  }

  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <ResetPasswordStyleWrapper className="isoResetPassPage">
      <div className="isoFormContentWrapper">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
            <h2>DARSHAN</h2>
            </Link>
          </div>

          <div className="isoFormHeadText" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <h1>OTP Verification</h1>
          </div>

          <div className="isoResetPassForm" >
            <div style={{ marginTop: "20px", marginBottom: "40px", display: "flex", justifyContent: "center" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle="isoOtpScreen"
              />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary" onClick={() => hadleSave()}>
                <IntlMessages id="page.resetPassSave" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ResetPasswordStyleWrapper>
  );
}
