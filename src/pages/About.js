import React from "react";
import "../styles/About.css";
import placeholder from "../images/placeholder.jpeg";
import ScrollToTop from "../functions/ScrollToTop";

export default function About() {
  return (
    <section>
      <main className="aboutus">
        <h2>about us</h2>
        <p>
          Welcome to Kurls, your go-to destination for all things natural hair
          care! We believe that every curl, coil, and wave deserve to be
          celebrated, nurtured, and embraced. Our mission is to empower
          individuals with textured hair to love and care for their hair with
          confidence, by providing personalized solutions, expert guidance, and
          community support.
        </p>
        <p>
          At Kurls, we understand that no two heads of hair are the same. That’s
          why our approach is all about customization and education. From our
          in-depth hair questionnaires that help you identify your unique hair
          type and needs, to our curated product recommendations, we’re here to
          make your hair journey smoother and more rewarding.{" "}
        </p>
        <p>
          Our platform is designed to offer more than just hair care advice.
          It’s a space for community, learning, and self-expression. Discover
          styling tutorials, ingredient glossaries, hair growth tracking, and
          expert insights—all tailored to help you achieve your hair goals.
          Whether you’re a seasoned naturalist or just beginning your journey,
          Kurls is here to support you every step of the way.
        </p>
        <img src={placeholder} alt="" />
      </main>
      <main className="ourfounder">
        <h2>our founder</h2>
        <p>
          I, Erin Harper, the visionary behind Kurls, am passionate about
          celebrating natural beauty and empowering people to embrace their
          unique hair textures. As someone who has personally navigated the
          challenges of finding the right products and routines for natural
          hair, I understand the importance of a personalized, informed approach
          to hair care.
        </p>
        <p>
          Dedicated to fostering diversity and inclusion, I am committed to
          making hair care accessible to everyone. Whether you're looking to
          enhance your natural hair routine, discover new products, or simply
          connect with others who share similar hair journeys, Kurls is here to
          inspire and support you every step of the way.
        </p>
        <img src={placeholder} alt="" />
      </main>
      <ScrollToTop />
    </section>
  );
}
