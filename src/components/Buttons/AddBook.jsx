import { Link } from "react-router-dom";

export default function AddBook() {
  return (
    <Link to="/bookslist/new">
      <button
        type="button"
        class="btn btn-secondary"
        style={{ display: "flex", margin: "20px 60px 10px auto" }}
      >
        Add new Book
      </button>

      {/* <AddButtonStyled></AddButtonStyled> */}
    </Link>
  );
}
