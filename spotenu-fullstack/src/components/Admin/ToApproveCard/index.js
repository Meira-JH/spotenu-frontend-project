import React from "react";
import { connect } from "react-redux";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Delete from "@material-ui/icons/Close";
import {
  Title,
  Band,
  Card,
  CardActions,
  IconButton,
  CardContent,
} from "./style";
import {
  approveAdminAction,
  deleteAdminAction,
} from "../../../actions/adminActions";

function ToApproveCard(props) {
  const deleteAdmin = () => {
    props.toDeleteAdmin(props.id);
  };

  const approveAdmin = () => {
    props.toApproveAdmin(props.id);
  };

  return (
    <Card>
      <CardActions>
        <IconButton>
          <ThumbUp onClick={approveAdmin} />
        </IconButton>
        <IconButton onClick={deleteAdmin}>
          <Delete />
        </IconButton>
      </CardActions>
      <CardContent>
        <Title>{props.nickname}</Title>
        <Band> {props.name} </Band>
        <Band> {props.email} </Band>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toDeleteAdmin: (adminId) => dispatch(deleteAdminAction(adminId)),
    toApproveAdmin: (adminId) => dispatch(approveAdminAction(adminId)),
  };
};

export default connect(null, mapDispatchToProps)(ToApproveCard);
