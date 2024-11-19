import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";

function About() {
  return (
    <Layout>
      <div className="container max-w-4xl">
        <h1 className="">About</h1>
        <section>
          <p>
            Welcome to <strong>XFR News</strong>, your go-to platform for the latest insights, updates, and discussions
            across a variety of fields. Our mission is to provide high-quality, timely news that informs, educates, and
            inspires our audience.
          </p>
          <p>
            We cover a wide range of topics, from emerging technologies and business trends to educational resources,
            development tips, and fan culture. Whether you're a tech enthusiast, a business professional, or someone
            passionate about learning, XFR News has something for you.
          </p>
        </section>

        <section>
          <h2>Our Categories</h2>
          <p>
            At XFR News, we organize our content into the following categories, ensuring that you can easily find the
            topics that matter most to you:
          </p>

          <ul>
            <li>
              <strong>Tech</strong> - Explore the latest in <strong>technology</strong>, from cutting-edge gadgets to
              groundbreaking software and trends that shape the digital world. Stay up to date with everything
              tech-related—from AI advancements to the future of the internet.
            </li>
            <li>
              <strong>Business</strong> - Get in-depth coverage of the <strong>business world</strong>, including market
              trends, industry news, financial tips, and company profiles. Whether you're an entrepreneur, investor, or
              business enthusiast, this category offers valuable insights into the business landscape.
            </li>
            <li>
              <strong>Courses</strong> - Learning never stops. Discover a wide variety of{" "}
              <strong>educational resources</strong>, from online courses and certifications to tutorials and study
              guides. Whether you're looking to upskill for your career or explore new fields, our Courses section has
              you covered.
            </li>
            <li>
              <strong>Books</strong> - Our <strong>Books</strong> category features reviews, recommendations, and
              discussions of books that are essential for personal growth, business success, tech innovation, and more.
              Get inspired by the world of literature with a focus on nonfiction, self-help, and professional
              development.
            </li>
            <li>
              <strong>Development</strong> - In the <strong>Development</strong> section, we dive into the world of
              software and web development, programming languages, coding tutorials, and industry best practices.
              Whether you're a seasoned developer or a newbie, this is the place to find expert advice and learning
              resources.
            </li>
            <li>
              <strong>Other</strong> - Our <strong>Other</strong> category is dedicated to a variety of topics that
              don't quite fit into the other categories but are still relevant to our readers. Here you'll find
              discussions on pop culture, lifestyle, and current events—things that are happening in the world outside
              of tech, business, and education.
            </li>
            <li>
              <strong>Fan</strong> - Are you a fan of a particular movie, series, game, or fandom? In the{" "}
              <strong>Fan</strong> category, we bring you news, reviews, and fan-related content, from movie releases
              and gaming news to cosplay tips and community events. Connect with fellow fans and celebrate your
              passions.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose XFR News?</h2>
          <ul>
            <li>
              <strong>Curated Content:</strong> We ensure that every piece of content is carefully curated to provide
              value and insight.
            </li>
            <li>
              <strong>Expert Writers:</strong> Our team of experienced writers and industry experts deliver accurate,
              up-to-date news and opinions.
            </li>
            <li>
              <strong>Diverse Topics:</strong> Whether you're interested in tech, business, books, or fandoms, XFR News
              covers a wide range of topics to cater to all interests.
            </li>
            <li>
              <strong>Engaging Community:</strong> Join a growing community of readers and engage in thoughtful
              discussions on the topics that matter most.
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or want to contribute? Feel free to reach out through our contact page, or follow
            us on social media for the latest updates and news.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export const Head = () => <SEO title="Page Two" />;

export default About;
