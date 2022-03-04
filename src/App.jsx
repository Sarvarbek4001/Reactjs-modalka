import "./App.css";
import React from "react";
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Footer} from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"
import {Modal} from "./Components/Modal/Modal"
function App() {
   const elModal = React.useRef();
  return(
     <div className="App">
        <button onClick={()=>elModal.current.classList.add('modal-open')}>Open</button>
        <Modal elModal={elModal}/>
     </div>
  )
}
export default App;
