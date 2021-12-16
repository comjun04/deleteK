/*PR here*/
const cancerList = [
  "꺼리튜브",
  "코리얼리즘",
  "Peachy 피치",
  "최고킹",
  "바이스톰 코리아",
  "진심 TV",
  "스카이경제",
  "잡식왕",
  "세상사",
  "클립튜브",
  "메가튜브",
  "디씨멘터리",
  "구네스북",
  "풀앤푸시(Pull&Push)",
  "깡통튜브",
  "최고수익률",
  "퍼플튜브",
  "쓸모왕",
  "Travel Tube",
  "페페TV • 조회수1234만회"
]

setInterval(() => {
  document.querySelectorAll('.ytd-channel-name').forEach((el) => {
      if (el.querySelector('a') !== null && cancerList.indexOf(el.querySelector('a').innerHTML) !== -1) {
        const pr = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        pr.parentNode.removeChild(pr);
      }
  });
}, 100);