import { TodoProvider } from "../context/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </TodoProvider>
  );
}

export default MyApp;
