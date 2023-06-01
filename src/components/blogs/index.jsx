import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="light"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Deepak Kushwaha"
                    date="Mar 8 2023"
                    image={Blog1}
                    title="React Js Vs Next Js"
                    description="In this blog we will briefly discuss the feature of both react and next js from top to down"
                    link="https://www.youtube.com/"
                />
                <BlogCard
                    user="Deepak Kushwaha"
                    date="April 10 2023"
                    image={Blog2}
                    title="Firebase as Backend"
                    description="In this article we will discuss how can we use Google's Firebase as our backend server side."
                />
                <BlogCard
                    user="Deepak Kushwaha"
                    date="May 18 2023"
                    image={Blog3}
                    title="SEO vs SEM"
                    description="The difference between search engine optimization (SEO) and search engine marketing (SEM) is that SEO focuses on getting traffic from organic search, whereas SEM focuses on getting traffic from organic and paid search. "
                />
                <BlogCard
                    user="Deepak Kushwaha"
                    date="May 25 2023"
                    image={Blog3}
                    title="Unserstanding GitLab"
                    description="Gitlab from Basic to Advanced"
                />
                
            </div>
        </Section>
    );
};

export default Blogs;
