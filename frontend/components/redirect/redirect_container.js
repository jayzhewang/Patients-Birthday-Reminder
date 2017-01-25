import { connect } from 'redux';
import { exchangeTokens } from '../../actions/redirect_actions';
import Redirect from './redirect';

const mapStateToProps = state => ({
  tokens: state.tokens
});

const mapDispatchToProps = dispatch => ({
  exchangeTokens: data => dispatch(exchangeTokens(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redirect);
