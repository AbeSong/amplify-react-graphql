import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import countryList from "./json/countries.json"
import Autocomplete from '@mui/material/Autocomplete';

export default function ApplicationAddressForm({setFormValues, formValues}) {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    const obj = {
      [e.target.name] : e.target.value
    }
    setFormValues(prev => ({...prev, ...obj}))
  };

  const handleCountryChange = (value) => {
    const obj = {
      country: value,
    };
    setFormValues(prev => ({...prev, ...obj}))
  };

  return (
    <div id="applicationOwnership">
      <h2>Ownership</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ mb: 2 }}>
          <FormLabel id="ownerType">The owner of the trademark is:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-option-5"
            name="ownerType"
            value={formValues.ownerType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Company"
              control={<Radio />}
              label="Company"
            />
            <FormControlLabel
              value="Individual"
              control={<Radio />}
              label="Individual"
            />
          </RadioGroup>
        </FormControl>

        <Autocomplete
          size="small"
          id="country"
          value={formValues.country}
          onChange={(_event, newValue) => {
            handleCountryChange(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          name="country"
          options={countryList}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        <TextField
          required
          size="small"
          id="abnAcn"
          name="abnAcn"
          label="ABN/ACN"
          fullWidth
          autoComplete="abnAcn"
          variant="outlined"
          value={formValues.abnAcn}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="ownerName"
          name="ownerName"
          label="Trademark Owner"
          fullWidth
          autoComplete="ownerName"
          variant="outlined"
          value={formValues.ownerName}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="email"
          name="email"
          label="Email address"
          fullWidth
          autoComplete="email"
          variant="outlined"
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="phone"
          name="phone"
          label="Phone Number"
          fullWidth
          variant="outlined"
          value={formValues.phone}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="address1"
          name="address1"
          label="Address"
          fullWidth
          autoComplete="address-line1"
          variant="outlined"
          value={formValues.address1}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="suburb"
          name="suburb"
          label="Suburb \ Town"
          fullWidth
          autoComplete="suburb"
          variant="outlined"
          value={formValues.suburb}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="postcode"
          name="postcode"
          label="Postcode"
          fullWidth
          autoComplete="postal-code"
          variant="outlined"
          value={formValues.postcode}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          id="state"
          name="state"
          label="State"
          fullWidth
          autoComplete="state"
          variant="outlined"
          value={formValues.state}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
