import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { ApplicationStepper } from "./components/ApplicationStepper";
import ApplicationTradeMarkDetails from "./ApplicationStep1TradeMarkDetails";
import ApplicationGoodsAndServices from "./ApplicationStep2GoodsAndServices";
import ApplicationOwnership from "./ApplicationStep3Ownership";
import ApplicationSummaryPayment from "./ApplicationStep4SummaryPayment";
import AppHeader from "./components/AppHeader";
import "./Application.css";
import countryList from "./json/countries.json"
import { API, Storage } from "aws-amplify";
import { createNote as createNoteMutation } from "./graphql/mutations";

const steps = [
  "Trademark Details",
  "Goods & Services",
  "Ownership",
  "Summary & Payment",
];

function getStepContent(step, setFormValues, formValues, setSelections, selections, totalCost ) {
  switch (step) {
    case 0:
      return (
        <ApplicationTradeMarkDetails
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case 1:
      return (
        <ApplicationGoodsAndServices
          setSelections={setSelections}
          selections={selections}
        />
      );
    case 2:
      return (
        <ApplicationOwnership
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case 3:
      return (
        <ApplicationSummaryPayment
          formValues={formValues}
          selections={selections}
          totalCost={totalCost}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

const initialFormValues = {
  trademarkType: "Text",
  trademarkText: "",
  ownerType: "Company",
  ownerName: "",
  country: countryList[0],
  abnAcn: "",
  email: "",
  phone: "",
  address1: "",
  suburb: "",
  postcode: "",
  state: "",
};

export default function Application() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [selections, setSelections] = React.useState([]);
  const [totalCost, setTotalCost] = React.useState(250);

  const handleNext = () => {
    if(activeStep === 3){
      console.log(formValues)
      const payload = {...formValues, country: formValues.country.name}
      console.log(payload)
      submitApplication(payload)
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  React.useEffect(() => {
    const cost = selections.length * 250 + 250;
    setTotalCost(cost)
  },[selections.length])

  async function submitApplication(formValues) {
    const trademarkLogo = formValues.trademarkLogo
    const data = { ...formValues, trademarkLogo: trademarkLogo?.name };
    console.log(data)
    if (!!data.trademarkLogo)
      await Storage.put(data.trademarkText, trademarkLogo);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    // event.target.reset();
  }

  console.log("FORMVALUES", formValues);
  console.log("selections", selections);
  
  return (
    <>
      <AppHeader />
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 2 } }}>
          <ApplicationStepper steps={steps} activeStep={activeStep} />
          {getStepContent(
            activeStep,
            setFormValues,
            formValues,
            setSelections,
            selections,
            totalCost
          )}
          <div className="form-fixed_bar">
            <div className="container">
              <div className="total">
                Total to Pay $<span id="variablePrice">{totalCost}</span>
              </div>
              <div className="buttons">
                {activeStep !== 0 && (
                  <button
                    type="button"
                    className="button prev-form"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="button next-form"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
}
