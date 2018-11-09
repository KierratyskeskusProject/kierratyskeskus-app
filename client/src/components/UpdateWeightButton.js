import React from 'react';
import { connect } from 'react-redux';
import { fetchWeight } from '../redux/actions';


const WeightButton = props => (
  <div className="input-group-append">
    <button className="btn btn-primary" id="weight" type="button" onClick={() => props.fetch()}>
      <span><i className="fa fa-sync-alt" aria-hidden="true" /></span>
    </button>
  </div>
);
const mapStateToProps = state => ({ weight: state.weight });

export default connect(mapStateToProps, { fetch: fetchWeight })(WeightButton);
