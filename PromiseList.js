export default () => {
  const $confirmBtn = document.querySelector(".NextBtn");
  const $listElements = document.querySelectorAll(".PromiseList-content");

  $confirmBtn.addEventListener("click", (e) => {
    if (!$confirmBtn.classList.contains("active")) {
      Array.from($listElements).map(($ele) => {
        $ele.classList.add("checked");
        $ele.querySelector(".animated-check path").style.display = "block";
      });
      checkPromiseList(e);
    }
  });

  Array.from($listElements).forEach(($ele) => {
    $ele.addEventListener("click", (e) => {
      $ele.classList.toggle("checked");
      $ele.classList.contains("checked")
        ? ($ele.querySelector(".animated-check path").style.display = "block")
        : ($ele.querySelector(".animated-check path").style.display = "none");
      checkPromiseList(e);
    });
  });

  function checkPromiseList(e) {
    for (let $ele of Array.from($listElements)) {
      if (!$ele.classList.contains("checked")) {
        $confirmBtn.classList.remove("active");
        $confirmBtn.classList.add("passive");
        $confirmBtn.innerHTML = "<p>확인했어요!</p>";
        return;
      }
      $confirmBtn.classList.add("active");
      $confirmBtn.innerHTML = "<p>이용하기</p>";
      e.stopImmediatePropagation();
    }
  }
};
