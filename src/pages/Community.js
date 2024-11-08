import React from "react";
import { blogPosts } from "../components/BlogData";
import "../styles/Community.css";
import ScrollToTop from "../functions/ScrollToTop";

export default function Community() {
  return (
    <section className="blog">
      <h2 className="main-title">latest from the blogs</h2>
      <section className="blog-container">
        {blogPosts.map((post) => (
          <section key={post.id} className="blog-card">
            <section className="blog-details">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-des">{post.description}</p>
              <section className="blog-footer">
                <p className="blog-date">{post.date}</p>
                <button className="blog-btn">read more</button>
              </section>
            </section>
          </section>
        ))}
      </section>
      <ScrollToTop />
    </section>
  );
}
