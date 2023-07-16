import Link from "next/link";

const blogs = [
  {
    id: "1",
    title: "Digital Marketing",
    published_on: "12-1-2020",
    thumb: "https://growtho.in/wp-content/uploads/2020/12/31958-1-scaled.jpg",
    related_posts: ["4", "2", "3"],
    short_description:
      "Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps.",
    long_description:
      "Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps.Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands.",
    tags: [
      "Advertisments",
      "Blog",
      "Design",
      "Logo",
      "Marketing",
      "SEO",
      "Social Media",
    ],
    slug: "digital-marketing",
    JSX: (
      <>
        <h3 className="text-3xl">Digital Marketing</h3>
        <div className="mt-3">
          <p>
            Digital marketing refers to advertising delivered through digital
            channels such as search engines, websites, social media, email, and
            mobile apps. Using these online media channels, digital marketing is
            the method by which companies endorse goods, services, and brands.
          </p>
          <ul className="mt-6 flex flex-col items-start gap-2">
            <li>
              <p>
                Can easily reach your audience: Almost 77% Indians own a
                smartphone and are likely to use that smartphone or another
                mobile device for news, social networking, and countless other
                activities. Digital marketing helps you reach them while they’re
                doing this. With remarketing ads, email and text marketing, and
                social media – you can be in front of your audience while they
                use many different apps on their mobile phones.
              </p>
            </li>
            <li>
              <p>
                Digital marketing is considerably less expensive than other
                marketing methods. Specific prices vary based on what you’re
                doing but ad spend tends to be lower than other forms of
                marketing like print advertisement or television advertisements.
              </p>
            </li>
            <li>
              <p>
                Customers tend to engage more with marketing materials that
                combine multiple types of content, including photos, video
                clips, and audio. It is far easier to incorporate all these
                content types into digital marketing than any other type of
                publicity – and it is very important.
              </p>
            </li>
            <li>
              <p>
                There are many forms and uses of high quality digital marketing,
                including banner ads, email marketing, content marketing, and
                social media posts. Thus by learning how to creatively market
                yourself digitally, you open up a wide range of possibilities
                for future publicity strategies. With digital marketing, you
                also have the flexibility of testing and stopping poorly
                performing campaigns in real time.
              </p>
            </li>
            <li>
              <p>
                Digital marketing lets you communicate directly with the
                customers who see your content, notably through website
                comments, messages, reviews, and social media posts. This shows
                those customers that you care about what they say and think,
                leading them to feel respected and part of the community you’re
                building. It also allows you to gather invaluable information on
                customers’ reactions and preferences.
              </p>
            </li>
            <li>
              <p>
                Besides communicating with customers, digital marketing lets you
                track their activities. You can monitor which ads and types of
                content they have seen shortly before they make a purchase. This
                tells you which marketing methods are most effective, allowing
                you to refine and improve your strategy.
              </p>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "2",
    title: "Social Media Marketing",
    thumb: "https://growtho.in/wp-content/uploads/2020/12/3401222-scaled.jpg",
    published_on: "12-01-2020",
    short_description:
      "Social media marketing involves creating and sharing content on socialmedia platforms to connect with your audience to build your brand.",
    long_description:
      "Social media marketing involves creating and sharing content on social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic and engagement. This involve publishing great content on your social media profiles, listening to an engaging your followers, analyzing your results, and running social media advertisements. The major social media platforms are Facebook, Instagram, Twitter,LinkedIn, Pinterest, YouTube, and Snapchat.",
    tags: ["Advertisments", "Blog", "Marketing", "SEO", "Social Media"],
    slug: "social-media-marketing",
    related_posts: ["4", "1", "3"],
    JSX: (
      <>
        <h3>Search engine optimization</h3>
        <div>
          <p>
            SEO stands for search engine optimization, in simple terms, it means
            the process of improving a website in ways that help it rank in
            search results when users search for specific words and phrases. It
            increase its visibility for relevant searches. The better visibility
            your pages have in search results, the more likely you are to garner
            attention and attract prospective and existing customers to your
            business. This has the potential to make a huge impact on your
            company’s most important goals, like increasing your leads and
            sales.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "3",
    thumb: "https://growtho.in/wp-content/uploads/2020/11/logopic1.png",
    title: "Importance Of Logos",

    related_posts: ["4", "1", "2"],
    published_on: "12-01-2020",
    short_description:
      "A logo is essential in any business, big or small, to provide a visual identity and as a recognizable symbol",
    long_description:
      "A logo is essential in any business, big or small, to provide a visual identity and as a recognizable symbol of your organization logo is critical for business success through brand-recognition. Having a strong logo and brand enables customers to automatically locate the brand at a glance. People will come to recognize your brand at a glance, and the more they see it, the more you will be remembered as the “go to” company for your particular product or service. A logo is something that you should be proud to include on building and car signage, on company clothing and stationery. Your logo needs to be a unique and recognizable representation of you, and your products and services. A logo leads the horse (your audience) to water (your company).Logos are a point of identification; they’re the symbol that customers use to recognize your brand. A good logo is a visual, aesthetically pleasing element, it triggers positive recall about your brand that the name of your company alone might not. Some of your audience will likely forget the name of your business but they`ll immediately associate your logo with their memories of your brand.",
    tags: ["Advertisments", "Blog", "Marketing", "SEO", "Social Media"],
    slug: "importance-of-logos",
    JSX: (
      <>
        <h3>Search engine optimization</h3>
        <div>
          <p>
            SEO stands for search engine optimization, in simple terms, it means
            the process of improving a website in ways that help it rank in
            search results when users search for specific words and phrases. It
            increase its visibility for relevant searches. The better visibility
            your pages have in search results, the more likely you are to garner
            attention and attract prospective and existing customers to your
            business. This has the potential to make a huge impact on your
            company’s most important goals, like increasing your leads and
            sales.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "4",
    title: "Search Engine Optimization",
    thumb: "https://growtho.in/wp-content/uploads/2020/11/19199749-scaled.jpg",
    published_on: "12-01-2020",
    related_posts: ["3", "1", "2"],
    short_description:
      "SEO stands for search engine optimization, in simple terms, it means the process of improving a website in ways that help it rank in search results when users search for specific words and phrases. It increase its visibility for relevant searches",
    long_description:
      "SEO stands for search engine optimization, in simple terms, it means the process of improving a website in ways that help it rank in search results when users search for specific words and phrases. It increase its visibility for relevant searches",
    tags: ["Advertisments", "Blog", "Marketing", "Social Media"],
    slug: "search-engine-optimization",
    JSX: (
      <>
        <h3 className="text-3xl">Search engine optimization</h3>
        <div className="mt-6">
          <p>
            SEO stands for search engine optimization, in simple terms, it means
            the process of improving a website in ways that help it rank in
            search results when users search for specific words and phrases. It
            increase its visibility for relevant searches. The better visibility
            your pages have in search results, the more likely you are to garner
            attention and attract prospective and existing customers to your
            business. This has the potential to make a huge impact on your
            company’s most important goals, like increasing your leads and
            sales.
          </p>
          <p>
            One of the biggest advantages of SEO is that it’s an{" "}
            <Link href="" className="text-blue-500">
              inbound marketing strategy.
            </Link>{" "}
            Unlike traditional “outbound” advertising channels, which involve
            reaching out to consumers whether they want to hear from you or not,
            inbound methods are much more customer-centric. Instead of
            interrupting consumers as they’re watching TV or listening to the
            radio, it involves creating helpful resources and making helpful
            information more easily accessible.
          </p>
          <div className="grid md:grid-cols-3 items-center">
            <p className="col-span-2">
              Moreover, SEO gets more clicks than advertisements because of the
              fact is that the majority of the clicks for any given search go to
              an organic result. Instead of a pay per click advertisement.
            </p>
            <img src="/undraw.png" title="Search engine optimization" />
          </div>
          <div className="grid md:grid-cols-3 items-center">
            <img src="/undraw_chart.png" title="Search engine optimization" />
            <p className="col-span-2">
              And considering all of these clear advantages, there’s no reason
              not to optimize your site.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default blogs;
