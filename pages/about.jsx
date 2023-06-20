import Navbar from "@/components/navbar";
import { BsFacebook } from "react-icons/bs";
import Footer from "@/components/footer";
import { FaTwitter } from "react-icons/fa";
function WorkStatCard() {
  return (
    <div className="work-stat-card flex items-center gap-6">
      <div className="work-stat-title font-semibold text-2xl">325+</div>
      <div className="work-stat-subtitle uppercase text-sm">
        <p>Clients</p>
        <p>Worldwides</p>
      </div>
    </div>
  );
}

function TeamCard() {
  return (
    <div className="team-card py-6 px-5 border rounded-md transition-all cursor-pointer">
      <div className="team-card-content">
        <div className="team-card-image w-fulll">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
        </div>
        <div className="team-card-footer flex flex-col items-center py-6">
          <div className="card-line w-[90px] h-1 border bg-blue-600 mb-3"></div>
          <h2 className="text-3xl font-bold">Pippa Clarkson</h2>
          <p>Lead Manager</p>
          <div className="team-social-handler flex items-center justify-center gap-6 mt-6">
            <a href="#">
              <BsFacebook className="text-blue-700" />
            </a>
            <a href="#">
              <FaTwitter className="text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationCard() {
  return (
    <div className="location-card rounded-md bg-white py-6 px-6 group hover:scale-110 transition-all cursor-pointer hover:shadow-2xl">
      <div className="location-card-content">
        <div className="location-card-flag"></div>
        <div className="location-card-content">
          <h3 className="text-xl font-semibold">San Francisco, USA</h3>
          <p>1650 Page. San Francisco, California(CA), 94117</p>
          <a href="#">
            <span></span>
            <span>(414) 809 - 2567</span>
          </a>
          <a href="#">
            <span></span>
            <span>Contact@marketingagency.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main
      className="w-full h-screen bg-[#D9D9D9]"
      style={{
        background: ` linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%);`,
      }}
    >
      <Navbar />

      <section className="hero-section flex items-center justify-center relative">
        <div className="hero-section-content relative z-10 overflow-hidden">
          <div className="w-[325px] h-[325px] md:w-[650px] md:h-[650px] bg-white relative rounded-full -bottom-10">
            <img
              src="/mesh.svg"
              alt="mesh"
              className="hidden md:block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
            <h2 className="text-3xl md:text-6xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold">
              About <span className="text-[#5956E8]">us</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="work-stats py-32 xl:px-32 bg-black z-50">
        <div className="work-stat-container text-white  flex flex-col xl:flex-row items-center justify-between gap-32 mx-auto">
          <WorkStatCard />
          <WorkStatCard />
          <WorkStatCard />
          <WorkStatCard />
        </div>
      </section>

      <section className="about-section w-full py-16">
        <div className="about-section-box w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          <div className="about-section-image">
            <img src="/about.svg" alt="about" />
          </div>
          <div className="about-section-content">
            <div className="about-section-header flex items-start gap-6 py-6">
              <div className="header-icon w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                @
              </div>
              <div className="header-title">
                <h3 className="text-xs uppercase text-black/50">01.About us</h3>
                <h1 className="text-3xl">
                  The #1 digital marketing services company
                </h1>
              </div>
            </div>
            <hr />
            <div className="about-points my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="px-3 py-2 bg-black flex items-center justify-center h-[75px] text-white gap-6 rounded-lg">
                <div className="point-icon">
                  <img src="/goal.svg" alt="" />
                </div>
                <p>Development Scale</p>
              </div>
              <div className="px-3 py-2 bg-black flex items-center justify-center h-[75px] text-white gap-6 rounded-lg">
                <div className="point-icon">
                  <img src="/mic.svg" alt="" />
                </div>
                <p>Research & Strategy</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              cum architecto alias sint magnam eum quod in commodi voluptatum
              aliquam, animi impedit, quis eius incidunt inventore fugiat qui
              laborum mollitia.
            </p>
            <a
              href="#"
              className="px-4 py-3 border border-black flex max-w-[130px] rounded-md mt-6"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="team-section mb-16">
        <div className="section-header w-[90%] mx-auto flex flex-col items-center my-16 gap-6">
          <div className="section-icon w-12 h-12 bg-purple-300 flex items-center justify-center rounded-full px-3">
            <img src="/hand.svg" alt="handshake-icon" />
          </div>
          <p>03 . OUR TEAM</p>
          <h1 className="text-3xl">Our team of expert marketers</h1>
        </div>
        <div className="team-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-[90%] mx-auto">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </section>

      <section
        className="location-section py-32"
        style={{
          background:
            "linear-gradient(111.05deg, #E9F7FF 9.66%, #FFDBD5 57.52%, #FFF3CA 103.42%)",
        }}
      >
        <div className="location-section-container w-[85%] mx-auto">
          <div className="section-header flex flex-col md:flex-row items-center gap-12 md:items-start justify-between">
            <div className="section-header-heading flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="header-icon w-12 h-12 bg-black rounded-full"></div>
              <div className="header-titles">
                <p className="uppercase text-sm text-black/50">Our Offices</p>
                <h2 className="text-2xl">
                  Come and visit us all around the world
                </h2>
              </div>
            </div>
            <div className="section-header-controls">
              <a href="#" className="px-3 py-3 bg-black text-white rounded-md">
                Get in touch
              </a>
            </div>
          </div>
          <div className="section-locations mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
