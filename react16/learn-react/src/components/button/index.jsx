import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import LfIcon from '../icon/index';
class LfButton extends Component {
  //   constructor(props) {
  //     super(props)
  // const buttonClass = {
  //   plain: props.plain
  // }
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
        }`}
      >
        {this.props.icon && <LfIcon name={this.props.icon} />}
        {this.props.children && <span>{this.props.children}</span>}
      </button>
    );
  }
}
//default prop's value
LfButton.defaultProps = {
  type: 'info'
};
//define prop's type
LfButton.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
export default LfButton;
