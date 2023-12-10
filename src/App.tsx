import { useState } from "react";
import "./App.css";
import logo from "./assets/img/logo.svg";
import tv from "./assets/img/tv.png";
import tvVideo from "./assets/vid/video-tv-0819.mp4";
import mobImage from "./assets/img/mobile-0819.jpg";
import boxshot from "./assets/img/boxshot.png";
import kids from "./assets/img/kids-section.png";

import { IoIosArrowForward } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

function App() {
  const tabs = [
    {
      id: 1,
      label: "What is Netflix?",
      content: (
        <>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
          <br />
          <p>
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </>
      ),
    },
    {
      id: 2,
      label: "How much does Netflix cost?",
      content: (
        <>
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from Rs
            250 to Rs 1,100 a month. No extra costs, no contracts.
          </p>
        </>
      ),
    },
    {
      id: 3,
      label: "Where can I watch?",
      content: (
        <>
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
          </p>
          <br />
          <p>
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </p>
        </>
      ),
    },
    {
      id: 4,
      label: "How do I cancel?",
      content: (
        <>
          <p>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </>
      ),
    },
    {
      id: 5,
      label: "What can I watch on Netflix?",
      content: (
        <>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </>
      ),
    },
    {
      id: 6,
      label: "Is Netflix good for Kids?",
      content: (
        <>
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
          </p>
          <br />
          <p>
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </p>
        </>
      ),
    },
  ];

  interface TabState {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
  }

  const [tabOpen, setTabOpen] = useState<TabState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // const handleOpenTab = (id: number) => {
  //   if (tabOpen[id as keyof TabState]) {
  //     setTabOpen((prev) => ({
  //       ...prev,
  //       [id as keyof TabState]: false,
  //     }));
  //   } else {
  //     setTabOpen((prev) => ({
  //       ...prev,
  //       [id as keyof TabState]: true,
  //     }));
  //   }
  // };

  const handleOpenTab = (id: number) => {
    setTabOpen((prev) => {
      const updatedState: TabState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      };

      // Close all other tabs
      Object.keys(prev).forEach((key) => {
        updatedState[key as keyof TabState] = false;
      });

      // Toggle the state of the selected tab
      updatedState[id as keyof TabState] = !prev[id as keyof TabState];

      return updatedState;
    });
  };
  return (
    <>
      <section className="header">
        <nav className="flex justify-between lg:w-[60%] mx-auto px-6 py-7 relative z-10">
          <img src={logo} alt="Netflix Logo" className="w-24 lg:w-36" />
          <div>
            <button className="bg-primary px-3 py-1 rounded-md font-semibold">
              Sign In
            </button>
          </div>
        </nav>
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <div className="hero-section flex flex-col relative justify-center">
          <div className="font-[900] text-[32px] lg:text-[48px]">
            Unlimited movies, TV shows, and more
          </div>
          <div className="font-[400] text-[18px] lg:text-[24px]">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="font-[400] text-[18px] lg:text-[20px] mt-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div>
            <input type="text" />
            <div>
              <button>Get Started</button>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#232323] py-1"></div>

      <section className="lg:w-[65%] mx-auto py-20 px-5">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="text-center lg:text-left">
            <div className="font-[900] text-[32px] lg:text-[48px]">
              Enjoy on your TV
            </div>
            <div className="font-[400] text-[18px] lg:text-[24px]">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>
          <div className="relative w-fit overflow-hidden">
            <img className="tv-image relative z-10" src={tv} alt="" />
            <video
              className="tv-video absolute top-[10%] left-[13%]"
              src={tvVideo}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </section>

      <div className="bg-[#232323] py-1"></div>

      <section className="lg:w-[65%] mx-auto py-20 px-5">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
          <div className="text-center lg:text-left">
            <div className="font-[900] text-[32px] lg:text-[48px]">
              Download your shows to watch offline
            </div>
            <div className="font-[400] text-[18px] lg:text-[24px]">
              Save your favorites easily and always have something to watch.
            </div>
          </div>
          <div className="relative w-fit overflow-hidden">
            <img className="mob-image" src={mobImage} alt="" />

            <div className="boxshot-box absolute bottom-0 w-[60%] min-w-[15rem] mx-auto rounded-xl border-2 border-gray-600 bg-black">
              <div className="flex p-2 items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <img className="w-10 lg:w-14" src={boxshot} alt="" />
                  <div className="text-left flex-1">
                    <p className="text-xs lg:text-sm font-bold">
                      Stranger Things
                    </p>
                    <p className="text-xs lg:text-sm text-blue-600">
                      Downloading...
                    </p>
                  </div>
                </div>
                <div className="download-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#232323] py-1"></div>

      <section className="lg:w-[65%] mx-auto py-20 px-5">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
          <div className="text-center">
            <div className="font-[900] text-[32px] lg:text-[48px]">
              Watch everywhere
            </div>
            <div className="font-[400] text-[18px] lg:text-[24px]">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#232323] py-1"></div>

      <section className="lg:w-[65%] mx-auto py-20 px-5">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
          <div className="text-center lg:text-left">
            <div className="font-[900] text-[32px] lg:text-[48px]">
              Create profiles for kids
            </div>
            <div className="font-[400] text-[18px] lg:text-[24px]">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </div>
          </div>
          <div className="relative w-fit overflow-hidden">
            <img className="mob-image" src={kids} alt="" />
          </div>
        </div>
      </section>

      <div className="bg-[#232323] py-1"></div>

      <section className="lg:w-[65%] mx-auto py-20 px-5">
        <div>
          <div className="font-[900] text-[32px] lg:text-[48px]">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="flex flex-col gap-2 text-[18px] lg:text-[24px] mt-5">
            {tabs.map((tab, index) => (
              <div key={index}>
                <div
                  onClick={() => handleOpenTab(tab.id)}
                  className="flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141] py-3 px-5"
                >
                  <div>{tab.label}</div>
                  <div>
                    <BsPlus className="w-14 h-14" />
                  </div>
                </div>
                {tabOpen[tab.id as keyof TabState] && (
                  <div
                    className={`content-box text-left bg-[#2d2d2d] px-5 border-t-2 border-black h-[100%] py-5
                   overflow-hidden`}
                  >
                    {tab.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
