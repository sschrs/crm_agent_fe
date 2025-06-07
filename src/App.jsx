import {Result} from "./components/analyse/Result";
import { Chat } from "./components/chat/Chat";
import {TopBar} from "./components/topbar/TopBar";

function App() {
  return (
    <div className="container my-4">
      <TopBar />
      <Result />
      <Chat />
    </div>
  )
}

export default App
