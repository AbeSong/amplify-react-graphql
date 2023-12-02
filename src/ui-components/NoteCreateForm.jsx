/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
export default function NoteCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    trademarkType: "",
    trademarkText: "",
    trademarkLogo: "",
    ownerType: "",
    ownerName: "",
    abnAcn: "",
    email: "",
    phone: "",
    address1: "",
    suburb: "",
    postcode: "",
    state: "",
    country: "",
  };
  const [trademarkType, setTrademarkType] = React.useState(
    initialValues.trademarkType
  );
  const [trademarkText, setTrademarkText] = React.useState(
    initialValues.trademarkText
  );
  const [trademarkLogo, setTrademarkLogo] = React.useState(
    initialValues.trademarkLogo
  );
  const [ownerType, setOwnerType] = React.useState(initialValues.ownerType);
  const [ownerName, setOwnerName] = React.useState(initialValues.ownerName);
  const [abnAcn, setAbnAcn] = React.useState(initialValues.abnAcn);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [address1, setAddress1] = React.useState(initialValues.address1);
  const [suburb, setSuburb] = React.useState(initialValues.suburb);
  const [postcode, setPostcode] = React.useState(initialValues.postcode);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTrademarkType(initialValues.trademarkType);
    setTrademarkText(initialValues.trademarkText);
    setTrademarkLogo(initialValues.trademarkLogo);
    setOwnerType(initialValues.ownerType);
    setOwnerName(initialValues.ownerName);
    setAbnAcn(initialValues.abnAcn);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setAddress1(initialValues.address1);
    setSuburb(initialValues.suburb);
    setPostcode(initialValues.postcode);
    setState(initialValues.state);
    setCountry(initialValues.country);
    setErrors({});
  };
  const validations = {
    trademarkType: [],
    trademarkText: [],
    trademarkLogo: [],
    ownerType: [],
    ownerName: [],
    abnAcn: [],
    email: [],
    phone: [],
    address1: [],
    suburb: [],
    postcode: [],
    state: [],
    country: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          trademarkType,
          trademarkText,
          trademarkLogo,
          ownerType,
          ownerName,
          abnAcn,
          email,
          phone,
          address1,
          suburb,
          postcode,
          state,
          country,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createNote.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteCreateForm")}
      {...rest}
    >
      <TextField
        label="Trademark type"
        isRequired={false}
        isReadOnly={false}
        value={trademarkType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType: value,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.trademarkType ?? value;
          }
          if (errors.trademarkType?.hasError) {
            runValidationTasks("trademarkType", value);
          }
          setTrademarkType(value);
        }}
        onBlur={() => runValidationTasks("trademarkType", trademarkType)}
        errorMessage={errors.trademarkType?.errorMessage}
        hasError={errors.trademarkType?.hasError}
        {...getOverrideProps(overrides, "trademarkType")}
      ></TextField>
      <TextField
        label="Trademark text"
        isRequired={false}
        isReadOnly={false}
        value={trademarkText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText: value,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.trademarkText ?? value;
          }
          if (errors.trademarkText?.hasError) {
            runValidationTasks("trademarkText", value);
          }
          setTrademarkText(value);
        }}
        onBlur={() => runValidationTasks("trademarkText", trademarkText)}
        errorMessage={errors.trademarkText?.errorMessage}
        hasError={errors.trademarkText?.hasError}
        {...getOverrideProps(overrides, "trademarkText")}
      ></TextField>
      <TextField
        label="Trademark logo"
        isRequired={false}
        isReadOnly={false}
        value={trademarkLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo: value,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.trademarkLogo ?? value;
          }
          if (errors.trademarkLogo?.hasError) {
            runValidationTasks("trademarkLogo", value);
          }
          setTrademarkLogo(value);
        }}
        onBlur={() => runValidationTasks("trademarkLogo", trademarkLogo)}
        errorMessage={errors.trademarkLogo?.errorMessage}
        hasError={errors.trademarkLogo?.hasError}
        {...getOverrideProps(overrides, "trademarkLogo")}
      ></TextField>
      <TextField
        label="Owner type"
        isRequired={false}
        isReadOnly={false}
        value={ownerType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType: value,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.ownerType ?? value;
          }
          if (errors.ownerType?.hasError) {
            runValidationTasks("ownerType", value);
          }
          setOwnerType(value);
        }}
        onBlur={() => runValidationTasks("ownerType", ownerType)}
        errorMessage={errors.ownerType?.errorMessage}
        hasError={errors.ownerType?.hasError}
        {...getOverrideProps(overrides, "ownerType")}
      ></TextField>
      <TextField
        label="Owner name"
        isRequired={false}
        isReadOnly={false}
        value={ownerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName: value,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.ownerName ?? value;
          }
          if (errors.ownerName?.hasError) {
            runValidationTasks("ownerName", value);
          }
          setOwnerName(value);
        }}
        onBlur={() => runValidationTasks("ownerName", ownerName)}
        errorMessage={errors.ownerName?.errorMessage}
        hasError={errors.ownerName?.hasError}
        {...getOverrideProps(overrides, "ownerName")}
      ></TextField>
      <TextField
        label="Abn acn"
        isRequired={false}
        isReadOnly={false}
        value={abnAcn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn: value,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.abnAcn ?? value;
          }
          if (errors.abnAcn?.hasError) {
            runValidationTasks("abnAcn", value);
          }
          setAbnAcn(value);
        }}
        onBlur={() => runValidationTasks("abnAcn", abnAcn)}
        errorMessage={errors.abnAcn?.errorMessage}
        hasError={errors.abnAcn?.hasError}
        {...getOverrideProps(overrides, "abnAcn")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email: value,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone: value,
              address1,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Address1"
        isRequired={false}
        isReadOnly={false}
        value={address1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1: value,
              suburb,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.address1 ?? value;
          }
          if (errors.address1?.hasError) {
            runValidationTasks("address1", value);
          }
          setAddress1(value);
        }}
        onBlur={() => runValidationTasks("address1", address1)}
        errorMessage={errors.address1?.errorMessage}
        hasError={errors.address1?.hasError}
        {...getOverrideProps(overrides, "address1")}
      ></TextField>
      <TextField
        label="Suburb"
        isRequired={false}
        isReadOnly={false}
        value={suburb}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb: value,
              postcode,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.suburb ?? value;
          }
          if (errors.suburb?.hasError) {
            runValidationTasks("suburb", value);
          }
          setSuburb(value);
        }}
        onBlur={() => runValidationTasks("suburb", suburb)}
        errorMessage={errors.suburb?.errorMessage}
        hasError={errors.suburb?.hasError}
        {...getOverrideProps(overrides, "suburb")}
      ></TextField>
      <TextField
        label="Postcode"
        isRequired={false}
        isReadOnly={false}
        value={postcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode: value,
              state,
              country,
            };
            const result = onChange(modelFields);
            value = result?.postcode ?? value;
          }
          if (errors.postcode?.hasError) {
            runValidationTasks("postcode", value);
          }
          setPostcode(value);
        }}
        onBlur={() => runValidationTasks("postcode", postcode)}
        errorMessage={errors.postcode?.errorMessage}
        hasError={errors.postcode?.hasError}
        {...getOverrideProps(overrides, "postcode")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state: value,
              country,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trademarkType,
              trademarkText,
              trademarkLogo,
              ownerType,
              ownerName,
              abnAcn,
              email,
              phone,
              address1,
              suburb,
              postcode,
              state,
              country: value,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
