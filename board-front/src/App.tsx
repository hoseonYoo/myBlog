import Footer from "layouts/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>('');
  return (
    <>
    <Footer />
    {/* <InputBox 
      label="이메일" 
      type="text" 
      placeholder="이메일 주소를 입력해주세요." 
      value={value}
      error={false}
      setValue={setValue}
      message="에러입니다."
    /> */}
    {/* <div style={{display:'flex', columnGap:'30px', rowGap:'20px'}}>
      {favoriteListMock.map(favoriteListItem => <FavoriteItem  favoriteListItem = {favoriteListItem}/>)} */}
      {/* {CommentListMock.map(commentListItem => <CommentItem commentListItem = {commentListItem}/>)} */}
    {/* </div> */}
    {/* <div style={{display:'flex', justifyContent:'center', gap:'24px'}}>
      {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
    </div> */}
      {/* {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem}/>)} */}
    </>
);
}

export default App;
