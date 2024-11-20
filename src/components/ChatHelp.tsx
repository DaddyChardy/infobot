import { AiOutlineContacts } from "react-icons/ai";
import { MdEventNote, MdOutlineHelp } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { RiBookOpenLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";

const chatData = [
  {
    title: "School Directory ",
    icon: <AiOutlineContacts />,
    iconColor: "#3b82f6", // Blue
  },
  {
    title: "Requirements",
    icon: <FaUserGraduate />,
    iconColor: "#10b981", // Green
  },
  {
    title: "Announcements",
    icon: <MdEventNote />,
    iconColor: "#fbbf24", // Yellow
  },
  {
    title: "Resources",
    icon: <RiBookOpenLine />,
    iconColor: "#8b5cf6", // Purple
  },
  {
    title: "Technical Support",
    icon: <FiMonitor />,
    iconColor: "#ef4444", // Red
  },
  {
    title: "General Inquiries",
    icon: <MdOutlineHelp />,
    iconColor: "#6b7280", // Gray
  },
];

const ChatHelp = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-3">
      {chatData?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border border-primary-foreground/10 px-4 py-2 rounded-full hover:bg-primary-foreground/10 cursor-pointer duration-300 ease-in-out"
        >
          {item?.icon && (
            <span style={{ color: item?.iconColor }} className="text-xl">
              {item?.icon}
            </span>
          )}
          <p className="text-sm font-medium tracking-wide">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatHelp;
