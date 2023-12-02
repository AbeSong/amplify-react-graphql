import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const ApplicationStepper = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 4 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>
            <b>{label}</b>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
