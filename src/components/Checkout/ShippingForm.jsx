import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ShippingForm.module.css";

const ShippingForm = () => {
  const ShippingSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
  });

  return (
    <div className={styles.ShippingForm}>
      <h2>Shipping Form</h2>

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
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.pair}>
              <div className={styles.formItem}>
                <label for="firstName">First Name</label>
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div className={styles.errors}>{errors.firstName}</div>
                ) : null}
              </div>

              <div className={styles.formItem}>
                <label for="lastName">Last Name</label>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div className={styles.errors}>{errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.pair}>
              <div className={styles.formItem}>
                <label for="email">Email</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div className={styles.errors}>{errors.email}</div>
                ) : null}
              </div>

              <div className={styles.formItem}>
                <label for="phoneNumber">Phone Number</label>
                <Field name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className={styles.errors}>{errors.phoneNumber}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.formItem}>
              <label for="dateOfBirth">Date of Birth</label>
              <Field name="dateOfBirth" />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <div className={styles.errors}>{errors.dateOfBirth}</div>
              ) : null}
            </div>

            <div className={styles.formItem}>
              <label for="address">Address</label>
              <Field name="address" />
              {errors.address && touched.address ? (
                <div className={styles.errors}>{errors.address}</div>
              ) : null}
            </div>

            <div className={styles.trio}>
              <div className={styles.formItem}>
                <label for="city">City</label>
                <Field name="city" />
                {errors.city && touched.city ? (
                  <div className={styles.errors}>{errors.city}</div>
                ) : null}
              </div>

              <div className={styles.formItem}>
                {" "}
                <label for="state">State</label>
                <Field name="state" />
                {errors.state && touched.state ? (
                  <div className={styles.errors}>{errors.state}</div>
                ) : null}
              </div>
              <div className={styles.formItem}>
                {" "}
                <label for="zipCode">ZipCode</label>
                <Field name="zipCode" />
                {errors.zipCode && touched.zipCode ? (
                  <div className={styles.errors}>{errors.zipCode}</div>
                ) : null}
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;
