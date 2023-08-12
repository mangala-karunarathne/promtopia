"use client";
import Image from "next/image";
import Link from "next/link";
function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promtopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promtopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-promt" className="black_btn">
              Create a Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;
