import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Blog Posts" />
            <h1>Blog Entries</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge, index) => {
                    return (
                        <li key={index} className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>
                                    {edge.node.title}
                                </h2>
                                <h5>Date Posted: {edge.node.publishedDate}</h5>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;
