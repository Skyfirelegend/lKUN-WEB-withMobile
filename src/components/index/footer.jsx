import { Divider, Flex, Image } from "antd";
import { Button, Table, Typography } from "antd";
import React from "react";
import FadeInContainer from "../common";
const { Text } = Typography;
import lk from "../../static/lk.png";
import qrcode1 from "../../static/qrcode1.png";
import qrcode2 from "../../static/qrcode2.png";
import qrcode3 from "../../static/qrcode3.png";
import shenzhen from "../../static/shenzhen.png";
import close from "../../static/close.png";
import langke from "../../static/langke.png";

import gongan from "../../static/logo_gongan.png"

import Media from 'react-media';


const columns = [
  {
    title: <Text style={{ color: "w" }}>解决方案</Text>,
    dataIndex: "name",
    key: "name",
    align: "center",
    render: (text) => (
      <Button color="default" variant="link">
        <Text style={{ color: "red" }}>{text}</Text>
      </Button>
    ),
  },
  {
    title: "解决方案",
    dataIndex: "age",
    key: "age",
    align: "center",
  },
  {
    title: "联系我们",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
];
const data = [
  {
    name: "AI算力GPU云服务器",
    age: "金融解决方案",
    address: "市场合作",
  },
  {
    name: "",
    age: "音视频解决方案",
    address: "业务咨询",
  },
  {
    name: "",
    age: "政府解决方案",
    address: "",
  },
];
const CPOFooter = () => {
  return (
    <div>
      <Media query="(min-width: 768px)">
        <FadeInContainer
          children={
            <>
              <Flex justify="center" style={{}} align="flex-start">
                <Flex vertical style={{ width: "300px" }}>
                  <Flex justify="space-between">
                    <img
                      style={{ width: "99px", marginBottom: "35px", marginTop: '15px', cursor: 'pointer' }}
                      aria-labelledby="logo"
                      src={langke}
                      onClick={() => { window.open('https://www.netac.com.cn/', '_blank') }}
                    />
                    {/* <a href="https://www.netac.com.cn" target="_blank" style={{ marginBottom: "1.9vw", marginTop: '15px' }}>
                      <img
                        style={{ width: "99px" }}
                        aria-labelledby="logo"
                        src={langke}
                      />
                    </a> */}
                  </Flex>

                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    深圳市朗科科技股份有限公司
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系电话：0755-26727800
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系地址：深圳市南山区高新南六道朗科大厦
                  </Text>
                  <div style={{ marginTop: "13px" }}>
                    <img
                      style={{ width: "46px", marginRight: "12px" }}
                      src={qrcode1}
                      alt=""
                    />
                    <img style={{ width: "46px" }} src={qrcode1} alt="" />
                  </div>
                </Flex>
                <Divider
                  style={{
                    height: "200px",
                    border: "0.5px solid rgba(51,51,51, 0.08)",
                    marginInline: "29px",
                  }}
                  type="vertical"
                />
                <Flex vertical style={{ width: "300px" }}>
                  <Flex justify="space-between">
                    {/* <a href="/" style={{ marginBottom: "2vw", marginTop: '15px' }}>
                      <img
                        style={{ width: "103px" }}
                        aria-labelledby="logo"
                        src={lk}
                      />
                    </a> */}
                    <img
                      style={{ width: "103px", marginBottom: "38px", marginTop: '15px', cursor: 'pointer' }}
                      aria-labelledby="logo"
                      src={lk}
                      onClick={() => { window.open('/', '_self') }}
                    />
                  </Flex>

                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    韶关乳源朗坤科技有限公司
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系电话：0755-26994802
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系地址：乳源瑶族自治县乳城镇鹰峰西路1号金瑶山商务楼C栋
                  </Text>
                  <div style={{ marginTop: "7px" }}>
                    <img style={{ width: "46px" }} src={qrcode3} alt="" />
                  </div>
                </Flex>
                <Divider
                  style={{
                    height: "200px",
                    border: "0.5px solid rgba(51, 51, 51, 0.08)",
                    marginInline: "29px",
                  }}
                  type="vertical"
                />
                <Flex vertical style={{ width: "300px" }}>
                  <Flex justify="space-between">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "32px",
                      }}
                    >
                      <img style={{ height: "38px" }} src={shenzhen} alt="" />
                      <img
                        style={{ height: "9px", margin: "0 8px 0 8px" }}
                        src={close}
                        alt=""
                      />
                      <img style={{ height: "19px" }} src={langke} alt="" />
                    </div>
                  </Flex>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    深圳大学-朗科科技算力调度与提升联合实验室
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系电话：0755-26533601
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "12px" }}>
                    联系地址：深圳市南山区南海大道3688号深圳大学 （沧海校区）致信楼N701
                  </Text>
                </Flex>
              </Flex>
              <div
                style={{
                  marginTop: "34px",
                  borderTop: "1px solid rgba(51,51,51,0.08)",
                  color: "rgba(51,51,51,0.6)",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "20px",
                  textAlign: "center",
                  paddingTop: '19px'
                }}
              >
                <a href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(51,51,51,0.6)",
                    marginRight: "1vw"
                  }}>
                  粤ICP备2024335770号-2
                </a>

                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44020302000291"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "rgba(51,51,51,0.6)"
                  }}>
                  <img
                    src={gongan}
                    style={{
                      height: "17px",
                      width: '16px',
                      marginRight: '1px',
                      transform: 'translateY(2px)'
                    }}
                  />
                  粤公网安备44020302000291号
                </a >
              </div>
            </>
          }
        />
      </Media>

      <Media query="(max-width: 767px)">
        <FadeInContainer
          children={
            <>
              <Flex justify="center" style={{}} align="flex-start">
                <Flex vertical style={{ width: "80px" }}>
                  <Flex justify="space-between">
                    <img
                      style={{ width: "60px", marginBottom: "15px", marginTop: '4px', cursor: 'pointer' }}
                      aria-labelledby="logo"
                      src={langke}
                      onClick={() => { window.open('https://www.netac.com.cn/', '_blank') }}
                    />
                    {/* <a href="https://www.netac.com.cn" target="_blank" style={{ marginBottom: "1.9vw", marginTop: '15px' }}>
                        <img
                          style={{ width: "99px" }}
                          aria-labelledby="logo"
                          src={langke}
                        />
                      </a> */}
                  </Flex>

                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    深圳市朗科科技股份有限公司
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系电话：0755-26727800
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系地址：深圳市南山区高新南六道朗科大厦
                  </Text>
                  <div style={{ marginTop: "6px" }}>
                    <img
                      style={{ width: "46px", marginRight: "12px" }}
                      src={qrcode1}
                      alt=""
                    />
                    <img style={{ width: "46px" }} src={qrcode1} alt="" />
                  </div>
                </Flex>
                <Divider
                  style={{
                    height: "200px",
                    border: "0.5px solid rgba(51,51,51, 0.08)",
                    marginInline: "15px",
                  }}
                  type="vertical"
                />
                <Flex vertical style={{ width: "80px" }}>
                  <Flex justify="space-between">
                    {/* <a href="/" style={{ marginBottom: "2vw", marginTop: '15px' }}>
                        <img
                          style={{ width: "103px" }}
                          aria-labelledby="logo"
                          src={lk}
                        />
                      </a> */}
                    <img
                      style={{ width: "90px", marginBottom: "12px", marginTop: '5px', cursor: 'pointer' }}
                      aria-labelledby="logo"
                      src={lk}
                      onClick={() => { window.open('/', '_self') }}
                    />
                  </Flex>

                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    韶关乳源朗坤科技有限公司
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系电话：0755-26994802
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系地址：乳源瑶族自治县乳城镇鹰峰西路1号金瑶山商务楼C栋
                  </Text>
                  <div style={{ marginTop: "7px" }}>
                    <img style={{ width: "46px" }} src={qrcode3} alt="" />
                  </div>
                </Flex>
                <Divider
                  style={{
                    height: "200px",
                    border: "0.5px solid rgba(51, 51, 51, 0.08)",
                    marginInline: "15px",
                  }}
                  type="vertical"
                />
                <Flex vertical style={{ width: "120px" }}>
                  <Flex justify="space-between">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <img style={{ height: "20px" }} src={shenzhen} alt="" />
                      <img
                        style={{ height: "6px", margin: "0 5px 0 5px" }}
                        src={close}
                        alt=""
                      />
                      <img style={{ height: "11px" }} src={langke} alt="" />
                    </div>
                  </Flex>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    深圳大学-朗科科技算力调度与提升联合实验室
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系电话：0755-26533601
                  </Text>
                  <Text style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: "1.8vw" }}>
                    联系地址：深圳市南山区南海大道3688号深圳大学 （沧海校区）致信楼N701
                  </Text>
                </Flex>
              </Flex>
              <div
                style={{
                  marginTop: "34px",
                  borderTop: "1px solid rgba(51,51,51,0.08)",
                  color: "rgba(51,51,51,0.6)",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "20px",
                  textAlign: "center",
                  paddingTop: '19px'
                }}
              >
                <a href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(51,51,51,0.6)",
                    fontSize: '1.8vw',
                    marginRight: "1.3vw",
                  }}>
                  粤ICP备2024335770号-2
                </a>
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44020302000291"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "rgba(51,51,51,0.6)",
                    fontSize: '1.8vw'
                  }}
                >
                  <img
                    src={gongan}
                    style={{
                      height: "17px",
                      width: '16px',
                      marginRight: '0.2vw',
                      transform: 'translateY(0.3vw)',
                      // transform: 'translateY(2px)'
                    }}
                  />
                  粤公网安备44020302000291号
                </a >
              </div>
            </>
          }
        />
      </Media>
    </div>


  );
};

export default CPOFooter;
