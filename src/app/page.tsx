import Link from "next/link";
import { signIn } from "@/server/auth";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <form action={async () => {
          "use server";
          await signIn();
          console.log("signed in");
          }}>
            <button type="submit" className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              Sign In
            </button>
        </form>
      </div>
    </main>
  );
}
