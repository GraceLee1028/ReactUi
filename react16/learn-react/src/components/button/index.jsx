import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import LfIcon from '../icon/index';
class LfButton extends Component {
  // this.state = {
  //   buttonClass: Object.keys(buttonClass)
  //     .filter(key => buttonClass[key])
  //     .join(' ')
  // }
  //   }
  render() {
    return (
      <button
        type="button"
        className={`lf-btn lf-btn--${this.props.type} ${this.props.plain ? 'is-plain' : ''}  ${this.props.round ? 'is-round' : ''} ${
          this.props.circle ? 'is-circle' : ''
        } lf-btn--${this.props.size}`}
        onClick={this.props.onClick}
      >
        {this.props.icon && <LfIcon name={this.props.icon} />}
        {this.props.children && <span>{this.props.children}</span>}
      </button>
    );
  }
}
//default prop's value
LfButton.defaultProps = {
  type: 'default',
  size: 'default'
};
//define prop's type
LfButton.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.node
};
export default LfButton;
