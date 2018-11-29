import React from 'react';

import Layout from '../../hoc/Layout/';
import Box from '../UI/Box/';
import {headerTitle_2} from '../../shared/utils/stringConstants';

const Privacy = () => {
    return (
        <Layout headerTitle={headerTitle_2}>
            <Box 
                title={headerTitle_2}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
        </Layout>
    );
};

export default Privacy;