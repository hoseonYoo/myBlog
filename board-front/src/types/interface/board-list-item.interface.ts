export default interface BoardListItem{
  boardNumber: number;
  title: string;
  content: string;
  boardTitleImage: string | null;
  favoriteCount: number;
  commnetCount: number;
  viewCount: number;
  writeDatetime: string;
  writerNickname: string;
  writerProfileImage: string | null;
}