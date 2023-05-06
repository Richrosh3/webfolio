import utilStyles from "../styles/utils.module.css";

export default function Introduction() {
  return (
    <section className="flex flex-col items-center justify-center">
      <section className="w-max">
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-slate-300 pr-1 text-2xl text-slate-300 text-center font-thin py-1">
          W.elcome W.eb W.eebs :)
        </p>
      </section>
      <p className="text-emerald-100 text-3xl  font-thin py-1">My name is</p>
      <h1 className="text-5xl bg-gradient-to-b from-emerald-200 to-blue-400 bg-clip-text text-transparent text-center">
        Roshen Abraham
      </h1>
      <p className="text-blue-300 text-2xl font-thin text-center py-3">
        Join my journey, as I learn various aspects of software engineering!
      </p>
    </section>
  );
}
