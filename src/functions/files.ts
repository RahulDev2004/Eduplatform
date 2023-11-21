import { FileObject, FileObjectsPage } from "openai/resources/files.mjs";
import { openai } from "./openai";

export async function uploadFile(file: File): Promise<FileObject> {
  return openai.files.create({
    file: file,
    purpose: "assistants"
  });
}

export async function getFiles(): Promise<FileObjectsPage> {
  const response = await openai.files.list();
  return response
}
