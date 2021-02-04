import { createMember } from "../store/actions";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../styles";

export default function MemberForm() {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    membership: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMember(member));
    history.push("/memberslist");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create new Member</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Member First Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={member.firstName}
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Member Last Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={member.lastName}
              type="text"
              name="lastName"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Member's membership
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={member.membership}
              type="text"
              name="membership"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <FormButton>
          <button type="submit" class="btn btn-primary align-self-end">
            Create
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
}
