import React from "react";
import classes from "./Account.module.css";
import Logo from "./Asset/logo.svg";
import Profile from "./Asset/profile.svg";
import Track from "./Asset/track_order.svg";
import Password from "./Asset/change_password.svg";
import Cancelation from "./Asset/cancelation.svg";
import Logout from "./Asset/log_out.svg";
import PaymentHistory from "./Asset/payment_history.svg";
import Orders from "./Asset/my_order.svg";

const Account = () => {
  return (
    <div className={`mx-3 pb-3 bgPrimary-3 rounded ${classes.myAccount}`}>
      <div className="d-flex justify-content-center align-items-center bgPrimary-1 w-100 rounded-top">
        <div className="my-3">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <p className="pt-3 pb-4 text-center cBlack-2 fs-14 cursor-pointer">
        EN | বাং
      </p>

      <div className="px-3">
        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Profile} alt="Profile" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Manage My Account
          </p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Track} alt="Track" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Track your orders
          </p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Password} alt="Password" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Change Password
          </p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Cancelation} alt="Cancelation" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>Cancelation</p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Logout} alt="Logout" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}> Log Out </p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={PaymentHistory} alt="PaymentHistory" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Payment History
          </p>
        </div>

        <div className="d-flex pb-3 ms-4 cursor-pointer">
          <img src={Orders} alt="Orders" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}> My Orders </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
