import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
//import styles from './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, 
                    eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis,
                     varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
