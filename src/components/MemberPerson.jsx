import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function MemberPerson(props) {
  const [color, setColor] = useState("");

  const member = props.member;

  return (
    <div
      class="card mx-3 mb-3 bg-secondary"
      style={{
        width: "18rem",
      }}
    >
      <div class="card-body" style={{ backgroundColor: member.membership }}>
        <Link to={`/memberslist/${member.slug}`} style={{ color: "white" }}>
          <h5 class="card-title">
            {member.firstName} {member.lastName}
          </h5>
        </Link>
        <h6 class="card-subtitle mb-2  text-right" style={{ color: "white" }}>
          {member.membership}
        </h6>
      </div>
    </div>
  );
}

// <ProductWrapper>
//   {/* <Link to={`/products/${product.slug}`}>
//      </Link> */}

//   <Title>
//     <h5>
//       <b>Name:</b> {member.firstName} {member.lastName}
//     </h5>
//     <p>
//       <b>membership:</b> {member.membership}
//     </p>
//     {/* <p>
//       <b>Genre:</b> {member.genre.join(", ")}{" "}
//     </p> */}
//   </Title>
// </ProductWrapper>
