import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function ModalForm({ modalState, showModal, addNewQuestion }) {
  const handleClose = () => showModal(false);
  const [showTextArea, setshowTextArea] = React.useState(false);
  const handleSelectChange = (event) => {
    if (["Multichoices", "RadioChoices"].includes(event.target.value)) {
      setshowTextArea(true);
    } else {
      setshowTextArea(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { questiontitle, questiontype, questiontextarea } =
      event.target.elements;
    addNewQuestion({
      title: questiontitle.value,
      type: questiontype.value,
      textArea: questiontextarea?.value,
    });
    event.target.reset();
    setshowTextArea(false);
  };
  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="questionTitle">Question Title</Form.Label>
              <Form.Control type="text" id="questiontitle" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="questiontype">Question Type</Form.Label>
              <Form.Select
                id="questiontype"
                required
                onChange={handleSelectChange}
              >
                <option value="">None</option>
                <option value="Text">Text</option>
                <option value="Multichoices">Multichoice Checkbox</option>
                <option value="RadioChoices">Single Select radio</option>
              </Form.Select>
            </Form.Group>
            {showTextArea && (
              <Form.Group className="mb-3">
                <Form.Label htmlFor="questiontextarea">
                  Put each option in a seperate line
                </Form.Label>
                <Form.Control
                  as="textarea"
                  id="questiontextarea"
                  rows={6}
                  required
                />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Question
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
