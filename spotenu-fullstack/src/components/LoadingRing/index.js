import React from "react";
import styled, { keyframes } from "styled-components";

export default function LoadingRing() {
  return (
    <LoadingWrapper>
      <LoadingRingWrapper>
        <Ring>
          <div />
          <div />
          <div />
          <div />
        </Ring>
      </LoadingRingWrapper>
    </LoadingWrapper>
  );
}

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingRingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #ffcd02;
  border-radius: 10px;
`;

const Ring = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #ffcd02;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
