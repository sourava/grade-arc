import React from "react";
import Table from "./Table";

export default function Task3({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Image",
        accessor: "image",
      },
    ],
    []
  );

  const tableData = React.useMemo(
    () =>
      data.data.map((row) => {
        let name = `${row.name?.title} ${row.name?.first} ${row.name?.last}`;
        return {
          name,
          email: row.email,
          username: row.login?.username,
          password: row.login?.password,
          image: <img src={row.picture?.medium} alt={name} />,
        };
      }),
    []
  );

  return <Table columns={columns} data={tableData} />;
}
