import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ShippingForm.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShippingForm = () => {
  const navigate = useNavigate();
  const reqError = "Field required"; // error message for required fields
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    if (confirmation) {
      setIsLoading(false);
      window.setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [confirmation]);

  // regex for phone number validation: https://ihateregex.io/expr/phone/

  const ShippingSchema = Yup.object().shape({
    firstName: Yup.string().required(reqError),
    lastName: Yup.string().required(reqError),
    email: Yup.string().email("Invalid email").required(reqError),
    phoneNumber: Yup.string()
      .required(reqError)
      .matches(
        "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
        "Invalid phone number"
      ),
    dateOfBirth: Yup.string().required(reqError),
    address: Yup.string().required(reqError).min(5, "Address is too short"),
    city: Yup.string().required(reqError),
    state: Yup.string()
      .required(reqError)
      .matches(
        "^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$",
        "Invalid state code"
      ),
    zipCode: Yup.string()
      .required(reqError)
      .matches("^[0-9]{5}(?:-[0-9]{4})?$", "Invalid Zip code"),
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleFormSubmit(values) {
    setIsLoading(true);
    let response = await fetch(`https://api.mocki.io/v2/ac449b3d`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(values),
    });
    let data = await response.json();
    setConfirmation(data.message);
  }

  return (
    <div className={styles.ShippingForm}>
      <h2>Shipping Details</h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          dateOfBirth: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
        }}
        validationSchema={ShippingSchema}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className={styles.pair}>
                <div
                  className={`${styles.formItem} ${
                    errors.firstName && touched.firstName
                      ? styles.incorrect
                      : ""
                  }`}
                >
                  <label>First Name</label>
                  <Field name="firstName" />
                  {errors.firstName && touched.firstName ? (
                    <div className={styles.errors}>{errors.firstName}</div>
                  ) : null}
                </div>

                <div
                  className={`${styles.formItem} ${
                    errors.lastName && touched.lastName ? styles.incorrect : ""
                  }`}
                >
                  <label>Last Name</label>
                  <Field name="lastName" />
                  {errors.lastName && touched.lastName ? (
                    <div className={styles.errors}>{errors.lastName}</div>
                  ) : null}
                </div>
              </div>

              <div className={styles.pair}>
                <div
                  className={`${styles.formItem} ${
                    errors.email && touched.email ? styles.incorrect : ""
                  }`}
                >
                  <label>Email</label>
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className={styles.errors}>{errors.email}</div>
                  ) : null}
                </div>

                <div
                  className={`${styles.formItem} ${
                    errors.phoneNumber && touched.phoneNumber
                      ? styles.incorrect
                      : ""
                  }`}
                >
                  <label>Phone Number</label>
                  <Field name="phoneNumber" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className={styles.errors}>{errors.phoneNumber}</div>
                  ) : null}
                </div>
              </div>

              <div
                className={`${styles.formItem} ${
                  errors.dateOfBirth && touched.dateOfBirth
                    ? styles.incorrect
                    : ""
                }`}
              >
                <label>Date of Birth</label>
                <Field name="dateOfBirth" type="date" />
                {errors.dateOfBirth && touched.dateOfBirth ? (
                  <div className={styles.errors}>{errors.dateOfBirth}</div>
                ) : null}
              </div>

              <div
                className={`${styles.formItem} ${
                  errors.address && touched.address ? styles.incorrect : ""
                }`}
              >
                <label>Address</label>
                <Field name="address" />
                {errors.address && touched.address ? (
                  <div className={styles.errors}>{errors.address}</div>
                ) : null}
              </div>

              <div
                className={`${styles.formItem} ${
                  errors.city && touched.city ? styles.incorrect : ""
                }`}
              >
                <label>City</label>
                <Field name="city" />
                {errors.city && touched.city ? (
                  <div className={styles.errors}>{errors.city}</div>
                ) : null}
              </div>

              <div className={styles.duo}>
                <div
                  className={`${styles.formItem} ${
                    errors.state && touched.state ? styles.incorrect : ""
                  }`}
                >
                  <label>State Code (e.g. CA)</label>
                  <Field name="state" />
                  {errors.state && touched.state ? (
                    <div className={styles.errors}>{errors.state}</div>
                  ) : null}
                </div>
                <div
                  className={`${styles.formItem} ${
                    errors.zipCode && touched.zipCode ? styles.incorrect : ""
                  }`}
                >
                  <label>Zip Code</label>
                  <Field name="zipCode" />
                  {errors.zipCode && touched.zipCode ? (
                    <div className={styles.errors}>{errors.zipCode}</div>
                  ) : null}
                </div>
              </div>

              <div className={styles.controls}>
                <button
                  disabled={
                    Object.keys(errors).length > 0 ||
                    Object.keys(touched).length == 0
                  }
                  type="submit"
                >
                  {!isLoading && !confirmation && <span>Submit</span>}
                  {isLoading && !confirmation && <span>Submitting...</span>}
                  {!isLoading && confirmation && <span>Success!</span>}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ShippingForm;
