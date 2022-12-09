module.exports = {
  // 문자열은 따옴표로 formatting
  singleQuote: true,
  // 코드 마지막에 세미콜른이 있게 formatting
  semi: true,
  // 탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
  useTabs: false,
  // 들여쓰기 너비는 2칸
  tabWidth: 2,
  // 자세한 설명은 구글링이 짱이긴하나 객체나 배열 키:값 뒤에 항상 콤마를 붙히도록 formatting
  trailingComma: 'es5',
  // 코드 한줄이 maximum 100칸
  printWidth: 100,
  // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
  arrowParens: 'avoid',
  // "parser": 'typescript',
  // platform에 따른 line ending sequence 설정 무시
  endOfLine: 'auto',
}