import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import { fetch_users } from "../../Redux/users/users.action";
import { styled } from "styled-components";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.userReducer);
  console.log(users);

  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState("");
  //
  useEffect(() => {
    dispatch(fetch_users);
  }, []);
  //
  const downloadCsv = () => {
    window.location.assign(
      "https://sore-erin-elk-ring.cyclic.app/users/export"
    );
  };
  return (
    <UsersMain>
      <CsvBtn onClick={downloadCsv}>EXPORT CSV</CsvBtn>
      <Table>
        <thead>
          <tr>
            <Th>S.no</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Gender</Th>
            <Th>Status</Th>
            <Th>Created At</Th>
            <Th>Updated At</Th>
            <Th>Edit</Th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={user._id}>
                <Td>{i + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.gender}</Td>
                <Td>{user.status}</Td>
                <Td>{user.created_at}</Td>
                <Td>{user.updated_at}</Td>
                <Td>
                  <button
                    onClick={() => {
                      setEditId(user._id);
                      setShowEdit(showEdit === false ? true : false);
                    }}
                  >
                    EDIT
                  </button>
                </Td>
              </tr>
            ))}
        </tbody>
      </Table>
      {showEdit && (
        <Modal>
          <EditModal
            id={editId}
            setShowEdit={setShowEdit}
            showEdit={showEdit}
          />
        </Modal>
      )}
    </UsersMain>
  );
};

export default Users;
//
const UsersMain = styled.div`
  margin-top: 4rem;
`;
const Table = styled.table`
  width: 90%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 1rem;
  max-width: 1248px;
  border: 1px solid grey;
`;
const Modal = styled.div``;
const Th = styled.th`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 3px;
  padding: 10px 3px;
  background-color: #d4d1d1;
  border: 1px solid grey;
`;
const Td = styled.td`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 3px;
  padding: 10px 3px;
`;
const CsvBtn = styled.button`
  width: 150px;
  padding: 0.6rem 0;
  border: none;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  background-color: red;
  color: white;
  font-weight: 600;
`;
