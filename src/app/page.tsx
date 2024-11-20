import ChatInput from "@/src/components/ChatInput";
import ChatHelp from "@/src/components/ChatHelp";
import Image from "next/image";
import DepEdLogo from "@/src/app/assets/images/deped.png"; // Import the image

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
        {/* Logo */}
        <Image 
          src={DepEdLogo} 
          alt="DepEd Logo" 
          width={100} 
          height={100} 
          className="rounded-md" // Add styles if needed
        />
        
        {/* Welcome Text */}
        <h2 className="text-3xl font-semibold text-primary-foreground">
          Welcome to the DepEd Tandag City Division Infobot! 🌟
        </h2>
        <h3 className="text-base font-medium text-primary-foreground">
          How can I assist you today?
        </h3>
        
        {/* Components */}
        <ChatInput />
        <ChatHelp />
      </div>
    </main>
  );
}
