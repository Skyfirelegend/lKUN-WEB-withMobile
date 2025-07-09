import qrcode1 from './img/qrcode1.png'
import qrcode2 from './img/qrcode2.png'
import aboutBanner from './img/aboutBanner.png'
import styles from "./index.module.less";
import FadeInContainer from '../../../components/common'
import React, { useState, useEffect } from "react";

import Media from 'react-media';

const ContactUs = () => {
  useEffect(() => {
    document.title = '联系我们-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Media query="(min-width: 768px)">
        <FadeInContainer children={
          <>
            <div className={styles.banner}>
              <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} draggable="false" src={aboutBanner} alt="" />
            </div>
            <div className={styles.tabs}>
              <div className={styles.contactUs}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div className={styles.title}>技术支持 </div>
                    <div className={styles.desc}>为您提供专业的售后技术支持，7*24小时快速响应。</div>
                    <div className={styles.tel}>联系电话：0755-26994802</div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.title}>方案咨询</div>
                    <div className={styles.desc}>为您提供专业的一站式算力调度解决方案和运维平台。</div>
                    <div className={styles.tel}>联系电话：0755-26727800</div>
                  </div>
                </div>
                <div className={styles.focusUs}>
                  <div className={styles.left}>
                    <div className={styles.title}>关注我们 </div>
                    <div className={styles.desc}>扫描二维码关注，获得进一步了解。</div>
                  </div>
                  <div className={styles.right}>
                    <img src={qrcode1} alt="" />
                    <img src={qrcode2} alt="" />
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
      </Media>

      <Media query="(max-width: 767px)">
        <FadeInContainer children={
          <>
            <div className={styles.banner}>
              <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} draggable="false" src={aboutBanner} alt="" />
            </div>
            <div className={styles.tabs}>
              <div className={styles.contactUs}>
                <div className={styles.contentMobile}>
                  <div className={styles.left}>
                    <div className={styles.title}>技术支持 </div>
                    <div className={styles.desc}>为您提供专业的售后技术支持，7*24小时快速响应。</div>
                    <div className={styles.tel}>联系电话：0755-26994802</div>
                  </div>
                </div>
                <div className={styles.contentMobile}>
                  <div className={styles.left}>
                    <div className={styles.title}>方案咨询</div>
                    <div className={styles.desc}>为您提供专业的一站式算力调度解决方案和运维平台。</div>
                    <div className={styles.tel}>联系电话：0755-26727800</div>
                  </div>
                </div>
                <div className={styles.focusUsMobile}>
                  <div className={styles.left}>
                    <div className={styles.title}>关注我们 </div>
                    <div className={styles.desc}>扫描二维码关注，获得进一步了解。</div>
                  </div>
                  <div className={styles.right}>
                    <img src={qrcode1} alt="" />
                    <img src={qrcode2} alt="" />
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
      </Media>
    </div>


  );
};
export default ContactUs;

