function Pagination({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "Pagination";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    console.log(this.state);
    const templete = [];
    for (let i = 0; i < this.state.pageCnt; i++) {
      templete.push(
        `<div class="paging-circle 
            ${i === this.state.currentPage ? "current" : ""}"></div>`
      );
    }
    this.$target.innerHTML = templete.join("");
  };
  this.render();
}

export default Pagination;
