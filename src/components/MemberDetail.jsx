import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Title } from "../styles";
import { Link } from "react-router-dom";

export default function MemberDetail() {
  const { memberSlug } = useParams();
  const members = useSelector((state) => state.members);
  const lists = useSelector((state) => state.list);

  const member = members.find((member) => member.slug === memberSlug);
  if (!member) return <Redirect to="/memberslist" />;

  const list = () => {
    const shadi = [];
    for (let i = 0; i < member.currentlyBorrowedBooks.length; i++) {
      shadi.push(
        lists
          .filter((book) => book.id === member.currentlyBorrowedBooks[i])
          .map((book) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                alt={book.title}
                src={book.image}
                style={{
                  width: "180px",
                  height: "220px",
                  marginBottom: "25px",
                }}
              />
              <Title>
                <h5>
                  <b>Title:</b> {book.title}
                </h5>
                <p>
                  <b>Author:</b> {book.author}
                </p>
                <p>
                  <b>Genre:</b> {book.genre.join(", ")}{" "}
                </p>
              </Title>
            </div>
          ))
      );
    }
    return shadi;
  };
  return (
    <DetailWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>
          {member.firstName} {member.lastName}
        </h1>
        <h4
          style={{
            marginLeft: "25px",
            color: member.membership,
            textTransform: "uppercase",
          }}
        >
          {member.membership}
        </h4>
      </div>

      <Link to="/memberslist">
        <button
          type="button"
          class="btn btn-secondary"
          style={{ display: "flex", margin: "0 60px 20px auto" }}
        >
          Back
        </button>
      </Link>
      <h3 style={{ margin: "30px 0 35px 0", justifyContent: "center" }}>
        {member.firstName} borrowed books
      </h3>

      <p>{list()}</p>

      <Helmet>
        <title>{`${member.firstName} ${member.lastName} Details`} </title>
      </Helmet>
    </DetailWrapper>
  );
}
