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
import { getNote } from "../graphql/queries";
import { updateNote } from "../graphql/mutations";
export default function NoteUpdateForm(props) {
  const {
    id: idProp,
    note: noteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    extraField: "",
    image: "",
    extraField2: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [extraField, setExtraField] = React.useState(initialValues.extraField);
  const [image, setImage] = React.useState(initialValues.image);
  const [extraField2, setExtraField2] = React.useState(
    initialValues.extraField2
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noteRecord
      ? { ...initialValues, ...noteRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setExtraField(cleanValues.extraField);
    setImage(cleanValues.image);
    setExtraField2(cleanValues.extraField2);
    setErrors({});
  };
  const [noteRecord, setNoteRecord] = React.useState(noteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getNote.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNote
        : noteModelProp;
      setNoteRecord(record);
    };
    queryData();
  }, [idProp, noteModelProp]);
  React.useEffect(resetStateValues, [noteRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    extraField: [],
    image: [],
    extraField2: [],
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
          name,
          description: description ?? null,
          extraField: extraField ?? null,
          image: image ?? null,
          extraField2: extraField2 ?? null,
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
            query: updateNote.replaceAll("__typename", ""),
            variables: {
              input: {
                id: noteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              extraField,
              image,
              extraField2,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              extraField,
              image,
              extraField2,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Extra field"
        isRequired={false}
        isReadOnly={false}
        value={extraField}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              extraField: value,
              image,
              extraField2,
            };
            const result = onChange(modelFields);
            value = result?.extraField ?? value;
          }
          if (errors.extraField?.hasError) {
            runValidationTasks("extraField", value);
          }
          setExtraField(value);
        }}
        onBlur={() => runValidationTasks("extraField", extraField)}
        errorMessage={errors.extraField?.errorMessage}
        hasError={errors.extraField?.hasError}
        {...getOverrideProps(overrides, "extraField")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              extraField,
              image: value,
              extraField2,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Extra field2"
        isRequired={false}
        isReadOnly={false}
        value={extraField2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              extraField,
              image,
              extraField2: value,
            };
            const result = onChange(modelFields);
            value = result?.extraField2 ?? value;
          }
          if (errors.extraField2?.hasError) {
            runValidationTasks("extraField2", value);
          }
          setExtraField2(value);
        }}
        onBlur={() => runValidationTasks("extraField2", extraField2)}
        errorMessage={errors.extraField2?.errorMessage}
        hasError={errors.extraField2?.hasError}
        {...getOverrideProps(overrides, "extraField2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || noteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || noteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
