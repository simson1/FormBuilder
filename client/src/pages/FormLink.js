import React from "react";
import { useParams } from "react-router-dom";
import FormControl from "../components/FormControl";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { fetchForm } from "../actions/formActions";
import { Loading } from "../components/lib";
import axios from "axios";

function FormLink({ dispatch, data, loading, error }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const answers = data.questions.map((element, index) => {
      let answer;
      if (["Multichoices", "RadioChoices"].includes(element.type)) {
        const type = element.type === "Multichoices" ? "checkbox" : "radio";
        const options = element.textArea.split("\n");
        answer = options.filter(
          (option, optionIndex) =>
            event.target.elements[`${type}-${index}-${optionIndex}`].checked
        );
      } else {
        answer = event.target.elements[`text-${index}`].value;
      }
      return {
        title: element.title,
        answer,
      };
    });
    axios
      .post("/surveys", { formID: data._id, answers })
      .then((response) => {
        console.log("submitted");
      })
      .catch((error) => {
        console.log("surveys fail");
      });

    event.target.reset();
  };

  const { formId } = useParams();
  React.useEffect(() => {
    dispatch(fetchForm(formId));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!data.questions || error) {
    return <h2>Form does exist</h2>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        {data.questions.map((element, id) => (
          <FormControl key={id} question={element} index={id} required={true} />
        ))}
        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
            Submit Form
          </Button>
        </Form.Group>
      </Container>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  data: state.form.formData,
  loading: state.form.loading,
  error: state.form.error,
});

export default connect(mapStateToProps)(FormLink);
