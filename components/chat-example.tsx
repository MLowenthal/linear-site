import * as React from "react";
import { cn } from "../app/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./avatar";

const users = [
  { userId: 0, name: "Cristina Cordova", avatar: "/img/cjc.jpeg" },
  { userId: 1, name: "Max Lowenthal", avatar: "/img/headshot.jpeg" },
  { userId: 2, name: "Casey Bertenthal", avatar: "/img/cb.jpeg" },
];

const messages = [
  { role: "agent", userId: 2, time: "10:45AM", content: "Hey Max, Can you let me know how we're pacing towards our plan for H1? I need the info to help with headcount planning." },
  { role: "user", userId: 1, time: "10:47AM", content: "Sure! Right now we're on track for 98% of H1 plan, but there are a few deals in flight that could push us over the edge." },
  { role: "user", userId: 1, time: "10:50AM", content: "I'm also in the midst of finalizing H2 Plan for review, should have it ready by our 1:1 later this week." },
];

export function CardsChat() {
  return (
    <div className="flex justify-center items-start w-full pt-4">
      <div className="flex flex-col space-y-4 pb-4 w-3/5">
        {messages.slice(0, 3).map((message, index) => {
          const user = users.find(u => u.userId === message.userId);
          const isUserMessage = message.role === "user";
          return (
            <div key={index} className={cn("flex items-end gap-2 w-full", isUserMessage ? "justify-end" : "justify-start")}>
              {!isUserMessage ? (
                <>
                  <Avatar>
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="relative flex w-full flex-col rounded-lg px-3 pt-5 pb-2 text-sm text-left shadow-md transition-all duration-150 ease-in-out text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter backdrop-blur-md hover:bg-opacity-20">
                    <div className="absolute top-1 left-3 text-xs text-[rgb(133,134,153)]">
                      {message.time}
                    </div>
                    <div className="mt-2">
                      {message.content}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative flex w-full flex-col rounded-lg px-3 pt-5 pb-2 text-sm text-left shadow-md transition-all duration-150 ease-in-out text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter backdrop-blur-md hover:bg-opacity-20">
                    <div className="absolute top-1 left-3 text-xs text-[rgb(133,134,153)]">
                      {message.time}
                    </div>
                    <div className="mt-2">
                      {message.content}
                    </div>
                  </div>
                  <Avatar>
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
