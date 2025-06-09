import React from "react";
import { 
  FaBolt as Zap, 
  FaChartLine as TrendingUp, 
  FaShieldAlt as Shield, 
  FaUsers as Users, 
  FaCheck as Check 
} from "react-icons/fa";
import Signup from "./Signup";
import OpenAccount from "../OpenAccount";

function Feature() {
  return (
    <>
      {/* Steps Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="row text-center">
            {[{
              number: 1,
              title: "Enter the requested details",
              desc: "Provide your basic information and documents"
            }, {
              number: 2,
              title: "Complete e-sign & verification",
              desc: "Digitally sign and verify your identity"
            }, {
              number: 3,
              title: "Start investing!",
              desc: "Begin your investment journey"
            }].map(({number, title, desc}) => (
              <div className="col-md-4 mb-4" key={number}>
                <div 
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" 
                  style={{ width: "64px", height: "64px", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  {number}
                </div>
                <h3 className="h5 fw-semibold">{title}</h3>
                <p className="text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Benefits of opening a Zerodha demat account
          </h2>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="bg-success text-white rounded mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                  <Zap size={24} />
                </div>
                <h5 className="fw-semibold">Unbeatable pricing</h5>
                <p className="text-muted small">
                  Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="bg-primary text-white rounded mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                  <TrendingUp size={24} />
                </div>
                <h5 className="fw-semibold">Best investing experience</h5>
                <p className="text-muted small">
                  Simple and intuitive trading platform with an easy-to-understand user interface.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="bg-purple text-white rounded mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", backgroundColor: "#6f42c1" }}>
                  <Shield size={24} />
                </div>
                <h5 className="fw-semibold">No spam or gimmicks</h5>
                <p className="text-muted small">
                  Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="bg-warning text-white rounded mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                  <Users size={24} />
                </div>
                <h5 className="fw-semibold">The Zerodha universe</h5>
                <p className="text-muted small">
                  More than just an app — gain free access to the entire ecosystem of our partner products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Explore different account types
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 rounded shadow-sm" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
                <h3 className="h5 fw-semibold mb-3">Individual Account</h3>
                <p className="text-muted mb-3">Perfect for individual investors and traders</p>
                <ul className="list-unstyled">
                  {["Single holder account", "Easy online account opening", "Full trading access"].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center text-secondary mb-2">
                      <Check className="me-2 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded shadow-sm" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
                <h3 className="h5 fw-semibold mb-3">Joint Account</h3>
                <p className="text-muted mb-3">Ideal for couples and families</p>
                <ul className="list-unstyled">
                  {["Multiple holders", "Shared ownership", "Nomination facility"].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center text-secondary mb-2">
                      <Check className="me-2 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
