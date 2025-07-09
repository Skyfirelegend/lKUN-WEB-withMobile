import React, { useEffect } from 'react';
import { Flex, ConfigProvider, Layout } from 'antd';
import { Outlet } from '@modern-js/runtime/router';
import 'animate.css'
import CPOFooter from '../components/index/footer';
import CPOHeader from '../components/index/header';
import CPOHeaderMobile from '../components/index/headermobile';
import './index.css';
import './layout.css';
const { Header, Content, Footer } = Layout;

import Media from 'react-media';
import { isMobile } from 'react-device-detect';

export default function GLayout() {
  const dealShowPage = () => {
    return ['/document'].includes(location.pathname);
  }

  // useEffect(() => {
  //   console.log(['/document'].includes(location.pathname))
  // }, [])

  return (

    <ConfigProvider
      theme={{


        token: {
          colorBgContainer: 'rgba(255, 255, 255, 0)',
          borderRadiusLG: 0,
          fontFamily: 'MyCustomFont',
          fontFamilyCode: 'MyCustomFont',
        },
        components: {
          Layout: {
            headerBg: '#fff',
            bodyBg: '#fff',
            footerBg: '#EAF2FF',
          },
          Table: {
            headerBg: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgba(255, 255, 255, 0)',
            headerSplitColor: 'rgba(255, 255, 255, 0)',
          },
          Select: {
            // optionActiveBg: '#ffffff',
            // optionSelectedBg: '#ffffff',
            optionHeight: '1.2vw',
            optionFontSize: '0.93vw',
            optionSelectedColor: 'rgba(15, 98, 240, 1)'
          }
        },
      }}
    >

      <Media query="(min-width: 768px)">
        {/* {matches => matches ? <div>大屏幕显示的内容</div> : null} */}

        {/* <div>
          大屏幕显示的内容
          <div>当前设备类型: {isMobile ? '手机' : '桌面'}</div>
        </div> */}

        <Layout>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 38,
              paddingRight: 0,
              top: 0,
              position: 'sticky',
              zIndex: 1
            }}
          >
            <CPOHeader />
          </Header>
          <Flex vertical gap={0} style={{ height: '100%' }} >
            <Content style={{ height: '100%' }}>

              <Outlet />
            </Content>
            <Footer>
              <CPOFooter />
            </Footer>
          </Flex>
        </Layout>

      </Media>

      <Media query="(max-width: 767px)">
        {/* {matches => matches ? <div>小屏幕显示的内容</div> : null} */}
        <Layout>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 38,
              paddingRight: 0,
              top: 0,
              position: 'sticky',
              zIndex: 1
            }}
          >
            {/* 5666 */}
            <CPOHeaderMobile />
          </Header>

          <Flex vertical gap={0} style={{ height: '100%' }} >
            <Content style={{ height: '100%' }}>
              <Outlet />
            </Content>
            <Footer>
              <CPOFooter />
            </Footer>
          </Flex>
        </Layout>
      </Media>


      {/* <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 38,
            paddingRight: 0,
            top: 0,
            position: 'sticky',
            zIndex: 1
          }}
        >
          <CPOHeader />
        </Header>
        <Flex vertical gap={0} style={{ height: '100%' }} >
          <Content style={{ height: '100%' }}>

            <Outlet />
          </Content>

          {!dealShowPage() && <Footer>
            <CPOFooter />
          </Footer>}

          <Footer>
            <CPOFooter />
          </Footer>
        </Flex>
      </Layout> */}
    </ConfigProvider >
  )


}
