import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import tradeMarkable from "../images/hero-illustration.svg";
import { useState } from "react";

export default function Contact() {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData);
    console.log(name, email, message);

    const endpoint =
      "https://aved40kq4f.execute-api.ap-southeast-2.amazonaws.com/default/MySESLamda";

    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: name,
      senderEmail: email,
      message: message,
    });
    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        const msg = "Email sent successfully!";
        setMessageText(msg);
      })
      .catch((error) => {
        const msg = "An unknown error occured.";
        setMessageText(msg);
      });
  };

  return (
    <div id="page" className="site">
      <AppHeader />
      <div id="content" className="site-content">
        <section className="hero hero-page hero-page_contact">
          <div className="container">
            <div className="hero-content">
              <h1>Let's get in touch</h1>
              <h3 className="hero-sub">Don't be shy :{")"}</h3>
              <div className="hero-contact">
                <div
                  className="wpforms-container wpforms-container-full"
                  id="wpforms-83"
                >
                  <form
                    id="wpforms-form-83"
                    className="wpforms-validate wpforms-form"
                    method="post"
                  >
                    <div className="wpforms-field-container">
                      <div
                        id="wpforms-83-field_1-container"
                        className="wpforms-field wpforms-field-text"
                      >
                        <label
                          className="wpforms-field-label"
                          htmlFor="wpforms-83-field_1"
                        >
                          Full Name{" "}
                          <span className="wpforms-required-label">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="wpforms-field-large wpforms-field-required"
                          name="name"
                          placeholder="Your full name"
                          required=""
                        />
                      </div>

                      <div
                        id="wpforms-83-field_2-container"
                        className="wpforms-field wpforms-field-email"
                      >
                        <label
                          className="wpforms-field-label"
                          htmlFor="wpforms-83-field_2"
                        >
                          Email Address{" "}
                          <span className="wpforms-required-label">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="wpforms-field-large wpforms-field-required"
                          name="email"
                          placeholder="Your email address"
                          required=""
                        />
                      </div>

                      <div
                        id="wpforms-83-field_3-container"
                        className="wpforms-field wpforms-field-textarea"
                      >
                        <label
                          className="wpforms-field-label"
                          htmlFor="wpforms-83-field_3"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="wpforms-field-large"
                          name="message"
                          placeholder="Your trademark enquiry"
                        ></textarea>
                      </div>
                      {/*  */}
                      <div className="wpforms-submit-container">
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          id="wpforms-submit-83"
                          className="wpforms-submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div>{messageText}</div>
              </div>
            </div>
            <div className="hero-img page-content">
              <img src={tradeMarkable} alt="Trademarkable" />
            </div>
          </div>
        </section>
      </div>
      <AppFooter />
    </div>
  );
}
