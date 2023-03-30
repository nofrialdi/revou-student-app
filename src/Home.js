import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [displayid, displayidupdate] = useState("");
  const [memberlist, memberupdate] = useState([]);
  const [showmenu, showmenuupdateupdate] = useState(false);
  // const usenavigate = useNavigate();
  const location = useLocation();

  //get userid users (session storage)
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let id = sessionStorage.getItem("id");
      if (id === "" || id === null) {
        // usenavigate("/");
      } else {
        displayidupdate(id);
      }
    }
  }, [location]);

  //get all data members
  useEffect(() => {
    fetch("http://localhost:8000/members")
      .then((res) => res.json())
      .then((res) => {
        memberupdate(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {showmenu && (
        <div className="header">
          <Link to={"/home"}>Home</Link>
          <span style={{ marginLeft: "70%" }}>
            Welcome <b>{displayid}</b>
          </span>
          <Link style={{ float: "right" }} to={"/"}>
            Logout
          </Link>
        </div>
      )}
      <div className="container">
        <div style={{ marginTop: 20, padding: 20, marginBottom: 20 }} className="card">
          <div className="card-haeder">
            <h3>List Data Revou FSSE Students</h3>
          </div>
        </div>
        <div className="card-body">
          <button className="btn btn-success">Add (+)</button>
        </div>
        <br></br>
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {memberlist &&
              memberlist.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>|<button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <h1 style={{ padding: 20 }} className="text-center">
          Data RevoU Students
        </h1>
        <div className="card-body">
          <button className="btn btn-success">Add (+)</button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
