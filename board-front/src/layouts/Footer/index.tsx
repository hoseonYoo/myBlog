import './style.css';

// event handler : 아이콘클릭 이벤트 : 인스타 //
const onInstaIconButtonClickHandler = () => {
  window.open('https://www.instagram.com');
}

// event handler : 아이콘클릭 이벤트 : 네이버 //
const onBlogIconButtonClickHandler = () => {
  window.open('https://www.naver.com');
}

// component: 푸터 레이아웃 //
export default function Footer() {
  // render: 푸터 레이아웃 렌더링 //
  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-logo-box'>
            <div className='icon-box'>
              <div className='icon logo-light-icon'></div>
            </div>
            <div className='footer-logo-text'>MyBlog</div>
          </div>
          <div className='footer-link-box'>
            <div className='footer-email-link'>dbghtjs112@naver.com</div>

            <div className='icon-button' onClick={onInstaIconButtonClickHandler}>
              <div className='icon insta-icon'></div>  
            </div>
            <div className='icon-button' onClick={onBlogIconButtonClickHandler}>
              <div className='icon naver-blog-icon'></div>  
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>Copyright © 2024 Yoo Hoseon. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
