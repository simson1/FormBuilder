import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../actions/formsActions";
import { Loading } from "../components/lib";

function ViewForm({ dispatch, data, loading }) {
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Form Name</th>
            <th>Form URL</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.formName}</td>
              <td>
                <Link to={`/form/${element._id}`}>URL</Link>
              </td>
              <td>{new Date(element.time).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  data: state.forms.formsData,
  loading: state.forms.loading,
  error: state.forms.error,
});

export default connect(mapStateToProps)(ViewForm);
