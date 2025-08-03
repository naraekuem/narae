document.addEventListener("DOMContentLoaded", function () {
  let tocSidebar = document.querySelector(
    ".md-sidebar__inner.md-sidebar__inner--secondary"
  );

  if (tocSidebar) {
    let backButton = document.createElement("div");
    backButton.textContent = "← 목록으로 돌아가기";
    backButton.style.padding = "10px";
    backButton.style.background = "#f8f8f8";
    backButton.style.textAlign = "center";
    backButton.style.fontWeight = "bold";
    backButton.style.cursor = "pointer";

    // 클릭 시 TOC를 닫고 글 목록을 보여줌
    backButton.addEventListener("click", function () {
      document.documentElement.classList.remove("toc-active");
    });

    tocSidebar.prepend(backButton);
  }
});
