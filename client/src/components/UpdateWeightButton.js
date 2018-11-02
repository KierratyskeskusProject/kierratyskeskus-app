import React from 'react';
import { connect } from 'react-redux';
import { fetchWeight } from '../redux/actions';


const WeightButton = props => (
  <div className="input-group-append">
    <button className="btn btn-primary" type="button" onClick={() => props.fetch()}>
      Update Weight
    </button>
  </div>
);
const mapStateToProps = state => ({ weight: state.weight });

export default connect(mapStateToProps, { fetch: fetchWeight })(WeightButton);
