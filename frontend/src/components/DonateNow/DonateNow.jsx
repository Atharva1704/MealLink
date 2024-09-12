import { useState } from "react";
import "./DonateNow.css";
import { useFormik } from "formik";
import { donateSchema } from "../../schemas/DonateFood";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonateNow = () => {
  const navigate = useNavigate();

  // Form submission handler
  const onSubmit = async (values, onSubmitProps) => {
    try {
      // Send form data to the backend
      const response = await axios.post("http://your-backend-api-url/donate", values);
      console.log("Response from backend:", response.data);
      
      // Handle successful submission
      onSubmitProps.resetForm();
      navigate("/Donor/Thankyou");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  // Formik hook for form management
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    // Initial form values
    initialValues: {
      name: "",
      type: "",
      quantity: "",
      expiry: "",
      expiryTime: "",
      serving: "",
    },
    // Form validation schema
    validationSchema: donateSchema,
    // Submission function
    onSubmit,
  });

  return (
    <div className="mainee">
      <h1 className="titlee">DONATION DETAILS</h1>
      <form className="formee" onSubmit={handleSubmit} autoComplete="off">
        {/* Name input */}
        <div className="alignee">
        <div className="divee">
          <label htmlFor="name" className="label">
            Dish Name
          </label>
          <input
            value={values.name}
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="Enter your Name"
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        {/* Type input (dropdown) */}
        <div className="divee">
          <label htmlFor="type" className="label">
            Type
          </label>
          <select
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
            id="type"
            className={errors.type && touched.type ? "input-error" : ""}
          >
            <option value="">Select type</option>
            <option value="organic">Veg</option>
            <option value="inorganic">Non Veg</option>
          </select>
          {errors.type && touched.type && (
            <p className="error">{errors.type}</p>
          )}
        </div>

        {/* Quantity input */}
        <div className="divee">
          <label htmlFor="quantity" className="label">
            Quantity (in Kg){" "}
          </label>
          <input
            value={values.quantity}
            onChange={handleChange}
            id="quantity"
            type="number"
            placeholder="Enter quantity in kg"
            onBlur={handleBlur}
            className={errors.quantity && touched.quantity ? "input-error" : ""}
          />
          {errors.quantity && touched.quantity && (
            <p className="error">{errors.quantity}</p>
          )}
        </div>

        {/* Serving input */}
        <div className="divee">
          <label htmlFor="serving" className="label">
            Contact Number{" "}
          </label>
          <input
            value={values.serving}
            onChange={handleChange}
            id="serving"
            type="number"
            placeholder="Enter Contact Number"
            onBlur={handleBlur}
            className={errors.serving && touched.serving ? "input-error" : ""}
          />
          {errors.serving && touched.serving && (
            <p className="error">{errors.serving}</p>
          )}
        </div>

        {/* Expiry Date input */}
        <div className="divee">
          <label htmlFor="expiry" className="label">
            Expiry Date{" "}
          </label>
          <input
            value={values.expiry}
            onChange={handleChange}
            id="expiry"
            type="date"
            onBlur={handleBlur}
            className={errors.expiry && touched.expiry ? "input-error" : ""}
          />
          {errors.expiry && touched.expiry && (
            <p className="error">{errors.expiry}</p>
          )}
        </div>

        {/* Expiry Time input */}
        <div className="divee">
          <label htmlFor="expiryTime" className="label">
            Expiry Time (in Hr){" "}
          </label>
          <input
            value={values.expiryTime}
            onChange={handleChange}
            id="expiryTime"
            type="number"
            placeholder="Expiry for Food (in Hr)"
            onBlur={handleBlur}
            className={
              errors.expiryTime && touched.expiryTime ? "input-error" : ""
            }
          />
          {errors.expiryTime && touched.expiryTime && (
            <p className="error">{errors.expiryTime}</p>
          )}
        </div>
        </div>

        {/* Submit button */}
        <button className="btnee" onClick={()=>{
          navigate("/Donor/Thankyou");
        }} disabled={isSubmitting} type="submit">
          Submit
        </button>

      </form>
    </div>
  );
};

export default DonateNow;
