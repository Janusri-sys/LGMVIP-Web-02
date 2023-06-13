import "./index.css";
import "./App.css";
import { useState } from "react";
function App() {
    const [users, setUsers] = useState([]);
    const [hasError, setHasError] = useState(false);
      
      const loadusers = () => {
          fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((result) => setUsers(result.data))
            .catch((err) => setHasError(true));
        };
        return (
          <>
            <header>
              <a href="#" className="logo">
                <span>Lets Grow More</span>
              </a>
              <button className="btn" onClick={loadusers}>
                GET USERS
              </button>
            </header>
      
            {users.map((user) => (
              <div className="data">
                  <div class="card">
                    <div class="card-body">
                      <p class="text"><b>FIRST_NAME : </b>{user.first_name}</p>
                      <p class="text"><b>LAST_NAME : </b>{user.first_name}</p>
                      <p class="text"><b>EMAIL : </b>{user.email}</p>
                    </div>
                    <div class="image">
                      <img src={user.avatar} alt="user"></img>
                    </div>
                  </div>
  
              </div>
            ))}
          </>
        );
      }
export default App;