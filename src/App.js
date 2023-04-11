import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
