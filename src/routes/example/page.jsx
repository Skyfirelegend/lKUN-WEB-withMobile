import { ConfigProvider, Layout } from 'antd';
import { Flex } from 'antd';
import React, { useEffect } from 'react';
import lingang from './img/lingang.png';
import shenzhenUniversity from './img/shenzhen-university.png';
import SUAT from './img/SUAT.svg'
import zhongan from './img/zhongan.png'
import banner from './img/banner.png'
import styles from './index.module.less'
import FadeInContainer from '../../components/common'
import Media from 'react-media';

const data = [
  {
    img: zhongan,
    title: '中安颉数字科技（深圳）有限公司',
    desc: '通过「弹性AI算力资源」NVIDIA 4090 GPU，中安颉数字科技(深圳)有限公司成功为一家大型跨国医药企业客户研发出了医疗数据分析与可视化工具，显著提升了规模化医疗数据处理速度与精度，有效赋能分析人员进行生物统计。'
  },
  {
    img: shenzhenUniversity,
    title: '深圳大学',
    desc: '通过「弹性AI算力资源」NVIDIA 4090 GPU，深圳大学“大学生创新创业大赛”参赛学生成功实现元宇宙渲染，在虚拟现实、增强现实和混合现实环境中创建了逼真的图像，完成了三维建模、纹理映射、光照处理、物理仿真等。'
  },
  {
    img: SUAT,
    title: '深圳理工大学',
    desc: '通过「弹性AI算力资源」NVIDIA 4090 GPU，深圳理工大学进行可控虚拟数字人生成模型研究与多模态推理大模型应用研究，通过视频生成大模型实现了数字人动态3D表达，通过多任务联合视觉推理实现了更高层次的人机交互与智能决策。'
  },
]
const Index = () => {
  useEffect(() => {
    document.title = '客户案例-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Media query="(min-width: 768px)">
        <FadeInContainer children={
          <div className={styles.example}>
            <div className={styles.banner}>
              <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} draggable="false" src={banner} alt="" />
              {/* <div className={styles.title}>客户案例</div>
          <div className={styles.subTitle}>赋能高校客户科学研究，助力企业客户数字转型，支持算力</div>
          <div className={styles.subTitle}>集群客户算力调度。</div> */}
            </div>
            {
              data.map(item => {
                return (
                  <div className={styles.items} key={item.title}>
                    <img src={item.img} alt="" />
                    <div className={styles.text}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        } />
      </Media>

      <Media query="(max-width: 767px)">
        <FadeInContainer children={
          <div className={styles.example}>
            <div className={styles.banner}>
              <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} draggable="false" src={banner} alt="" />
              {/* <div className={styles.title}>客户案例</div>
          <div className={styles.subTitle}>赋能高校客户科学研究，助力企业客户数字转型，支持算力</div>
          <div className={styles.subTitle}>集群客户算力调度。</div> */}
            </div>
            {
              data.map(item => {
                return (
                  <div className={styles.itemsMobile} key={item.title}>
                    <img src={item.img} alt="" />
                    <div className={styles.text}>
                      <div className={styles.titleMobile}>{item.title}</div>
                      <div className={styles.descMobile}>{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        } />
      </Media>
    </div>

  );
};

export default Index;
