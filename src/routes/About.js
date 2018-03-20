import React from 'react';
import styled from 'styled-components'
import {biscuit} from '../style/colors'


const Intro = styled.div`
   // background-color: ${biscuit};
   // height: 800px;
`;


export default () => (
    <div>

        <iframe id="ytplayer" type="text/html" width="1000" height="360"
                src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0"/>
    </div>
)