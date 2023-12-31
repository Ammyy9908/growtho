import Navbar from "@/components/navbar";
import { BsFacebook } from "react-icons/bs";
import Footer from "@/components/footer";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { NextSeo } from "next-seo";
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

function TeamCard({ image, name, position }) {
  return (
    <div className="team-card py-6 px-5 border rounded-md transition-all cursor-pointer">
      <div className="team-card-content">
        <div className="team-card-image w-full h-[344px] group overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-90 transition-all group-hover:border-8 border-white"
            style={{
              transitionDuration: "1s",
            }}
          />
        </div>
        <div className="team-card-footer flex flex-col items-center py-6">
          <div className="card-line w-[90px] h-1 border bg-blue-600 mb-3"></div>
          <h2 className="text-3xl font-bold">{name}</h2>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full h-screen">
      <NextSeo
        title="About GrowthO: Your Partner in Digital Excellence and Collaborative Growth"
        description="Hey there! 🌟 Meet Growth O, your friendly neighborhood digital marketing agency where your growth is our motto. Dive into our story and find out how our super talented team is helping businesses just like yours bloom online and offline. Come, be a part of this exciting journey where dreams take flight, and growth knows no bounds. Let's grow together!"
        openGraph={{
          title:
            "About Growth O: Your Partner in Digital Excellence and Collaborative Growth",
          description:
            "Hey there! 🌟 Meet Growth O, your friendly neighborhood digital marketing agency where your growth is our motto. Dive into our story and find out how our super talented team is helping businesses just like yours bloom online and offline. Come, be a part of this exciting journey where dreams take flight, and growth knows no bounds. Let's grow together!",
          url: "https://www.growtho.co/about",
          images: [
            {
              url: "/Ayush.jpeg",
              width: 800,
              height: 600,
              alt: "About GrowthO",
            },
          ],
        }}
      />
      <Navbar />

      <section className="hero_section w-[85%] mx-auto pt-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="hero-section-content flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold">
            About us
            {/* <span className="text-[#5956E8]">marketing</span> agency */}
          </h1>
          <p className="text-md md:text-xl">
            GrowthO has the best team of five people who are excellent and
            absolutely flawless in their respective fields, have different
            outlooks and abilities, and are at different stages of their
            careers. Conjoined efforts of each team member has led to favourable
            outcomes in such a short span of time. Since, GrowthO has made it’s
            principal grail towards it’s team members is amiable, motivating,
            engaging each individuals. Even a small initiative by a team member
            is seeing as a new opportunity for GrowthO to make it best.
          </p>
        </div>
        <div className="flex hero-section-graphic">
          <img src="/about.svg" alt="" />
        </div>
      </section>

      {/* <section className="work-stats py-32 xl:px-32 bg-black z-50">
        <div className="work-stat-container text-white  flex flex-col xl:flex-row items-center justify-between gap-32 mx-auto">
          <WorkStatCard />
          <WorkStatCard />
          <WorkStatCard />
          <WorkStatCard />
        </div>
      </section> */}

      {/* <section className="about-section w-full py-4">
        <div className="about-section-box w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          <div className="about-section-image">
            <img src="/about_service.svg" alt="about" />
          </div>
          <div className="about-section-content">
            <div className="about-section-header flex flex-col items-center md:flex-row md:items-start gap-6 py-6">
              <div className="header-icon w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                @
              </div>
              <div className="header-title">
                <h3 className="text-xs uppercase text-black/50">01.About us</h3>
                <h1 className="text-3xl">Free Consultancy For Everyone</h1>
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
              GrowthO has the best team of five people who are excellent and
              absolutely flawless in their respective fields, have different
              outlooks and abilities, and are at different stages of their
              careers. Conjoined efforts of each team member has led to
              favourable outcomes in such a short span of time. Since, GrowthO
              has made it’s principal grail towards it’s team members is
              amiable, motivating, engaging each individuals. Even a small
              initiative by a team member is seeing as a new opportunity for
              GrowthO to make it best.
            </p>
            <Link
              href="/services"
              className="px-2 py-3 bg-blue-500 w-[170px] block text-center rounded-full mt-3 text-white"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section> */}

      <section className="team-section mb-4 mt-12">
        <div className="section-header w-[85%] mx-auto flex flex-col items-center my-8 gap-6">
          <p className="text-3xl font-bold">OUR TEAM</p>
        </div>
        <div className="team-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-[85%] mx-auto">
          <TeamCard
            image={"./Ayush.jpeg"}
            name={"Ayush Bhatnagar"}
            position={"Founder/ CEO"}
          />
          <TeamCard
            image={"./aditya.jpeg"}
            name={"Aditya Jain"}
            position={"Head Developer"}
          />
          <TeamCard
            image={"./aman.jpeg"}
            name="Aman Singh"
            position={"Marketing Head"}
          />
          <TeamCard
            image={"./garima.jpeg"}
            name="Garima Yadav"
            position={"Head Content Planner"}
          />
          <TeamCard
            image={"./darshita.jpeg"}
            name="Darshita Gupta"
            position={"Head Content Planner"}
          />
          <TeamCard
            image={"./tisha.jpeg"}
            name="Tisha Agrawal"
            position={"Head Content Designer"}
          />
          <TeamCard
            image={"./apoorva.jpeg"}
            name="Apoorva Khurana"
            position={"Content Creator & Mentor"}
          />
          <TeamCard
            image={"./deepakshi.jpeg"}
            name="Deepakshi Rajput"
            position={"Content Designer"}
          />
        </div>
      </section>

      {/* <section
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
      </section> */}

      <section className="company-policy-section py-16  w-[85%] mx-auto">
        <div className="policy-section-content grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="policy">
            <h3 className="text-center text-3xl">Our Service Policy</h3>
            <p className="text-black/50 mt-3">
              Discount gives are based on terms & Conditions. Charges may
              increase or fluctuate according with mutual consideration. 50 %
              Amount to be Paid in advance & rest after completion of work(Term
              period).
            </p>
          </div>
          <div className="values">
            <h3 className="text-center text-3xl">Our Core Values</h3>
            <p className="text-black/50 mt-3">
              100 percent truthfulness & Loyalty with Clients. Trust &
              Completion of work on time is what we emphasis on. GrowthO’s Motto
              is Your Growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
