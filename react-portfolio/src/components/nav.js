function Nav() {
  return (
    <div>
      <nav
        id="header"
        class="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-gray-900 to-green-600"
      >
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">
          <div class="pl-4 flex items-center">
</div>
          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#projects"
                >
                  Projects{" "}
                </a>{""}
              </li>{" "}
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#skills"
                >
                  Skills{" "}
                </a>{" "}
              </li>{" "}
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#contact"
                >
                  Contact{" "}
                </a>{""}
              </li>{" "}
            </ul>{" "}
            <button
              id="navAction"
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              href="#"
            >
              Resume{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>{" "}
    </div>
  );
}

export default Nav;
