import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import services from "@/data/services";
import Footer from "@/components/footer";

function Service() {
  const [service, setService] = useState(null);
  const router = useRouter();
  console.log(router.query);
  const { service_name } = router.query;

  useEffect(() => {
    if (service_name) {
      console.log(services);
      setService(services.filter((s) => s.slug == service_name)[0]);
    }
  }, [service_name]);

  console.log(service);
  return (
    <div className="h-screen">
      <Navbar />

      <section className="hero-section flex items-center justify-center relative h-[575px] w-full bg-white relative">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 text-center text-white">
          <h2 className="text-white text-3xl md:text-6xl font-semibold z-50">
            {service ? service.title : ""}
          </h2>
          <p className="mt-3">{service ? service.description : ""}</p>
        </div>
        <img
          src={service ? service.cover : ""}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="overlay absolute w-full h-full bg-black/50"></div>
      </section>
      {service && service.slug == "web-development" && (
        <section className="py-12 px-6 md:px-32 flex flex-col items-start gap-12">
          <div>
            <h1 className="text-3xl">About Web Development</h1>
            <p>
              Web development refers to developing, creating, and an maintaining
              websites. It also includes aspects such as web design, web
              publishing, web programming, and data base management. It includes
              handling things such as hand coding web pages, updating a blog,
              regular update, and many more.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              Have you ever wondered why web development is so important? Why
              every company want to have it’s own website?
            </h1>
            <p>
              Well answer is quiet simple, to make aware of services, products,
              any company is offering, fame on social media, make it easy to
              interact with visitors, increase the chances of global reach,
              experience brand a marketing life, etc. Would you guys wanted to
              open a door for yourself? Epitomize yourself everywhere? So stop
              thinking start working! Make a plan do research about market,
              competitors, set agenda for yourself, identify your purpose,
              objective then start assembling and analysing. Once you had done
              with this then design a logo, layout, colour, homepage, review
              clients brand standards now start developing program, page
              templates, build theme and start including text, visuals and
              attachments, migrate content and once your had done with all this
              don’t forget to test it’s performance on different devises and
              platforms. With this now you got basic idea of developing a
              website.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              Would you find it easy to create website?
            </h1>
            <p>
              If yes then you are wrong it’s that’s not easy it requires some
              special types of skills some of them are HTML, JavaScript,
              Photoshop, WordPress, SEO, analytical skills and many more.
            </p>
            <p>
              You may also learn how to manage a web project from start to
              finish, Work on a website project applying real-world principles
              and considerations, Handle all aspects of website creation from
              design to monitoring and maintenance. Okay now how many of you
              like challenging and complex things?
            </p>
            <p className="mt-12">
              Now that’s interesting you guys already know your Self-worth. I
              think then you will definitely enjoy the idea of investing your
              time and effort. You can start web developing as a career by
              following certain steps-
            </p>
            <ul className="mt-6">
              <li>
                Choose a development specialization. Get an education well it is
                not compulsory to have a specific degree or educational path
                exist for
              </li>
              <li>
                career in web developer and it’s possible to become a web
                developer with or without formal education.
              </li>
              <li>
                Practicing your coding skills regularly will help you a lot. You
                can also do this by setting up a GitHub account.
              </li>
              <li>Launch an online portfolio.</li>
            </ul>
          </div>
        </section>
      )}
      {service && service.slug == "instagram-ads" && (
        <section className="py-12 px-6 md:px-32 flex flex-col items-start gap-12">
          <div>
            <h1 className="text-3xl">
              GrowthO Partner to Instagram Ads Manager.
            </h1>
            <p>
              We at GrowthO Bring you the Complete Guide & Help you with the
              Instagram ADs Creation & Reach your perfect Audience. GrowthO has
              the Best Team to Manage your Instagram ADs. Planning, Structuring,
              Creating & Placing it in Media, Huff such a huge and lengthy
              process with head banging in research and all. But here at GrowthO
              , our team of Marketing Master Mind Love their Work & always at
              Ease to work for you. Instagram ADs is not a Easy Pie to do, if
              you Don’t want to Waste your Money eared by your Hard work
            </p>
          </div>

          <div>
            {/* <h1 className="text-3xl">
              Have you ever wondered why web development is so important? Why
              every company want to have it’s own website?
            </h1> */}
            <p>
              If you don’t have a proper team knowing the basics of ADs creation
              & Instagram ADs Creation then you surly might waste you money, But
              if you have a team like GrowthO who understands the Market
              Audience,Content Readability Score, Audience Taste & Ad strategy
              Perfect for your Target Audience.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              Why Instagram ads are most useful? Is it Popular in Youth ,Talent
              & Creative Field ?
            </h1>
            <p>
              Instagram ads are important to promote a business to it’s user’s
              Instagram feeds. They can look just like regular Instagram posts,
              but are always identified by a “Sponsored” label. They can also
              include a call-to-action button to drive traffic or conversions.
              With a potential audience of more than 928 million people,
              Instagram ads are a key tool for any social media marketer.
            </p>

            <h1 className="text-3xl">Instagram offers several types of ADs</h1>
            <ul className="mt-3">
              <li>
                <p>Stories ads</p>
              </li>
              <li>
                <p>Photo ads</p>
              </li>
              <li>
                <p>Video ads</p>
              </li>
              <li>
                <p>Carousel ads</p>
              </li>
              <li>
                <p>Collection ads</p>
              </li>
              <li>
                <p>Instagram Explore ads</p>
              </li>
              <li>
                <p>IGTV ads</p>
              </li>
              <li>
                <p>Instagram Shopping ads</p>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-3xl">
              How much do you think Instagram ads cost?
            </h1>
            <div className="boxes grid grid-cols-2 gap-12 mt-12">
              <div>
                <h1 className="text-2xl">Targeting Audience Scale</h1>
                <p>
                  Number of Audience Reach & Scale you target add to your Cost,
                  but all these cost are not that much as it costs you On
                  Television. Your Can Set Daily Budget Also.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">AD Placement</h1>
                <p>
                  Target Place like Geographical Location, Audience Preference ,
                  Group of Audience etc where your Ad is placed .
                </p>
              </div>
              <div>
                <h1 className="text-2xl">AD Format</h1>
                <p>
                  The Core purpose of the AD, which derives the Structure of the
                  Ad. Ex- Brand Awareness, Page Like, Sales Bosting, Call
                  Action, Conversion Etc.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">Time of Year</h1>
                <p>
                  Season of Business & Variation in the prevailing Spring.
                  Nature of the business, Festival & Situation all together are
                  the factors to Consider.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>
              A better way to think about it is to decide how much you want to
              spend, or how much you’re willing to spend per result. You can do
              at least a little Instagram advertising with almost any budget.
              You can control your Instagram ads cost by setting a campaign
              spending limit, a daily budget, and a bid strategy.
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-3xl">
              There are two ways to set up your ads on Instagram
            </h1>
            <div className="grid grid-cols-2 gap-12 mt-12">
              <h1>
                First you can simply promote an existing post directly within
                the app.
              </h1>
              <h1>
                Second offers most customization option is to create your
                Instagram ad using Facebook Ads Manager.
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-3xl">How to create ads on Instagram?</h1>
            <p>
              First you’ll need to have a business or creator account on
              Instagram to create ads , follow these instructions to create an
              ad:
            </p>

            <div className="mt-3">
              <p>
                To get started, navigate to your profileand select the postyou
                want to promote. Alternatively, you can go to your Instagram
                Insights, scroll to the Promotions data, and tap the Create
                Promotion link.
              </p>
              <p>
                <strong>Configure the Objective and Action Button</strong>
              </p>
              <p>
                Instagram lets you choose from several objectives for your
                promotion. You can direct your target audience to visit your
                website, view your profile, get directions to a specific
                address, or call the phone number listed on your business
                account. Enter the website URL you want your target audience to
                visit or{" "}
                <strong>
                  choose your business profile. Define a Target Audience
                </strong>
              </p>
              <p>
                Once you’ve saved your objective and action button,{" "}
                <strong>tap on Automatic for Audience</strong> to create a
                target audience for your promotion. You can{" "}
                <strong>
                  define your target audience by multiple locations, up to 10
                  interests, age, and gender. Set a Budget and Duration
                </strong>
              </p>
              <p>
                To set the budget and duration for your promotion, tap on either
                the default budget or duration. You can select a total budget
                for the entire Instagram promotion, as well as any duration that
                spends at least $1 of your budget per day. To submit it for
                review, tap the Create Promotion button at the bottom of your
                screen. View Insights
              </p>
              <p>
                After your promotion has been approved, Insights will collect
                stats about your promotion within a few hours. To view them,
                select the post you promoted on your profile. When you tap View
                Insights, you can see the insights for your promotion.
              </p>
            </div>
          </div>
        </section>
      )}
      {service && service.slug == "social-media-marketing" && (
        <section className="py-12 px-6 md:px-32 flex flex-col items-start gap-12">
          <div>
            <h1 className="text-3xl">Social Media Marketing Strategy</h1>
            <p>
              Social media marketing is one of the best platforms to promote a
              product or service, business, brand and also a summary of
              everything you plan to do and hope to achieve on social media. It
              guides your actions and lets you know whether you`re succeeding or
              failing.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              Is It Necessary to have Social Media Account
            </h1>
            <p>
              Why should you spend time creating social media accounts for your
              business? And how do you actually build a social media marketing
              strategy that’ll work for your specific type of business? Why
              social media marketing is important? How to determine which social
              platforms you’ll market on? How we can create unique and engaging
              content? Analyse the impact and results? The questions just go on
              and on.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              Well, there are varieties of reasons why every business create
              social media accounts!!!
            </h1>
            <div className="boxes grid grid-cols-2 gap-12 mt-12">
              <div>
                <h1 className="text-2xl">To build brand awareness</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">Social Media Catalogue</h1>
                <p>
                  Tell Your Customers About Your Products and Varieties you have
                  & Increase the Possibility Of Sales in the Digital Era.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">Customers Involvement</h1>
                <p>
                  By having contest, hosting live videos, implementing social
                  media marketing campaign, fun competitions and many more.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">Fight The Competitor</h1>
                <p>
                  Stand Out From the Crowd & Competition by Getting Identified
                  by your customers. This is the Virtual Competition with
                  opponent.
                </p>
              </div>
              <div>
                <h1 className="text-2xl">Update & Inform Your Audience</h1>
                <p>
                  Maintain PR. Just like Film Teasers & Trailers, Release your
                  Information in a Creative Way with GrowthO. Post News &
                  Information .
                </p>
              </div>
              <div>
                <h1 className="text-2xl">New Advertising Platform</h1>
                <p>
                  47 of the Advertising is now done through Social Media
                  Advertising . Target your niche Audience easily.
                </p>
              </div>
            </div>

            <h1 className="text-3xl">
              Here are some Different marketing strategies that you can use to
              increase traffic!!!
            </h1>
            <p>
              You can use ‘CALL’ button on Facebook ads to eliminate the
              possibility of loosing potential leads at landing stages so that
              customers don’t waste their time in loading or landing on pages.
            </p>
            <img
              src="https://growtho.in/wp-content/uploads/2020/05/3621686.png"
              alt=""
            />
            <p>
              you can create live videos on Facebook to share the latest details
              about a product launch or conduct a giveaway.
            </p>
            <p>
              Use your current customers and promoters to help you generate
              content. You can do this by re-posting their content or
              encouraging them to use a hashtag to share their own experiences
              and pictures with your products. Use twitter to test content
              ideas.
            </p>
            <p>
              Hubspot, sprout social, hootsuite are the social media marketing
              tools which helps you in marketing, content management, manage
              camping, etc You can also do email-marketing whenever there is a
              new products arrives in the market and special offers or discounts
              will take place your customers will aware of it.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">
              In three ways you can educate yourself in field of Social Media
              Marketing
            </h1>
            <p>
              Earn a degree- it is not necessary to have a “social media
              marketing degree” for undergraduates, there are online courses
              offered at a number of different schools and institutions you can
              take to earn a certificate.
            </p>
            <p>
              Use an online learning website- Lynda is another great educational
              resource. This online learning website offers training, tutorials,
              and courses on a wide variety of topics within the field of social
              media marketing.
            </p>
            <p>
              Earn a certificate administered by a company- You might choose to
              earn a certificate from a company — such as HubSpot’s social media
              certification. This free certification teaches you how to engage
              with your customers and improve conversions. You’ll also get a
              better understanding of how to develop your strategy and extend
              your reach
            </p>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Service;
