import React from "react";
import { connect } from "react-redux";
import { ApproveAdminsContainer } from "./style";
import { getAdminsToApproveAction } from "../../../actions/adminActions";
import ToApproveCard from "../ToApproveCard";

class ApproveAdmins extends React.Component {
  componentDidMount() {
    this.props.getAdminsToApprove();
  }

  render() {
    const ApproveAdminsContentRender = this.props.adminsToApprove && this.props.adminsToApprove.map(
      (admins, index) => (
        <ToApproveCard
          id={admins.id}
          email={admins.data.email}
          nickname={admins.data.nickname}
          name={admins.data.name}
          key={index}
        />
      )
    );

    return <ApproveAdminsContainer>{ApproveAdminsContentRender}</ApproveAdminsContainer>;
  }
}

const mapStateToProps = (state) => ({
  adminsToApprove: state.admins.adminsToApprove,
  currentUserId: state.users.currentUserId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAdminsToApprove: (artistId) =>
      dispatch(getAdminsToApproveAction(artistId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveAdmins);
