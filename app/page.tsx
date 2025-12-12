import { Frame } from "@/components/frame-animation/frames";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex border-r border-l min-h-screen items-center justify-center bg-neutral-50 font-sans dark:bg-black  max-w-2xl mx-auto">
      <div className="flex flex-col font-medium pt-12 sm:pt-38 overflow-hidden relative">
        <div className="absolute -top-16 right-0 opacity-75">
          <Frame radius="rounded-xl" />
        </div>

        <div className="flex flex-col px-5 sm:px-10">
          <Image
            alt="avatar"
            src="/avatar.jpeg"
            className="w-12 h-12 rounded-full mb-10"
            width={100}
            height={100}
          />

          <h1 className="mb-4">
            <span className="font-semibold">Philippe Tedajo</span> is a frontend
            developer and AI enthusiast.
          </h1>

          <p className="leading-[25px] mt-4 text-neutral-500 dark:text-neutral-400 w-11/12">
            Previously, I worked at{" "}
            <Link
              className="text-neutral-700 dark:text-neutral-400 underline underline-offset-4"
              href="https://www.linkedin.com/company/aive"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aive
            </Link>
            , an ml post-production video startup as senior frontend developer,
            alongside an incredible team in Paris.
          </p>
          <p className="leading-[25px] mt-4 text-neutral-500 dark:text-neutral-400 w-11/12">
            Before that, I worked as a principal frontend engineer at{" "}
            <Link
              className="text-neutral-700 dark:text-neutral-400 underline underline-offset-4"
              href="https://www.linkedin.com/company/bhenthq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhent
            </Link>
            .
          </p>
          <p className="leading-[25px] mt-4 text-neutral-500 dark:text-neutral-400 w-11/12">
            I’m passionate about building things. Web apps, desktop tools,
            mobile experiences, video-processing pipelines, ai agents, and
            anything developers might find useful. When the day ends, i’m
            usually still creating or exploring new ideas.
          </p>
          <div className="flex -ml-2 mt-6 items-center">
            <Link
              href="https://www.linkedin.com/in/philippe-tedajo-aa1a298b"
              className="p-3 rounded-[13px] hover:bg-neutral-50 dark:hover:bg-neutral-900 border-none text-neutral-400 dark:text-neutral-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[20px] w-[20px] text-current"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href="https://x.com/PhilippeTedajo"
              className="p-3 rounded-[13px] hover:bg-neutral-50 dark:hover:bg-neutral-900 border-none text-neutral-400 dark:text-neutral-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px] text-current"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/philippetedajo"
              className="p-3 rounded-[13px] hover:bg-neutral-50 dark:hover:bg-neutral-900 border-none text-neutral-400 dark:text-neutral-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px] text-current"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
            <Link
              href="mailto:philippe.tedajo@gmail.com"
              className="p-3 rounded-[13px] hover:bg-neutral-50 dark:hover:bg-neutral-900 border-none text-neutral-400 dark:text-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px] text-current"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </div>

          <h3 className="mt-14 text-sm text-neutral-400 mb-2">
            Private projects
          </h3>

          <div className="flex flex-col">
            <a
              className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
              href="https://www.gomotion.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] rounded-[10px] mt-[2px] shrink-0 shadow-shorter overflow-hidden">
                <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
                  <Image
                    alt="gomotion logo"
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    data-nimg="1"
                    className="w-[36px] h-[36px]"
                    style={{ color: "transparent" }}
                    src="/gomotion_logo.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
                <div>Gomotion</div>
                <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
                  <div>Your AI motion designer agent</div>
                  <div className="bg-neutral-100 border border-black border-opacity-5 px-2 text-xs rounded-full dark:bg-neutral-800 dark:text-neutral-500">
                    Web
                  </div>
                </div>
              </div>
            </a>

            <a
              className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
              href="https://www.vibrantsnap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] rounded-[10px] mt-[2px] shrink-0 shadow-shorter overflow-hidden">
                <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
                  <Image
                    alt="vibrantsnap logo"
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    data-nimg="1"
                    className="w-[36px] h-[36px]"
                    style={{ color: "transparent" }}
                    src="/vibrantsnap_logo.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
                <div>Vibrantsnap</div>
                <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
                  <div>Create and share videos that convert seamlessly.</div>
                  <div className="bg-neutral-100 border border-black border-opacity-5 px-2 text-xs rounded-full dark:bg-neutral-800 dark:text-neutral-500">
                    Web
                  </div>
                </div>
              </div>
            </a>

            <a
              className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
              href="https://www.spikalabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] rounded-[10px] mt-[2px] shrink-0 shadow-shorter overflow-hidden">
                <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
                  <Image
                    alt="spika logo"
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    data-nimg="1"
                    className="w-[36px] h-[36px]"
                    style={{ color: "transparent" }}
                    src="/spika_logo.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
                <div>Spika</div>
                <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
                  <div>
                    Turn prompts into engaging podcasts in any language.
                  </div>
                  <div className="bg-neutral-100 border border-black border-opacity-5 px-2 text-xs rounded-full dark:bg-neutral-800 dark:text-neutral-500">
                    Web
                  </div>
                </div>
              </div>
            </a>
          </div>

          <h3 className="mt-14 text-sm text-neutral-400 mb-2">
            Open source projects
          </h3>

          <div className="flex flex-col">
            <a
              className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
              href="https://codetree.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] rounded-[10px] mt-[2px] shrink-0 shadow-shorter overflow-hidden">
                <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
                  <Image
                    alt="codetree logo"
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    data-nimg="1"
                    className="w-[36px] h-[36px]"
                    style={{ color: "transparent" }}
                    src="/codetree_logo.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
                <div>Codetree</div>
                <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
                  <div>Code edtior build using WebAssembly</div>
                  <div className="bg-neutral-100 border border-black border-opacity-5 px-2 text-xs rounded-full dark:bg-neutral-800 dark:text-neutral-500">
                    Web
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  add a way to download cv. With great minimalistic ux  */}

          <h3 className="mt-20 text-sm text-neutral-400 lowercase mb-40 ">
            © {new Date().getFullYear()} Philippe Tedajo.
          </h3>
        </div>
      </div>
    </div>
  );
}
