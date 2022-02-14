import React from "react";
import Form from "react-bootstrap/Form";
export default function FormControl({ question, index, required }) {
  if (["Multichoices", "RadioChoices"].includes(question.type)) {
    const options = question.textArea.split("\n");
    const type = question.type === "Multichoices" ? "checkbox" : "radio";
    return (
      <Form.Group className="mb-3">
        <Form.Label>{question.title}</Form.Label>
        {options.map((element, id) => (
          <Form.Check
            key={`${type}-${index}-${id}`}
            name="group1"
            type={type}
            id={`${type}-${index}-${id}`}
            label={element}
          />
        ))}
      </Form.Group>
    );
  } else {
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor={`text-${index}`}>{question.title}</Form.Label>
        <Form.Control type="text" id={`text-${index}`} required={required} />
      </Form.Group>
    );
  }
}
