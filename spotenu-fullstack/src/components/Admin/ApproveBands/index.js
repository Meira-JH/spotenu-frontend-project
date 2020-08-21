import React from "react";
import { connect } from "react-redux";
import { ApproveBandsContainer } from "./style";
import { getBandsToApproveAction } from "../../../actions/adminActions";
import ToApproveCard from "../ToApproveCard";

class ApproveBands extends React.Component {
  componentDidMount() {
    this.props.getBandsToApprove();
  }

  render() {
    const approveBandsContentRender = this.props.bandsToApprove && this.props.bandsToApprove.map(
      (band, index) => (
        <ToApproveCard
          id={band.id}
          email={band.data.email}
          nickname={band.data.nickname}
          name={band.data.name}
          role={band.data.role}
          key={index}
        />
      )
    );

    return <ApproveBandsContainer>{approveBandsContentRender}</ApproveBandsContainer>;
  }
}

const mapStateToProps = (state) => ({
  bandsToApprove: state.admins.bandsToApprove,
  currentUserId: state.users.currentUserId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBandsToApprove: (artistId) =>
      dispatch(getBandsToApproveAction(artistId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveBands);
