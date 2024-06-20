import { ContentType } from "@app/types/response";
import { CONTENT } from "@app/services/mockData";
const BACKEND_URL = process.env.BACKEND_URL ?? "https://jsonplaceholder.typicode.com/todos/1";

export async function getContent(page: string): Promise<ContentType> {
  try {
    const res = await fetch(BACKEND_URL);
    const data = await res.json();
    if (!data) {
      throw new Error("Has some thing wrong!");
    }
    return {
      ...CONTENT,
      title: `${page.toUpperCase()} ${data.title}`,
    };
  } catch (error) {
    throw new Error("Has some thing wrong!");
  }
}
