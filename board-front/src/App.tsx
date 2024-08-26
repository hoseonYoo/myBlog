import Top3Item from "components/Top3Item";
import top3BoardListMock from "mocks/top-3-board-list.mock";
import "./App.css";

function App() {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', gap:'24px'}}>
      {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
    </div>
      {/* {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem}/>)} */}
    </>
);
}

export default App;
