import React, { useState } from "react";
import MemberPerson from "./MemberPerson";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddButton from "./Buttons/AddButton";

export default function BookList() {
  const members = useSelector((state) => state.members);

  const memberslist = members.map((member) => (
    <MemberPerson member={member} key={member.id} />
  ));
  return (
    <div>
      <AddButton />
      <h1 style={{ margin: "0 0 90px 210px" }}>Our Members</h1>
      <div class="container">
        <div class="row">{memberslist}</div>
      </div>

      <Helmet>
        <title>Members List </title>
      </Helmet>
    </div>
  );
}
