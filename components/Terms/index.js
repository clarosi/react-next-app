import React from 'react';

import Layout from '../../hoc/Layout/';
import Box from '../UI/Box/';
import {headerTitle_3} from '../../shared/utils/stringConstants';

const Terms = () => {
    return (
        <Layout headerTitle={headerTitle_3}>
            <Box 
                title={headerTitle_3}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
        </Layout>
    );
};

export default Terms;