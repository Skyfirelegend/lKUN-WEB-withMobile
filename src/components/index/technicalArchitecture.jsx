import { Flex, Space, Typography } from 'antd';
const { Text } = Typography;
import FadeInContainer from '../common'
import shipin from '../../static/shipin.mp4';

import Media from 'react-media';

const CPOTechnicalArchitecture = () => {
  return (
    <FadeInContainer
      children={
        <Flex
          style={{
            width: '100%',
            background: 'rgba(247, 250, 255, 1)',
            marginTop: '50px'

          }}
          justify="center"
          align="center"
        >

          <Media query="(min-width: 768px)">
            <Flex vertical justify="center"
              align="center" gap={50}>
              <Text style={{
                fontSize: "24px",
                paddingTop: "50px"
              }}>宣传视频</Text>
              {/* <video width="1080px" controls preload="metadata" crossOrigin="anonymous" src={shipin} type="video/mp4"> */}
              <video width="1000vw" controls preload="metadata" crossOrigin="anonymous" src={shipin} type="video/mp4" />
            </Flex>
          </Media>

          <Media query="(max-width: 767px)">
            <Flex vertical justify="center"
              align="center" gap='5vw'>
              <Text style={{
                fontSize: "3vw",
                paddingTop: "5vw"
              }}>宣传视频</Text>
              {/* <video width="1080px" controls preload="metadata" crossOrigin="anonymous" src={shipin} type="video/mp4"> */}
              <video width="387vw" controls preload="metadata" crossOrigin="anonymous" src={shipin} type="video/mp4" />
            </Flex>
          </Media >

        </Flex >
      }
    />

  );
};

export default CPOTechnicalArchitecture;
