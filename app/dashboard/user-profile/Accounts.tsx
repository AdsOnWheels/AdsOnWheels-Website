import React from "react";
import Image from "next/image";

import AsanaLogo from "../assets/images/logos/logo-asana.svg";
import AtlassianLogo from "../assets/images/logos/logo-atlassian.svg";
import SlackLogo from "../assets/images/logos/logo-slack.svg";
import SpotifyLogo from "../assets/images/logos/logo-spotify.svg";

const Accounts = () => {
  return (
    <div className="flex-none w-full max-w-full mt-6">
      <div
        className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 shadow-xl dark:bg-slate-950 dark:shadow-xl rounded-2xl bg-clip-border"
        id="accounts"
      >
        <div className="p-6 rounded-t-2xl">
          <h5 className="dark:text-white">Accounts</h5>
          <p className="text-sm leading-normal dark:text-white/60">
            Here you can setup and manage your integration settings.
          </p>
        </div>
        <div
          className="flex-auto p-6 pt-0"
          data-dashlane-rid="49dcb79f573251c5"
          data-form-type="other"
        >
          <div className="flex">
            <Image className="w-12" src={SlackLogo} alt="logo-slack" />
            <div className="my-auto ml-4">
              <div className="h-full">
                <h5 className="mb-0 dark:text-white">Slack</h5>
                <a
                  className="text-sm leading-normal text-slate-500 dark:text-white"
                  href="#"
                >
                  Show less
                  <i
                    className="ml-1 text-xs leading-tight fas fa-chevron-up"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white/80">
              Enabled
            </p>
            <div className="block pl-12 my-auto min-h-6">
              <input
                className="rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-5 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                type="checkbox"
                data-dashlane-rid="cefcb82f1363080b"
                data-form-type="other"
              />
            </div>
          </div>
          <div className="pt-4 pl-12 ml-4" data-dashlane-rid="7b10d07fe5f69ba3">
            <p className="mb-0 text-sm leading-normal dark:text-white/60">
              You havent added your Slack yet or you arent authorized. Please
              add our Slack Bot to your account by clicking on
              <a className="dark:text-white" href="#">
                here
              </a>
              . When youve added the bot, send your verification code that you
              have received.
            </p>
            <div
              className="p-2 my-6 rounded-xl bg-gray-50 dark:bg-gray-600 sm:flex"
              data-dashlane-rid="6e5356b783687fab"
            >
              <p className="my-auto text-sm font-semibold leading-normal sm:pl-2">
                Verification Code
              </p>
              <input
                className="min-h-unset sm:w-15/100 text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease mt-2 block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
                type="text"
                name="code"
                value="1172913"
              />
              <div
                className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                id="tooltip"
                role="tooltip"
                data-popper-placement="top"
                data-popper-reference-hidden=""
                data-popper-escaped=""
              >
                Copy!
                <div
                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                  data-popper-arrow=""
                ></div>
              </div>
            </div>
            <div className="p-2 my-6 rounded-xl bg-gray-50 dark:bg-gray-600 sm:flex">
              <p className="my-auto text-sm font-semibold leading-normal sm:pl-2">
                Connected account
              </p>
              <h6 className="my-auto ml-auto mr-4 text-sm leading-normal dark:text-white">
                hello@creative-tim.com
              </h6>
              <button
                type="button"
                className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-red-600 to-orange-600 bg-150 bg-x-25 hover:-translate-y-px active:opacity-85"
                data-dashlane-rid="3345d67538cfb475"
                data-kwimpalastatus="dead"
                data-form-type="action"
              >
                Delete
              </button>
            </div>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex">
            <Image className="w-12" src={SpotifyLogo} alt="logo-spotify" />
            <div className="my-auto ml-4">
              <div className="h-full">
                <h5 className="mb-0 dark:text-white">Spotify</h5>
                <p className="mb-0 text-sm leading-normal dark:text-white/60">
                  Music
                </p>
              </div>
            </div>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white/80">
              Enabled
            </p>
            <div className="block pl-12 my-auto min-h-6">
              <input
                className="rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-5 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                type="checkbox"
                data-dashlane-rid="e88590325148c337"
                data-form-type="other"
              />
            </div>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex">
            <Image className="w-12" src={AtlassianLogo} alt="logo-atlassian" />
            <div className="my-auto ml-4">
              <div className="h-full">
                <h5 className="mb-0 dark:text-white">Atlassian</h5>
                <p className="mb-0 text-sm leading-normal dark:text-white/60">
                  Payment vendor
                </p>
              </div>
            </div>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white/80">
              Enabled
            </p>
            <div className="block pl-12 my-auto min-h-6">
              <input
                className="rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-5 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                type="checkbox"
                data-dashlane-rid="565987642c781b8f"
                data-form-type="other"
              />
            </div>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex">
            <Image className="w-12" src={AsanaLogo} alt="logo-asana" />
            <div className="my-auto ml-4">
              <div className="h-full">
                <h5 className="mb-0 dark:text-white">Asana</h5>
                <p className="mb-0 text-sm leading-normal dark:text-white/60">
                  Organize your team
                </p>
              </div>
            </div>
            <div className="block pl-12 my-auto ml-auto min-h-6">
              <input
                className="rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-5 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                type="checkbox"
                data-dashlane-rid="512dfe06dba2a5bb"
                data-form-type="other"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
