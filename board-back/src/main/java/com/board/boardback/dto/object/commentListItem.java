package com.board.boardback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class commentListItem {
  private String nickname;
  private String profileImage;
  private String writeDatetime;
  private String content;
}
