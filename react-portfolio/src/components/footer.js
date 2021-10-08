function Footer() {
  return (
    <div>
      <footer class="footer bg-dark relative pt-1 border-b-2 ">
        <div class="container mx-auto px-6 items-center">
          <div class="mt-16 mb-20 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <div class="flex flex-wrap justify-center gap-2">
                <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <svg
                    class="w-5 h-5 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <p class="text-sm text-green-600 font-bold mb-2">
                  © 2021 by Zack Anderson
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

//   <div class="container mx-auto px-10">
//     <div class="sm:flex sm:mt-3">
//       <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row justify-between">
//         <div class="flex flex-col">
//           <span class="font-bold text-gray-700 uppercase mb-2">
//             Social Links
//           </span>
//           <span class="my-2">
//             <a
//               href="#"
//               class="text-blue-700  text-md hover:text-blue-500"
//             >
//               link 1
//             </a>
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>;
