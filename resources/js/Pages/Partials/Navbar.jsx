import React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            Innovent
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/login"
                className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 bg-white rounded-md shadow hover:bg-gray-50 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="inline-block px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-900 transition duration-300"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
