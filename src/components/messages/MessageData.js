import React from "react";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import avatar3 from "../../assets/img/avatar3.png";
import avatar4 from "../../assets/img/avatar4.png";
import avatar5 from "../../assets/img/avatar5.png";
import avatar6 from "../../assets/img/avatar6.png";
import avatar7 from "../../assets/img/avatar7.png";

const MessageData = () => {
  const messageData = [
    {
      id: 1,
      sender: "Michael M. Thompson",
      avatar: avatar1,
      message: "Hi there! How are you doing today?",
      date: "Apr 23, 2022",
      unreadAmount: "8",
    },
    {
      id: 2,
      sender: "Mary R. Boddie",
      avatar: avatar2,
      message: "Hey, did you catch the game last night?",
      date: "Dec 12, 2023",
      unreadAmount: "8",
    },
    {
      id: 3,
      sender: "Lynn M. Pena",
      avatar: avatar3,
      message: "Hi there! How are you doing today?",
      date: "Aug 01, 2024",
      unreadAmount: "8",
    },
    {
      id: 4,
      sender: "Jonathon A. Jock",
      avatar: avatar4,
      message: "What are your plans for the weekend?",
      date: "May 09, 2025",
    },
    {
      id: 5,
      sender: "Lora D. Ramirez",
      avatar: avatar5,
      message: "I can't wait to try out that new restaurant in town!",
      date: "Jan 17, 2026",
    },
    {
      id: 6,
      sender: "Malcolm N. Hammond",
      avatar: avatar6,
      message: "How's work been treating you lately?",
      date: "Oct 25, 2026",
    },
    {
      id: 7,
      sender: "Robert G. Chatman",
      avatar: avatar7,
      message: "Have you seen any good movies or TV shows lately?",
      date: "Jun 03, 2027",
    },
  ];
  return (
    <div>
      {messageData.map((data) => {
        return (
          <a href="" key={data.id} className="flex mb-8 justify-between items-start">
            <img src={data.avatar} className="circle bg-transparent rounded-full" alt="" />
            <div className="w-full ml-2">
                <p className="text-sm font-semibold">{
                    data.sender
                }
                <p className="text-xs">
                    {
                        data.message.length > 20 ? data.message.slice(0, 20) + "..." : data.message
                    }
                </p>
                </p>
            </div>
            <div className="text-right dt pt-1">
                <p className="text-xs">{
                    data.date
                }
                </p>
                {
                    data.unreadAmount ? <p className="unread">{data.unreadAmount}</p> : ""
                }
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MessageData;
