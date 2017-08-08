package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */

import java.util.Arrays;

public class ChoiceCategory {
  int memberNumber;
  int categoryNumber;
  String[] categoryNumberArray;
  String[] unCategoryNumberArray;
//  String[] category Number;
  
  @Override
  public String toString() {
    return "ChoiceCategory [memberNumber=" + memberNumber + ", categoryNumber=" + categoryNumber
        + ", categoryNumberArray=" + Arrays.toString(categoryNumberArray) + ", unCategoryNumberArray="
        + Arrays.toString(unCategoryNumberArray) + "]";
  }

  public int getMemberNumber() {
    return memberNumber;
  }

  public int getCategoryNumber() {
    return categoryNumber;
  }

  public String[] getCategoryNumberArray() {
    return categoryNumberArray;
  }

  public String[] getUnCategoryNumberArray() {
    return unCategoryNumberArray;
  }

  public void setMemberNumber(int memberNumber) {
    this.memberNumber = memberNumber;
  }

  public void setCategoryNumber(int categoryNumber) {
    this.categoryNumber = categoryNumber;
  }

  public void setCategoryNumberArray(String[] categoryNumberArray) {
    this.categoryNumberArray = categoryNumberArray;
  }

  public void setUnCategoryNumberArray(String[] unCategoryNumberArray) {
    this.unCategoryNumberArray = unCategoryNumberArray;
  }

  
  
  
}
