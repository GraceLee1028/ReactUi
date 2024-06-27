import React from 'react';
import Index from './index.module.css';
import Hover from './hover.module.scss';
class ModuleCss extends React.Component {
  render() {
    return (
      <section className="lf-container white">
        <h3 className={[Index.title, Hover.title].join(' ')}>
          <span className={`${Hover.highlight} ${Hover.mr}`}>css</span>模块化样式
          <code></code>
        </h3>
        <h3 className={Hover.title}>
          <span className={`${Hover.highlight} ${Hover.mr}`}>scss</span>模块化样式
        </h3>
      </section>
    );
  }
}
export default ModuleCss;
