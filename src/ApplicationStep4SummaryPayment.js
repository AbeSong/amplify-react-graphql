import * as React from "react";
import ApplicationStripe from "./ApplicationStripe";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublicIcon from "@mui/icons-material/Public";
import PlaceIcon from "@mui/icons-material/Place";
import "./ApplicationStep4SummaryPayment.css";

export default function ApplicationSummaryPayment({
  formValues,
  selections,
  totalCost,
}) {
  const computeAddress = () => {
    const { address1, suburb, postcode, state } = formValues;
    return `${address1} ,${suburb}, ${state} ${postcode}`;
  };

  console.log(selections);

  return (
    <React.Fragment>
      <div id="summaryPage">
        <div className="ac-container">
          <div className="ac-column">
            <ApplicationStripe />
          </div>
          <div className="ac-column">
            <div className="ac-body form-summary">
              <div>
                <h3>Summary</h3>
              </div>

              <div className="contact-details summary-section">
                <h4>***Contact details***</h4>
                <div className="summary-item">
                  <PersonIcon fontSize="small" color="action" />
                  <span>{formValues.ownerName}</span>
                </div>
                <div className="summary-item">
                  <EmailIcon fontSize="small" color="action" />
                  <span>{formValues.email}</span>
                </div>
              </div>
              <div className="trademark-details summary-section">
                <h4>Trademark</h4>
                <div className="summary-item">
                  <TitleIcon fontSize="small" color="action" />
                  <ListItemText primary={formValues.trademarkText} />
                </div>
                <br />
                <h4>GOODS & Services</h4>
                {selections.map((selected) => (
                  <div className="small-item">
                    Class {selected.number}:{" "}
                    {selected.suggestions.map(({ name }) => name).join("; ")}
                  </div>
                ))}
              </div>
              <div className="owner-details summary-section">
                <h4>Owner</h4>
                <div className="summary-item">
                  <PersonIcon fontSize="small" color="action" />
                  <span>{formValues.ownerName}</span>
                </div>
                <div className="summary-item">
                  <PhoneAndroidIcon fontSize="small" color="action" />
                  <span>{formValues.phone}</span>
                </div>
                <div className="summary-item">
                  <PublicIcon fontSize="small" color="action" />
                  <span>{formValues.country.name}</span>
                </div>
                <div className="summary-item">
                  <PlaceIcon fontSize="small" color="action" />
                  <span>{computeAddress()}</span>
                </div>
              </div>
              <div className="cost-details summary-section">
                <h4>Cost breakdown</h4>
                <div className="cost-details-item">
                  <span>Filing charge</span>
                  <span>$250</span>
                </div>
                {selections.map(({ number }) => (
                  <div key={number} className="cost-details-item">
                    <span>Class {number}</span>
                    <span>$250</span>
                  </div>
                ))}
              </div>

              <div className="cost-details summary-section">
                <div className="cost-details-item">
                  <span>Pre GST:</span>
                  <span>(${((totalCost * 10) / 11).toFixed(2)})</span>
                </div>
                <div className="cost-details-item">
                  <span>GST:</span>
                  <span>(${((totalCost * 1) / 11).toFixed(2)})</span>
                </div>
                <br />
                <div className="total-details">
                  <span>Total:</span>
                  <span>${totalCost}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
