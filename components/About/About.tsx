import VertTabs from "./verticaltabs";

export default function About() {
  return (
    <div className="flex w-max h-max px-32 py-28 border-4 border-blue-600 border-solid justify-center items-center">
      <section className="border-4 border-red-600 border-solid">
        About me
      </section>

      <section className="border-4 border-green-600 border-solid">
        <VertTabs />
      </section>
    </div>
  );
}
