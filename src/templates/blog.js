import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (
            slug: {
                eq: $slug
            }
        ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img src={url} alt={alt} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h2>{props.data.contentfulBlogPost.title}</h2>
            <h5>{props.data.contentfulBlogPost.publishedDate}</h5>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog;
