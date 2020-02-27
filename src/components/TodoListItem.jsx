import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";

const TodoListItemBody = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItemCheckbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  ${props =>
    props.checked &&
    css`
      svg {
        color: #22b8cf;
      }
    `};
`;

const TodoListItemText = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  ${props =>
    props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `};
`;

const TodoListItemRemove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItemBody>
      <TodoListItemCheckbox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <TodoListItemText checked={checked}>{text}</TodoListItemText>
      </TodoListItemCheckbox>
      <TodoListItemRemove>
        <MdRemoveCircleOutline onClick={() => onRemove(id)} />
      </TodoListItemRemove>
    </TodoListItemBody>
  );
};

export default TodoListItem;
