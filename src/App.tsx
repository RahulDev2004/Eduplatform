
import { ChatInterface } from "./components/chatinterface"
import { Sidebar } from "./components/sidebar"


function App() {

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <ChatInterface />
    </div>
  )
}

export default App;
