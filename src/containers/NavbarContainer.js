import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectErrMessage } from "../redux/user/userSelectors";
import NavBar from "@/components/Navbar/NavBar";

const mapStateToProps = createStructuredSelector({
	errMessage: selectErrMessage,
});

export default connect(mapStateToProps, {})(NavBar);
