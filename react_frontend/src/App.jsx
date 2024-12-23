import { useState } from "react"
import InputBox from "./components/InputBox.component"
import Registration from "./pages/Registration.page"
import Users from "./pages/Users.page"

function App() {
  
  const [page, setPage] = useState(false);

  return (
    <div>

      {/* You can add your CSS to the App.css file in the src folder. */}
      {/* Sample CSS has been added to the App.css file for the below button for reference. */}

      {/* The button will toggle between the Registration and Users page */}

      <button className="btn" onClick={() => setPage(!page)}>
        {
          page ? "Go To Registration Page" : "Go To Users Page"
        }
      </button>

      {/* If page is true, then the Users component will be rendered, else the Registration component will be rendered */}
      {/* The Users component will display the data that is fetched from the server */}
      {/* The Registration component will send the data to the server */}

      {
        page
        ?
        <Users />
        :
        <Registration />
      }

    </div>
  )
}

export default App
