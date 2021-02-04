import { createBook } from "../store/actions";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../styles";

export default function BookForm() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
    genre: "",
    available: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book));
    history.push("/bookslist");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create new Book</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Book's Title
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={book.title}
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Book's Author
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={book.author}
              type="text"
              name="author"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Book's Image
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={book.image}
              type="text"
              name="image"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Book's Genre
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={book.genre}
              type="text"
              name="genre"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Book's Availablity
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "83%",
              justifyContent: "center",
            }}
          >
            <input
              value={true}
              type="radio"
              name="available"
              onChange={handleChange}
            />
            Available
            <input
              value={false}
              type="radio"
              name="available"
              onChange={handleChange}
              style={{ marginLeft: "50px" }}
            />
            Not Available
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
