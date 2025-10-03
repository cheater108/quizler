import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className={`${poppins.className} text-4xl`}>
        Quizler
      </h1>
      <p className="mt-2">Create your own quiz or take one right now.</p>
      <div className="flex gap-4 mt-4">
        <Button>
          <Link href={'/create'}>Create Quiz</Link>
        </Button>
        <Button variant={'outline'}>Take Quiz</Button>
      </div>
    </main>
  );
}
