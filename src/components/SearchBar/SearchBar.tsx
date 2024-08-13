import { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (newQuery: string) => void;
}
interface FormValues {
  text: string;
}
const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (values.text.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(values.text);
    actions.resetForm();
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
