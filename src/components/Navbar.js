import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  const rightNavLinks = [
    { title: "Price", id: "price" },
    { title: "Contact", id: "contact" },
    { title: "Login", id: "login" },
  ];

  const leftNavLinks = [
    { title: "About Us", id: "aboutus" },
    { title: "Platform", id: "platform" },
    { title: "Solution", id: "solution" },
    { title: "Customer", id: "customer" },
  ];

  return (
    <nav className="bg-primaryColor">
      <div className="mx-[140px] py-[51px]">
        <div className="flex justify-between items-center">
          <ul className="flex gap-[40px] items-center text-white text-[18px]">
            {leftNavLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-[21px] items-center">
            <Image src="/logo.svg" alt="Logo" width={53} height={50} />
            <h4 className="text-[34px] font-medium text-white">Crypt Land</h4>
          </div>

          <ul className="flex gap-[40px] items-center text-white text-[18px]">
            {rightNavLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
            <Button title="Sign up" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
