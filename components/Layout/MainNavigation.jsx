import Image from "next/image";
import Link from "next/link";
import MobileNav from "../MobileNav";
import Modal from "../Modal";
import { useRouter } from "next/router";
import { useState } from "react";

const MainNavigation = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  const headerNavLinks = [
    { href: "/internet", title: "Интернет" },
    { href: "/business", title: "Для бизнес" },
    { href: "/advertises", title: "Для рекломодателей" },
    { href: "/contact", title: "Контакты" },
  ];

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <header className="xl:px-34 flex h-16 w-full items-center justify-around bg-[#FFFFFF] px-6 md:h-20 md:justify-between md:px-20  md:py-6  xl:h-24 xl:py-10">
        <div className="">
          <Link href="/">
            <Image
              src="/images/UzCloud.png"
              priority
              width={166}
              height={43}
              alt="Nav"
            />
          </Link>
        </div>
        <nav>
          <div className="hidden justify-center md:flex md:items-center md:gap-4 xl:gap-10">
            {headerNavLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`${
                  item.href === pathname ? "text-mainColor" : "text-coolGray"
                } md:text-md font-semibold italic text-coolGray hover:text-mainColor`}
              >
                {item.title}
              </Link>
            ))}

            <div className="flex items-center justify-center gap-3.5">
              <button
                onClick={() => setShowModal(true)}
                className="rounded-md bg-white py-2 px-3 text-sm font-semibold italic text-mainColor ring-2 ring-inset ring-mainColor"
              >
                Личный кабинет
              </button>
              <Image
                src="/icons/internet.svg"
                alt="search"
                width="20"
                height="20"
              />
              <p className="md:text-md font-semibold uppercase italic text-mainColor">
                Uz
              </p>
            </div>
          </div>

          <MobileNav />
        </nav>
      </header>
      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  );
};
export default MainNavigation;
