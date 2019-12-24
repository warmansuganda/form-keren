import React from 'react';
import { Provider } from "react-redux";
import Builder from "./components/FormBuilder";
import Generator from "./components/FormGenerator";
import store from "./store";

import "react-rangeslider/lib/index.css";
import './assets/css/font-awesome.min.css';
import "./assets/css/bootstrap.min.css";
import "./App.scss";

const FormBuilder = ({ onSubmit, items }) => (
    <Builder
      onSubmit={onSubmit}
      items={items}
    />
)

const FormGenerator = ({
	formData,
	responseData,
	readOnly,
	onSubmit
}) => (
    <Generator
        formData={formData}
        responseData={responseData}
        readOnly={readOnly}
        onSubmit={onSubmit}
    />
)

export { FormBuilder, FormGenerator }
