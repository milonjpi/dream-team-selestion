import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";


function App() {
  return (
    <div className="full-width">
      <Header></Header>
      <Section></Section>
    </div>
  );
}

export default App;
