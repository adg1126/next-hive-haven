import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectErrMessage } from "../redux/user/userSelectors";
import { microsoftSignInStart } from "../redux/user/userActions";
import NavBar from "@/components/Navbar/NavBar";

const mapStateToProps = createStructuredSelector({
	errMessage: selectErrMessage,
});

export default connect(mapStateToProps, {
	microsoftSignInStart,
})(NavBar);
