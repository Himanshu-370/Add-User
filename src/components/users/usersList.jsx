import userEvent from "@testing-library/user-event";
import React from "react";
import Card from "../ui/card";
import classes from "./userslist.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({userEvent.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
