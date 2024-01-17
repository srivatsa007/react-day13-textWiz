
import "@fontsource/geist-sans"; // Defaults to weight 400
// import "@fontsource/geist-sans/400.css"; // Specify weight
// import "@fontsource/geist-sans/400-italic.css"; // Specify weight and style
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Contacts from "./Components/pages/Contacts"
import 'react-toastify/dist/ReactToastify.min.css'

const Router = createBrowserRouter(
  [{
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contacts />,
  },]
);

function App() {
  

  return (
    <RouterProvider router={Router}/>
  )
}

export default App
