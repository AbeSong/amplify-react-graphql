
import React from 'react'
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import tradeMarkable from "../images/hero-illustration.svg";
import HeroButtons from "../components/HeroButtons";
import { Link } from "react-router-dom";
import editImage from "../images/edit-6931553-150x150.png"
import groupImage from "../images/group-6884594-150x150.png";
import searchImage from "../images/search-6380865-150x150.png";
import verifiedImage from "../images/verified-6534505-150x150.png";

function Home() {

  return (
    <div id="page" className="site">
      <AppHeader />
      <div id="content" className="site-content">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Register your Trademark from $250 + Govt. Fees</h1>
              <h3 className="hero-sub">Protect your brand! </h3>
              <HeroButtons />
            </div>
            <div className="hero-img">
              <img src={tradeMarkable} alt="Trademarkable" />
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="row works-row">
              <div id="post-130264" className="works-row_item">
                <div className="d_flex align_center">
                  <img
                    width="150"
                    height="150"
                    src={editImage}
                    className="attachment-step-thumb size-step-thumb wp-post-image"
                    alt=""
                    decoding="async"
                    sizes="(max-width: 150px) 100vw, 150px"
                  />{" "}
                  <div className="step-content">
                    <span className="subtitle">Step 1</span>
                    <h4 className="small">Apply</h4>
                    <p className="caption color-text">
                      Compete our online form. It’s simple and only takes a
                      couple of minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div id="post-130265" className="works-row_item">
                <div className="d_flex align_center">
                  <img
                    width="150"
                    height="150"
                    src={groupImage}
                    className="attachment-step-thumb size-step-thumb wp-post-image"
                    alt=""
                    decoding="async"
                    sizes="(max-width: 150px) 100vw, 150px"
                  />{" "}
                  <div className="step-content">
                    <span className="subtitle">Step 2</span>
                    <h4 className="small">File</h4>
                    <p className="caption color-text">
                      Trademark attorneys will file your trademark application
                      within 1-2 days.
                    </p>
                  </div>
                </div>
              </div>
              <div id="post-130266" className="works-row_item">
                <div className="d_flex align_center">
                  <img
                    width="150"
                    height="150"
                    src={searchImage}
                    className="attachment-step-thumb size-step-thumb wp-post-image"
                    alt=""
                    decoding="async"
                    sizes="(max-width: 150px) 100vw, 150px"
                  />{" "}
                  <div className="step-content">
                    <span className="subtitle">Step 3</span>
                    <h4 className="small">Examination</h4>
                    <p className="caption color-text">
                      Your trademark application will be officially examined by
                      IP Australia.
                    </p>
                  </div>
                </div>
              </div>
              <div id="post-260345" className="works-row_item">
                <div className="d_flex align_center">
                  <img
                    width="150"
                    height="150"
                    src={verifiedImage}
                    className="attachment-step-thumb size-step-thumb wp-post-image"
                    alt=""
                    decoding="async"
                    sizes="(max-width: 150px) 100vw, 150px"
                  ></img>

                  <div className="step-content">
                    <span className="subtitle">Step 4</span>
                    <h4 className="small">Protected</h4>
                    <p className="caption color-text">
                      Once approved, your trademark will be registered and
                      protected.
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="banner banner-primary">
              <div>
                <h3>
                  Protect your most valuable business asset. Apply for your
                  trademark online.
                </h3>
                <p>Trademark application starts from $250 + Govt. Fees</p>
              </div>
              <Link
                to="/trademarkable/trademark/"
                className="button button-secondary"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </section>
        
      </div>
      <AppFooter />
    </div>
  );
}

export default Home;
