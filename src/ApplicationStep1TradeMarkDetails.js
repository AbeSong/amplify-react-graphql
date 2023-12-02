import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function validFileType(file) {
  const fileTypes = ["image/jpeg", "image/png", "image/tif"];
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

export default function ApplicationTradeMarkDetails({setFormValues, formValues}) {
  const [textContent, setTextContent] = React.useState("No file to preview");
  const fileInput = React.useRef(null);
  const previewDiv = React.useRef(null);

  const handleChange = (e) => {
    const obj = {
      [e.target.name] : e.target.value
    }
    setFormValues(prev => ({...prev, ...obj}))
  };

  const updateImageDisplay = (e) => {
    const trademarkLogo = e.target.files[0]
    setFormValues(prev => ({...prev, trademarkLogo}))
    const preview = previewDiv.current;
    // console.log(preview);
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    // console.log(fileInput);
    const curFiles = fileInput.current.files;
    if (curFiles.length === 0) {
      setTextContent("No files currently selected for upload");
    } else {
      for (const file of curFiles) {
        if (validFileType(file)) {
          setTextContent(
            `File name: ${file.name}, file size ${returnFileSize(file.size)}.`
          );
          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);
          preview.appendChild(image);
        } else {
          setTextContent(
            `File name ${file.name}: Not a valid file type. Update your selection.`
          );
        }
      }
    }
  };

  const onRemoveImage = () => {
    fileInput.current.value = "";
    previewDiv.current.textContent = "";
    setTextContent("No file to preview");
  };

  return (
    <React.Fragment>
      <Grid container>
        <Typography variant="h6" gutterBottom>
          Your trademark
        </Typography>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="radio-option-1">
                What do you want to register as a trademark?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-option-1"
                name="trademarkType"
                value={formValues.trademarkType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Text"
                  control={<Radio />}
                  label="One word or one phrase in plain text"
                />
                <FormControlLabel
                  value="Logo"
                  control={<Radio />}
                  label="A single logo (with or without text)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formValues.trademarkType === "Text" ? (
            <Grid item xs={12}>
              <br />
              <TextField
                required
                id="trademarkText"
                name="trademarkText"
                label="Type the word or phrase you would like to trademark"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                value={formValues.trademarkText}
                onChange={handleChange}
              />
              <br />
              <br />
              <h3>Your Trademark</h3>
              <div className="your-trademark">{formValues.trademarkText}</div>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <p>
                <b>Upload you logo</b>
              </p>
              <p>
                Logos must be in JPEG (.jpg, .jpeg), PNG (.png) or TIFF (.tiff,
                .tif)
                <br />
                <i>The file cannot exceed 10MB in size.</i>
              </p>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                href="#file-upload"
              >
                Upload a file
                <VisuallyHiddenInput
                  ref={fileInput}
                  type="file"
                  id="trademarkLogo"
                  name="trademarkLogo"
                  accept="image/png, image/jpeg, image/tif"
                  onChange={updateImageDisplay}
                />
              </Button>
              <Button sx={{ ml: 2 }} onClick={onRemoveImage}>
                Clear
              </Button>
              <br />
              <br />
              <p>{textContent}</p>
              <div ref={previewDiv} className="preview"></div>
            </Grid>
          )}
      </Grid>
    </React.Fragment>
  );
}
