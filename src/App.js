import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pages from "./componets/pages";
import { CourseDataProvider } from "./componets/pages/CourseDataContext";

function App() {
  return (
    <>
      <CourseDataProvider>
        <Pages />
      </CourseDataProvider>
    </>
  );
}

export default App;
