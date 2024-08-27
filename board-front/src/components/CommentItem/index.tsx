import defaultProfileImage from 'assets/image/default-profile-image.png';
import { CommentListItem } from 'types/interface';
import './style.css';

interface Props {
  commentListItem: CommentListItem;
}

// component: commentList Item 컴포넌트 //
export default function CommentItem({ commentListItem }: Props) {
  
  // properties //
  const { nickname, profileImage, writeDatetime, content } = commentListItem;

  // component: commentList Item 렌더링 //
  return (
    <div className='comment-list-item'>
      <div className='comment-list-item-top'>
        <div className='comment-list-item-profile-box'>
          <div className='comment-list-item-profile-image' style={{ backgroundImage: `url(${profileImage ? profileImage : defaultProfileImage})` }}></div>
        </div>
        <div className='comment-list-item-nickname'>{nickname}</div>
        <div className='comment-list-item-divider'>{'|'}</div>
        <div className='comment-list-item-time'>{writeDatetime}</div>
      </div>
      <div className='comment-list-item-main'>
        <div className='comment-list-item-content'>{content}</div>
      </div>
    </div>
  );
}
