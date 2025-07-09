import { Card, Col, Flex, Row, Space, Typography } from 'antd';
const { Text } = Typography;
const { Meta } = Card;
import FadeInContainer from '../common';
import { useEffect, useRef } from 'react';

// const suffix = "png";
const suffix = "svg";

// import cardImage1 from '../../static/image-3 1.png';
// import cardImage2 from '../../static/image-4 1.png';
// import cardImage3 from '../../static/image-5 1.png';
// import cardImage4 from '../../static/image 9.png';
// import cardImage5 from '../../static/image-6 1.png';
// import cardImage6 from '../../static/image-7 1.png';
// import cardImage7 from '../../static/image-8 1.png';
// import cardImage8 from '../../static/image.png';
// import cardImage10 from '../../static/image-11 1.png';
// import cardImage11 from '../../static/image-12 1.png';
// import cardImage12 from '../../static/image-13 1.png';
// import cardImage9 from '../../static/image-101.png';

import cardImage1 from '../../static/image-3 1.svg';
import cardImage2 from '../../static/image-4 1.svg';
import cardImage3 from '../../static/image-5 1.svg';
import cardImage4 from '../../static/image 9.svg';
import cardImage5 from '../../static/image-6 1.svg';
import cardImage6 from '../../static/image-7 1.svg';
import cardImage7 from '../../static/image-8 1.svg';
import cardImage8 from '../../static/image.svg';
import cardImage10 from '../../static/image-11 1.svg';
import cardImage11 from '../../static/image-12 1.svg';
import cardImage12 from '../../static/image-13 1.svg';
import cardImage9 from '../../static/image-10 1.svg';

import styles from './index.module.less';
import Media from 'react-media';
const data = [
  [
    {
      icon: `${cardImage1}`,
      cardTitle: '韶关市人民政府',
    },
    {
      icon: `${cardImage2}`,
      cardTitle: '韶关市城市投资发展集团',
    },
    {
      icon: `${cardImage3}`,
      cardTitle: '韶关市算力产业协会',
    },
    {
      icon: `${cardImage8}`,
      cardTitle: '韶关市数据产业研究院',
    },
  ],
  [
    {
      icon: `${cardImage5}`,
      cardTitle: '沐曦集成电路',
    },
    {
      icon: `${cardImage6}`,
      cardTitle: '寒武纪',
    },
    {
      icon: `${cardImage7}`,
      cardTitle: '宝德科技',
    },
    {
      icon: `${cardImage4}`,
      cardTitle: '深圳大学',
    },
  ],
  [
    {
      icon: `${cardImage9}`,
      cardTitle: '端脑科技',
    },
    {
      icon: `${cardImage10}`,
      cardTitle: '海光信息',
    },
    {
      icon: `${cardImage11}`,
      cardTitle: '玄度时空云',
    },
    {
      icon: `${cardImage12}`,
      cardTitle: '众合科技',
    },
  ],
];
const rowSize = 3;
const colSize = 4;
const CPOCooperativePartner = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      console.log(img.naturalWidth);
      img.width = img.naturalWidth / 2;
      img.height = img.naturalHeight / 2;
    }
  }, []);
  return (
    <div>
      <Media query="(min-width: 768px)">
        <Flex vertical justify="center" align="center" gap={50} style={{ marginTop: '50px' }}>
          <FadeInContainer
            children={
              <Flex style={{ width: '100%' }} justify="center" align="center">
                <Text style={{ fontSize: '24px' }}>合作伙伴</Text>
              </Flex>

            }
          />

          {data.map((items, rowIndex) => (
            <div className={styles.pDataWrapper} key={`ss-${rowIndex}`}>
              {items.map((item, colIndex) => (
                <div className={styles.dataWrapper} key={item.cardTitle}>
                  <Card

                    className={styles.imgCard}
                    hoverable
                    styles={{
                      body: {
                        padding: 0,
                        height: '100%',
                      },
                    }}
                  >
                    <FadeInContainer
                      children={
                        <div className={styles.imgWraper}>
                          <img
                            alt="example"
                            src={data[rowIndex][colIndex].icon}
                          />
                          <div className={styles.text}> {data[rowIndex][colIndex].cardTitle}</div>
                        </div>

                      }
                    />

                  </Card>

                </div>


              ))}
            </div>
          ))}
        </Flex>
      </Media>

      <Media query="(max-width: 767px)">
        <Flex vertical justify="center" align="center" gap={50} style={{ marginTop: '8vw' }}>
          <FadeInContainer
            children={
              <Flex style={{ width: '100%' }} justify="center" align="center">
                <Text style={{ fontSize: '3vw' }}>合作伙伴</Text>
              </Flex>

            }
          />

          {data.map((items, rowIndex) => (
            <div className={styles.pDataWrapperMobile} key={`ss-${rowIndex}`}>
              {items.map((item, colIndex) => (
                <div className={styles.dataWrapperMobile} key={item.cardTitle}>
                  <Card
                    className={styles.imgCardMobile}
                    hoverable
                    styles={{
                      body: {
                        padding: 0,
                        height: '100%',
                      },
                    }}
                  >
                    <FadeInContainer
                      children={
                        <div className={styles.imgWraper}>
                          <img
                            alt="example"
                            src={data[rowIndex][colIndex].icon}
                          />
                          <div className={styles.text}> {data[rowIndex][colIndex].cardTitle}</div>
                        </div>

                      }
                    />
                  </Card>
                </div>


              ))}
            </div>
          ))}
        </Flex>
      </Media>
    </div>


  );
};

export default CPOCooperativePartner;
