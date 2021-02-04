import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <Link to="/memberslist/new">
      <button
        type="button"
        class="btn btn-secondary"
        style={{ display: "flex", margin: "60px 60px 30px auto" }}
      >
        Add new member
      </button>

      {/* <AddButtonStyled></AddButtonStyled> */}
    </Link>
  );
}
