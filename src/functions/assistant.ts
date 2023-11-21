import { Thread } from "openai/resources/beta/threads/threads.mjs";
import { openai } from "./openai";
import { ThreadMessage, ThreadMessagesPage } from "openai/resources/beta/threads/messages/messages.mjs";

export async function startChat(message:string, files: string[] | undefined): Promise<Thread>{
    const thread = openai.beta.threads.create({
        messages: [
          {
            "role": "user",
            "content": message,
            "file_ids": files,
          }
        ]
      });
      return thread;
}

export async function makeRun(threadId: string, assistantId: string): Promise<void> {
    await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId
    });
}


export async function addMessageToThread(threadId: string, message: string, files: string[] | undefined): Promise<ThreadMessage> {
    return openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
        file_ids: files,
    })
}

export async function retrieveAllMessages(threadId: string): Promise<ThreadMessagesPage> {
    const thread = openai.beta.threads.messages.list(threadId);
    return thread
}

