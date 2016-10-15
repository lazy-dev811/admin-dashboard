import { connect } from 'react-redux';
import { buttonClicked } from '../../actions';
import SearchBar from '../../components/Weather/SearchBar.jsx';

const mapStateToProps = state => ({
  buttonHasBeenClicked: state.buttonHasBeenClicked,
});

const mapDispatchToProps = ({
  buttonClicked,
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;
