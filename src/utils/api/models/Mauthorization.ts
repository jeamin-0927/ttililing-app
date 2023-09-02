import env from "@/../.env.json";

export const Authorization = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + env.OPENAI_API_KEY
};