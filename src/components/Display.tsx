"use client";
import Authenticate from "./Authenticate";
import { useAppSelector } from "@/redux/store";

const Display = () => {
  const userName = useAppSelector((state) => state.authReducer.value.userName);
  const isGod = useAppSelector((state) => state.authReducer.value.isGod);
  const isLoggedIn = useAppSelector((state) => state.authReducer.value.isAuth);
  const isGodStatus = isGod ? "ON" : "OFF";
  return (
    <main className="flex h-[70vh] flex-col items-center justify-between p-24 relative">
      <h1>NextJs Redux ToolKit</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          God mode&nbsp;
          <code
            className={`font-mono font-bold ${
              isGod ? "text-green-600" : "text-red-600"
            }`}
          >
            {isGodStatus}
          </code>
        </p>
      </div>

      <Authenticate />
      <div className="absolute bottom-10">
        {isLoggedIn && !isGod && (
          <h2>
            User <span className="text-teal-500 font-bold">{userName}</span> logged in.
          </h2>
        )}
        {isGod && <h2><span className="text-teal-500 font-bold">{userName}</span> using <span className="font-bold">GodMode</span></h2>}
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
  );
};

export default Display;
