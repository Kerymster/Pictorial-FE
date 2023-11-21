/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from "formik";

interface IFormInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  helperText?: string;
  label?: string;
}

export const FormTextAreaInput = ({
  name,
  placeholder,
  id,
  label,
  helperText = "",
  ...inputProps
}: IFormInputProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => {
        const hasError = meta.touched && !!meta.error;
        const errorMessage = hasError ? meta.error : "";

        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id ?? ""}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            {helperText && (
              <span className="text-xs font-light text-slate-400 mb-1">
                {helperText}
              </span>
            )}
            <div className="relative rounded-md shadow-sm">
              <textarea
                {...field}
                name={name}
                id={id}
                className={`block w-full pr-3 ${
                  hasError
                    ? "border-red-300 placeholder-red-300 focus:border-red-500 focus:ring-red-500 text-red-900"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                } focus:outline-none  sm:text-sm rounded-md`}
                placeholder={placeholder}
                aria-invalid="true"
                {...inputProps}
              />
            </div>
            {hasError && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errorMessage}
              </p>
            )}
          </div>
        );
      }}
    </Field>
  );
};
