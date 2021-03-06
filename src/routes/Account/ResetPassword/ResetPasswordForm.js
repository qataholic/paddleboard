import React from 'react';
import { withFormik } from 'formik';
import { object as YupObject, string as YupString } from 'yup';
import Button, { ButtonColorTheme, ButtonSizeTheme, ButtonRoundedTheme } from '../../../components/Buttons/Button';
import { ReactComponent as LockIcon } from '../../../assets/icons/lock-20.svg';

const ResetPasswordForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const { email } = values;

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="email" className="block">
            <span className="block text-sm font-medium text-gray-700 leading-5">Email:</span>
            <input
              className={`${
                errors?.email && touched?.email
                  ? 'border-transparent ring-2 ring-red-600 focus:ring-red-400'
                  : 'border-gray-300 focus:ring-indigo-500'
              } bg-white block w-full mt-1 text-sm rounded-sm shadow-sm focus:outline-none focus:bg-white focus:border-transparent focus:ring-2`}
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={email}
              name="email"
            />
          </label>
          <div id="error-container" className="h-5 mt-2">
            {errors.email && touched.email && (
              <div id="feedback" className="text-xs text-red-700">
                {errors.email}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Button
          text="Send Password Reset"
          type="submit"
          color={ButtonColorTheme.primary}
          size={ButtonSizeTheme.medium}
          rounded={ButtonRoundedTheme.tiny}
          fullWidth
          hasIcon>
          <LockIcon
            className="w-5 h-5 text-indigo-500 group-hover:text-indigo-500 transition ease-in-out duration-150"
            title="lock-icon"
          />
        </Button>
      </div>
    </form>
  );
};

const ResetPasswordFormExtended = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validationSchema: YupObject().shape({
    email: YupString().email('Please enter a valid email.').required('This field is required.'),
  }),
  validateOnBlur: true,
  validateOnChange: true,

  handleSubmit: (values, FormikBag) => {
    const { email } = values;
    FormikBag.props.sendPasswordReset(email);
    FormikBag.setSubmitting(false);
  },
})(ResetPasswordForm);

export { ResetPasswordFormExtended as ResetPasswordForm };
