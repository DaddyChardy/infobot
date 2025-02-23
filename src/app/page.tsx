import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ChatInput from "@/src/components/ChatInput";
import ChatHelp from "@/src/components/ChatHelp";
import { Suspense } from "react";
import Image from "next/image"; // Import the image

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
        <Image
          src={"/deped.png"} // Corrected the path
          alt="DepEd Logo"
          width={100}
          height={100}
          className="rounded-md"
        />

        <h2 className="text-3xl font-semibold text-primary-foreground">
          Welcome to the DepEd Tandag City Division Infobot! 🌟
        </h2>
        <h3 className="text-base font-medium text-primary-foreground">
          How can I assist you today?
        </h3>
        <Suspense fallback={<p>Loading chat...</p>}>
            <ChatInput />
            <ChatHelp />
        </Suspense>
      </div>
    </main>
  );
}