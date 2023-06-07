import * as C from "./styles";

function InfoArea() {
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow>⬅️</C.MonthArrow>
        <C.MonthTitle>...</C.MonthTitle>
        <C.MonthArrow>➡️</C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
}

export default InfoArea;
