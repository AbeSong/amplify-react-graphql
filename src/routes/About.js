
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import HeroButtons from "../components/HeroButtons";
export default function About() {
  return (
    <div id="page" className="site">
      <AppHeader />

      <div id="content" className="site-content">
        <section className="hero hero-page">
          <div className="container">
            <div className="hero-content">
              <h1>Let us help you protect and register your brand</h1>
              <h3 className="hero-sub">Apply for your trademark online</h3>
              <HeroButtons />
            </div>
            <div className="page-content">
              <div
                id="post-55"
                className="post-55 page type-page status-publish hentry"
              >
                <h3>About Us</h3>
                <p>
                  Trademarkable is an Australian online platform that allows you
                  to register your trademark in a simple and affordable way. We
                  make it easier for you to protect your most valuable business
                  asset – your brand!
                </p>
                <p>
                  By completing our online form, our trademark attorneys can
                  prepare and file your trademark application within 1-2 days.
                  Also, after filing your trademark application, we can arrange
                  our trademark attorneys to assist you with any issues that may
                  arise during examination and/or protecting your trademark
                  overseas, such as in the USA, Europe, Japan and China.
                </p>
                <p>
                  Your brand deserves to be protected – get started by applying
                  today!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AppFooter />

    </div>
  );
}
