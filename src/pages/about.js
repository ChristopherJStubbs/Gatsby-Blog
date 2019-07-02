import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>My name is Chris Stubbs.  I am a Web Developer from sunny San Diego, CA.</p>
            <p>
                Want to get in touch? <Link to="/contact"> Contact Me </Link>
            </p>
        </Layout>
    )
}

export default AboutPage;
