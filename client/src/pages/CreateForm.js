import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ModalForm from "../components/ModalForm";
import { connect } from "react-redux";
import { postData } from "../actions/formsActions";
import FormControl from "../components/FormControl";
import { Loading } from "../components/lib";

function CreateForm({ dispatch, loading, error }) {
  const [show, setShow] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postData({
        formName: event.target.formname.value,
        questions,
        time: new Date(),
      })
    );
    event.target.reset();
    setQuestions([]);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="formname">Form name</Form.Label>
            <Form.Control type="text" id="formname" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button onClick={() => setShow(true)}>Add Questions</Button>
          </Form.Group>
          {questions.map((element, id) => (
            <FormControl
              key={id}
              question={element}
              index={id}
              required={false}
            />
          ))}
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
              Save Form
            </Button>
          </Form.Group>
        </Container>
      </Form>
      {show && (
        <ModalForm
          modalState={show}
          showModal={setShow}
          addNewQuestion={addQuestion}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.forms.loading,
  error: state.forms.error,
});

export default connect(mapStateToProps)(CreateForm);
