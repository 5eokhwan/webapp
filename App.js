import Container from "./Container.js";
import Pagination from "./Pagination.js";

function App($app) {
  this.state = {
    serviceInfoDatas: [
      {
        type: "ServiceInfo",
        species: "서비스 안내",
        title: "<span class='color-red'>단자모양</span>을<br> 꼭 확인해주세요!",
        subTitle: "화재가 날 수 있어요!",
        centerInfoType: "image",
        portType: window.type,
        typeName: window.type == 1 ? "항공단자" : "나인봇단자",
        noteText: "단자가 맞지 않다면, 옆 스테이션을 확인하세요",
      },
      {
        type: "ServiceInfo",
        species: "서비스 안내",
        title: "현재 36V급 킥보드만<br>가능합니다.",
        centerInfoType: "text",
        centerInfo: "36V",
        isStandardBtn: true,
        noteText: "기기의 충전기 뒷면를 확인하세요.<br>정격 출력 42V",
      },
      {
        type: "SafetyEtiquette",
        species: "안전 에티켓",
        title: "슬기로운 <br>킥보드 충전 생활",
        promiseList: [
          "<span class='color-red'>단자모양</span> 확인 후 연결하기!<br><span class='text-sm'>배터리 <span class='color-red'>화재</span>나 고장이<br>날 수 있어요!</span>",
          "킥보드 꼭 <span class='color-red'>찾아가기</span>",
          "<span class='color-red'>쓰레기</span> 버리지 않기",
        ],
      },
    ],
    currentPage: 0,
  };

  const container = new Container({
    $app,
    initialState: this.state.serviceInfoDatas[this.state.currentPage],
    onNextPage: () => {
      //데이터의 마지막에서 다음 버튼 클릭시
      if (this.state.currentPage === this.state.serviceInfoDatas.length - 1) {
        /* DELETE - 다른 페이지 요청하는 부분 */
      } else
        this.setState({
          ...this.state,
          currentPage: this.state.currentPage + 1,
        });
    },
  });

  const pagination = new Pagination({
    $app,
    initialState: {
      currentPage: this.state.currentPage,
      pageCnt: this.state.serviceInfoDatas.length,
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    container.setState(this.state.serviceInfoDatas[this.state.currentPage]);
    pagination.setState({
      currentPage: this.state.currentPage,
      pageCnt: this.state.serviceInfoDatas.length,
    });
  };
}

export default App;
