import { createServerFn } from "@tanstack/react-start";
import { generateAIResponse, type ChatApiRequest, type ChatApiResponse } from "./chat-service";

export const sendChatMessage = createServerFn({ method: "POST" })
  .validator((data: ChatApiRequest) => data)
  .handler(async ({ data }): Promise<ChatApiResponse> => {
    return await generateAIResponse(data);
  });
