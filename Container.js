import PromiseList from "./PromiseList.js";
function Container({ $app, initialState, onNextPage }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "Container";

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    let title = this.state.title;

    const subTitleTag = this.state.subTitle
      ? `<div class="subTitle">${this.state.subTitle}</div>`
      : "";
    const headTemplate = `
        <div class="Species"><span class="redText">[공지]</span> 
        ${this.state.species} </div>
        <div class="title">${title}</div>
        ${subTitleTag}`;
    let contentTemplete;
    switch (this.state.type) {
      case "ServiceInfo":
        const imgSource =
          this.state.portType == 1
            ? "../resource/airport.png"
            : "../resource/ninebotport.png";
        const centerInfoTag =
          this.state.centerInfoType === "image"
            ? `<img class="center-Image" src="${imgSource}" alt="${imgSource}" />`
            : `<div class="center-text">${this.state.centerInfo}</div>`;
        const typeTag = this.state.typeName
          ? `<p class="ImageAlt">타입: ${this.state.typeName}</p>`
          : "";
        const confirmBtn = this.state.isStandardBtn
          ? `<span class="ConfirmContainer">
                        <div class="ConfirmBtn" OnClick="window.open('https://google.com')">킥보드 규격 확인하기</div>
                        </span>`
          : "";
        contentTemplete = `
                ${centerInfoTag}
                    ${typeTag}
                    <div class="noteText">${this.state.noteText}</div>
                    ${confirmBtn}
                    <div class="NextBtn active">다 음</div>
                `;
        break;
      case "SafetyEtiquette":
        contentTemplete = `
                <div class="PromiseList">
                    <ul>
                        ${this.state.promiseList
                          .map(
                            (ele) =>
                              `<li class="PromiseList-content">
                                <span class="white"></span>
                                <div class="CheckBox">
                                    <svg class="animated-check" viewBox="0 0 24 24">
                                        <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" /> 
                                    </svg>
                                </div>
                            ${ele}</li>`
                          )
                          .join("")}
                    </ul>
                </div>
                <div class="NextBtn passive"><p>확인했어요!</p></div>`;
        break;
    }

    this.$target.innerHTML = `${headTemplate}${contentTemplete}`;
    PromiseList();
    document.querySelector(".NextBtn").addEventListener("click", (e) => {
      console.log(e.currentTarget);
      if (e.currentTarget.classList.contains("active")) onNextPage();
    });
  };
  this.render();
}

export default Container;
