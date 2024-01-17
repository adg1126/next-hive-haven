import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { googleSignInStart } from "../redux/user/userActions";
import Signin from "@/components/auth/Signin";

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, {
	googleSignInStart,
})(Signin);
