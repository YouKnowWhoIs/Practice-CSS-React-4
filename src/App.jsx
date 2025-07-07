import Filter from "./components/Filter/Filter";
import Modal from "./components/Modal/Modal";
import SmartCounter from "./components/SmartCounter/SmartCounter";
import ToDo from "./components/ToDo/ToDo";
import UserCard from "./components/UserCard/UserCard";
import "./style/app/App.css";

function App() {
  return (
    <>
      <h1 id="title">Practice CSS React 4</h1>
      <UserCard />
      <SmartCounter />
      <Filter />
      <Modal />
      <ToDo />
    </>
  );
}

export default App;
