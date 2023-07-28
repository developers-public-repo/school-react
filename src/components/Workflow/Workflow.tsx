import React from "react";

import styled from "styled-components";

interface WorkflowProps {
  children: React.ReactNode;
}

const StyledWorkflow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Workflow: React.FC<WorkflowProps> = ({ children }) => {
  return <StyledWorkflow>{children}</StyledWorkflow>;
};

export default Workflow;
