"use client";

import { useStore } from "@/lib/store";
import { Menu, Soup, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { isOpen, toggleMenu } = useStore();
  return (
    <nav className="bg-white mb-8 border-b border-gray-300">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Soup />
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            mealapp
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {!isOpen ? <Menu /> : <X />}
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/category"
                onClick={toggleMenu}
                className={`${
                  pathname == "/category"
                    ? "text-white bg-gray-800 md:text-gray-900"
                    : ""
                } block text-gray-500 md:hover:text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/foods"
                onClick={toggleMenu}
                className={`${
                  pathname == "/foods"
                    ? "text-white bg-gray-800 md:text-gray-900"
                    : ""
                } block text-gray-500 md:hover:text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                Foods
              </Link>
            </li>
            <li>
              <Link
                href="/ingredients"
                onClick={toggleMenu}
                className={`${
                  pathname == "/ingredients"
                    ? "text-white bg-gray-800 md:text-gray-900"
                    : ""
                } block text-gray-500 md:hover:text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                Ingredients
              </Link>
            </li>
            <li>
              <Link
                href="/local-culinary"
                onClick={toggleMenu}
                className={`${
                  pathname == "/local-culinary"
                    ? "text-white bg-gray-800 md:text-gray-900"
                    : ""
                } block text-gray-500 md:hover:text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                Local Culinary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
