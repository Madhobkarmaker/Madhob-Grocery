import React from "react";
import classes from "./FooterPage.module.css";
import applestore from "./Asset/applestore.png";
import playstore from "./Asset/playstore.png";
import gateway from "./Asset/gateway.png";
import phone from "./Asset/phone.png";
import mail from "./Asset/mail.png";
import location from "./Asset/location.png";
import instagram from "./Asset/Instagram.png";
import twitter from "./Asset/Twitter.png";
import youtube from "./Asset/Youtube.png";

const FooterPage = () => {
  return (
    <div className={`mt-5 ${classes.footer}`}>
      <div className="container py-5">
        <div className={`row  ${classes.footerContainer}`}>
          <div className="col-lg-2 col-md-12 justify-content-md-center">
            <p className="fw-500 fs-20 cBlack-9">Install App</p>
            <div className={`pt-4 ${classes.storeApp}`}>
              <a href="#">
                <img src={playstore} alt="playstore" />
              </a>
            </div>
            <div className={`pt-3 ${classes.storeApp}`}>
              <a href="#">
                <img src={applestore} alt="applestore" />
              </a>
            </div>
            <div className={`d-flex pt-3 ${classes.socialIconContainer}`}>
              <a href="">
                <img
                  className={classes.socialIcon}
                  src={instagram}
                  alt="instagram"
                />
              </a>

              <a href="">
                <img
                  className={`mx-3 ${classes.socialIcon}`}
                  src={twitter}
                  alt="twitter"
                />
              </a>

              <a href="">
                <img
                  className={classes.socialIcon}
                  src={youtube}
                  alt="youtube"
                />
              </a>
            </div>
          </div>

          {/* contact */}

          <div className="col-lg-3 col-md-12 justify-content-md-center">
            <p className={`fw-500 fs-20 cBlack-9 ${classes.customerSupport}`}>
              Contact
            </p>
            <div className={classes.contactDetails}>
              <p className="fs-16 cBlack-8 pt-3">Lotus Groceries</p>
              <div className={`d-flex pt-4 ${classes.contactInfo}`}>
                <img
                  className={classes.contactIcon}
                  src={location}
                  alt="location"
                />
                <p className="fs-14 cBlack-8 ps-2">
                  1658 Rosewood Lane New York city, NY
                </p>
              </div>

              <div className={`d-flex pt-3 ${classes.contactInfo}`}>
                <img className={classes.contactIcon} src={phone} alt="phone" />
                <p className="fs-14 cBlack-8 ps-2">+8801780445466</p>
              </div>

              <div className={`d-flex pt-3 ${classes.contactInfo}`}>
                <img className={classes.contactIcon} src={mail} alt="mail" />
                <p className="fs-14 cBlack-8 ps-2">admin@ftribe.com</p>
              </div>
            </div>
          </div>

          {/* customer support */}

          <div className="col-lg-3 col-md-12">
            <p className={`fw-500 fs-20 cBlack-9 ${classes.customerSupport}`}>
              Customer Support
            </p>
            <div className="pt-4">
              <p className="fs-14 cBlack-8 ps-2">
                Hotline Customer Service <br />
                212 929 9953
              </p>
              <a
                className="fs-14 cBlack-8 ps-2 pe-auto text-decoration-none"
                href=""
              >
                FAQ
              </a>
              <br />
              <a
                className="fs-14 cBlack-8 ps-2 pe-auto text-decoration-none"
                href=""
              >
                Ordering Guide
              </a>
              <br />
              <a
                className="fs-14 cBlack-8 ps-2 pe-auto text-decoration-none"
                href=""
              >
                Return Policy
              </a>
              <br />
              <a
                className="fs-14 cBlack-8 ps-2 pe-auto text-decoration-none"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* payment gateway */}

          <div className="col-lg-4 col-md-12 pt-4 ">
            <img className={classes.gateway} src={gateway}></img>
          </div>
        </div>
      </div>

      {/* copyright */}

      <div className={`py-3 ${classes.copyright}`}>
        <p className="fw-500 fs-18 cBlack-8 text-center">
          Copyright © 2020 Lotus Groceries
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
