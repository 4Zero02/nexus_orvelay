// import Image from "next/image"

export default function ComponentTest() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      {/* <Image className="size-12 shrink-0" width={10} height={10} src="/public/file.svg" alt="ChitChat Logo" /> */}
      <div>
        <div className="text-xl font-medium text-black dark:text-white">
          ChitChat
        </div>
        <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
      </div>
    </div>
  );
}
