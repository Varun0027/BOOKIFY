import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../../Assets/Css/User.css';
import SidePanel from './sidepanel';

function Users() {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const sampleUsers = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: 'pass1' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: 'pass2' },
    ];
    setUsers(sampleUsers);
  }, []);

  const deleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };

  return (
    <div>
      <Header/>
      <div className="user-container">
       <SidePanel/>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">
                      Edit
                    </Link>
                    <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
