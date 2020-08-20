import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";
import { TextField, Button, Select } from "@material-ui/core";

export const BandContentWrapper = styled.div`
  height: auto;
  width: 100%;
  min-width: 200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: static;
`;