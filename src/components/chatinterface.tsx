import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";


export function ChatInterface() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dummyData = [
    { name: "File 1" },
    { name: "File 2" },
    { name: "File 3" },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    console.log(selectedFile?.name);
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", padding: "20px" }}>

      <div style={{ position: "relative", width: "85%", marginLeft: "15px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                  direction: "incoming",
                  position: "single",
                }}
              />
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}
