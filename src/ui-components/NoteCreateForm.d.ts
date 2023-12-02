/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteCreateFormInputValues = {
    trademarkType?: string;
    trademarkText?: string;
    trademarkLogo?: string;
    ownerType?: string;
    ownerName?: string;
    abnAcn?: string;
    email?: string;
    phone?: string;
    address1?: string;
    suburb?: string;
    postcode?: string;
    state?: string;
    country?: string;
};
export declare type NoteCreateFormValidationValues = {
    trademarkType?: ValidationFunction<string>;
    trademarkText?: ValidationFunction<string>;
    trademarkLogo?: ValidationFunction<string>;
    ownerType?: ValidationFunction<string>;
    ownerName?: ValidationFunction<string>;
    abnAcn?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address1?: ValidationFunction<string>;
    suburb?: ValidationFunction<string>;
    postcode?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteCreateFormOverridesProps = {
    NoteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trademarkType?: PrimitiveOverrideProps<TextFieldProps>;
    trademarkText?: PrimitiveOverrideProps<TextFieldProps>;
    trademarkLogo?: PrimitiveOverrideProps<TextFieldProps>;
    ownerType?: PrimitiveOverrideProps<TextFieldProps>;
    ownerName?: PrimitiveOverrideProps<TextFieldProps>;
    abnAcn?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    address1?: PrimitiveOverrideProps<TextFieldProps>;
    suburb?: PrimitiveOverrideProps<TextFieldProps>;
    postcode?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteCreateFormProps = React.PropsWithChildren<{
    overrides?: NoteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onSuccess?: (fields: NoteCreateFormInputValues) => void;
    onError?: (fields: NoteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onValidate?: NoteCreateFormValidationValues;
} & React.CSSProperties>;
export default function NoteCreateForm(props: NoteCreateFormProps): React.ReactElement;
