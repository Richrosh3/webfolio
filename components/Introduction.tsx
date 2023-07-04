export default function Introduction() {
  return (
    <section className="border-4 border-solid border-green-500 justify-center items-center">
      <div className = "flex flex-col justify-center items-center">
        <section className="w-max">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-slate-300 pr-1 text-3xl text-slate-300 text-center font-light py-1">
            Hello world!
          </p>
        </section>
      </div>
      <section
        id="section"
        className="mx-[18px] object-fill w-auto h-auto overflow-visible border-4 border-solid border-rose-600 "
      >
        <section
          id="container"
          className="mx-auto w-full max-w-[1140px] h-auto object-fill border-4 border-solid border-yellow-900"
        >
          <section
            id="introWrap"
            className="mt-[10px] mb-[10px] w-auto h-auto overflow-visible object-fill border-4 border-solid border-red-900"
          >
            <section
              id="nameText"
              className="flex-col w-auto h-auto overflow-visible object-fill"
            >
              <text className="font-normal text-xl text-left text-[#BFD7EA]">
                My name is &nbsp;
              </text>
              <text className="font-normal text-3xl text-left text-[#329F5B]">
                Roshen Abraham &nbsp;
              </text>
              <text className="font-normal text-xl text-left text-[#BFD7EA]">
                :)
              </text>
            </section>
            <section
              id="jobTitle"
              className="flex-row w-auto h-auto overflow-visible object-fill"
            >
              <text className="font-normal text-base text-left text-[#BFD7EA]">
                Software Engineer
              </text>
            </section>
            <section
              id="description"
              className="flex-row my-3 w-auto h-auto overflow-visible object-fill"
            >
              <text className="font-normal text-5xl text-left text-[#BFD7EA]">
                Hello! I'm a guy that likes to learn new things about software
                engineering. Currently trying to learn all I can about front-end
                development, but I also have interest in AI
              </text>
            </section>
          </section>
        </section>
      </section>

      {/* <section className = "flex flex-col flex-grow">
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
      </section> */}
    </section>
  );
}
