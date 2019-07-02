import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 Not Found" />
            <h2>Oh no, this page doesn't exist!  I'm so sorry you got lost on your travel, may I offer you a link back home?</h2>
            <h3><Link to="/">HOME</Link></h3>
        </Layout>
    )
}

export default NotFound;
