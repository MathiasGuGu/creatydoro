import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen gap-12 items-center justify-center">
      <section className="">
        <span className="sr-only">Pomodoro circle timer</span>
        <svg className="size-36 text-red-500 animate-pulse" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M27.719 5.109c-.135-.141-.266-.286-.401-.422a9.999 9.999 0 0 0-.427-.401A15.867 15.867 0 0 0 16 0A15.902 15.902 0 0 0 4.687 4.688c-6.104 6.099-6.234 15.938-.401 22.203c.13.146.26.286.396.427l.422.401A15.911 15.911 0 0 0 16 32c4.276 0 8.292-1.661 11.318-4.682c6.099-6.104 6.229-15.943.401-22.208zM5.51 5.51A14.734 14.734 0 0 1 16 1.166c3.766 0 7.318 1.396 10.068 3.943l-1.333 1.339a12.86 12.86 0 0 0-8.734-3.391A12.837 12.837 0 0 0 6.85 6.849A12.847 12.847 0 0 0 3.058 16c0 3.266 1.198 6.339 3.391 8.734L5.11 26.067C-.265 20.254-.135 11.156 5.511 5.51zm18.396 1.756v.005l-1.354 1.354A9.756 9.756 0 0 0 16 6.12a9.8 9.8 0 0 0-6.984 2.896A9.817 9.817 0 0 0 6.12 16a9.785 9.785 0 0 0 2.5 6.552l-1.349 1.354A11.684 11.684 0 0 1 4.224 16a11.7 11.7 0 0 1 3.448-8.328A11.7 11.7 0 0 1 16 4.224c2.953 0 5.734 1.078 7.906 3.042M24.714 16c0 2.328-.906 4.516-2.552 6.161s-3.833 2.557-6.161 2.557a8.687 8.687 0 0 1-5.729-2.161v-.005c-.146-.125-.292-.25-.432-.391a10.51 10.51 0 0 1-.391-.432A8.627 8.627 0 0 1 7.288 16c0-2.328.906-4.516 2.552-6.161a8.654 8.654 0 0 1 6.161-2.552c2.13 0 4.141.766 5.729 2.161c.146.125.297.25.432.391c.141.141.266.286.391.432A8.627 8.627 0 0 1 24.714 16M9.448 23.38A9.805 9.805 0 0 0 16 25.885a9.785 9.785 0 0 0 6.984-2.901A9.805 9.805 0 0 0 25.88 16a9.785 9.785 0 0 0-2.5-6.552l1.354-1.354A11.732 11.732 0 0 1 27.781 16a11.705 11.705 0 0 1-3.453 8.328A11.705 11.705 0 0 1 16 27.781a11.732 11.732 0 0 1-7.906-3.047zm17.042 3.11A14.734 14.734 0 0 1 16 30.834a14.734 14.734 0 0 1-10.068-3.943l1.339-1.333a12.874 12.874 0 0 0 8.734 3.391a12.873 12.873 0 0 0 9.151-3.797a12.872 12.872 0 0 0 3.792-9.151a12.862 12.862 0 0 0-3.391-8.729l1.333-1.339c5.375 5.813 5.245 14.911-.401 20.557z"
          />
        </svg>
      </section>
      <article className="flex flex-col text-center gap-2 ">
        <h1 className="text-4xl font-bold">
          Welcome to Creadoro, A fun pomodoro
        </h1>
        <p className="text-balance">
          Creaodoro is a more enjoyable way of using the pomodoro technique for
          focusing. Create a profile to get streaks, AI-tips and updates from
          the Creadoro-Team. Choose theme, music and more! only on creadoro.
        </p>
      </article>
      <section className="flex gap-4">
        <Button variant="default">Start Creodoro</Button>
        <Button variant="ghost">Learn how!</Button>
      </section>
    </main>
  );
}
