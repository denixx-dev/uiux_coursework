import React from 'react';
import * as Style from './index.styled';

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
};
const CommentItem: React.FC<CommentProps> = (props) => {
  return (
    <Style.CommentItem>
      <Style.CommentContent>
        <Style.UserName> {props.userName} </Style.UserName>
      </Style.CommentContent>
      <Style.CommentContent>
        <Style.CommentText>{props.commentText}</Style.CommentText>
      </Style.CommentContent>
    </Style.CommentItem>
  );
};

export default CommentItem;