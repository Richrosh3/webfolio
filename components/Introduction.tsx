export default function Introduction() {
  return (
    <section className="flex flex-col h-full items-center justify-center pt-14 ">
      <section className="flex w-max">
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-slate-300 pr-1 text-3xl text-slate-300 text-center font-light py-1">
          W.elcome W.eb W.eebs :)
        </p>
      </section>
      <section className = "flex flex-col flex-grow">
        <p className="text-blue-200 text-2xl font-normal py-5">
          My name is
        </p>
        <h1 className="text-7xl bg-gradient-to-b from-emerald-200 to-blue-400 bg-clip-text text-transparent font-bold">
          Roshen Abraham
        </h1>
        <p className="text-cyan-200 text-2xl font-light pt-10">
          I like to build things ¯\_(ツ)_/¯
        </p>
        <p className="text-blue-200 text-2xl font-light text-center py-1">
          I'm currently working as a software engineer, but I really ... Blah Blah Blah 
        </p>
        <p className="text-blue-200 text-2xl font-light text-center py-1">
          Join my journey, as I learn various aspects of software engineering!
        </p>
      </section>
    </section>
  );
}
