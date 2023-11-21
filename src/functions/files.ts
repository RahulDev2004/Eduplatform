import { FileObjectsPage } from "openai/resources/files.mjs";
import { openai } from "./openai";

export async function uploadFile(file: File): Promise<string> {
  const response = await openai.files.create({
    file: file,
    purpose: "assistants"
  });
  return response.id;
}

export async function getFiles(): Promise<FileObjectsPage> {
  const response = await openai.files.list();
  return response
}
