import { useState } from "react";
import "./App.css";
import Account from "./Components/Account/Account";
import UserInput from "./Components/UserInput/UserInput";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const link = "https://api.github.com/users/";
  const [username, setUsername] = useState("");
  const [userData, setdata] = useState([]);
  const [error, setError] = useState("");
  const symbols = [",", "!", ".", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-"];

  function fetchAccountsHandler() {
    setIsLoading(true);
    fetch(link + username, {
      method: "GET",
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (data) {
        setdata({
          account: data.login,
          img: data.avatar_url,
          page: data.html_url,
        });
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        if (
          error === 404 &&
          username.trim().length !== 0 &&
          !symbols.includes(username) &&
          !username.includes(" ")
        ) {
          setError({
            title: "Error!",
            message: "No Account Found",
          });
        }
        console.log(error.message);
      });
  }

  return (
    <div className="page">
      <UserInput
        username={username}
        setUsername={setUsername}
        fetchAccountsHandler={fetchAccountsHandler}
        error={error}
        setError={setError}
        symbols={symbols}
      />
      {!isLoading && <Account userData={userData} />}
      {isLoading && <p className="isloading">Loading...</p>}
    </div>
  );
}

export default App;
