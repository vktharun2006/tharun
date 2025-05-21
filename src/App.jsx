import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


    <>
      import { useState } from 'react'
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "john", email: "john@gmail.com" },
    { id: 2, name: "doe", email: "doe@gmail.com" },
  ])

  return (
    <>
      {users.map((user) => (
        <ol key={user.id}>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ol>
      ))}
    </>
  );
}

export default App;
    </>
  )
}

export default App
