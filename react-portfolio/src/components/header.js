function Header() {
  return (
    <section id="header">
      <div className="container mx-auto flex px-10 py-20 pt-36 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Zack Anderson
            <br className="hidden lg:inline-block" />
            Full-Stack Web Development
          </h1>
          <p className="mb-8 leading-relaxed">
            Web and Software Developer with dynamic and purposeful passion for
            creating and engineering solutions. Eager to grow and develop amidst
            the ever evolving trends and technologies. Experience demonstrated
            in streamlining educational organizations and achieving new
            standards within web development, project management and financial
            improvement. Well equipped with skills that contribute to overall
            product growth and capability
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./undraw_Real_time_sync_re_nky7 (2).svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
