import "./App.css";
import Accordion from "./component/accordion/Accordion";
import AutoTimer from "./component/autoTimer/AutoTimer";
import Cataloge from "./component/cataloge/Cataloge";
import Theme from "./component/theme/Theme";
import UsersTable from "./component/usersTable/UsersTable";

function App() {
  return (
    <>
      <div className="title">
        <h1>Practice-CSS-React-2</h1>
        <Theme />
      </div>
      <UsersTable />
      <Accordion />
      <Cataloge />
      <AutoTimer />
    </>
  );
}

export default App;
