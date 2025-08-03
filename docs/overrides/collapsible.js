document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("h2").forEach((header) => {
    header.classList.add("collapsible");

    let elements = [];
    let nextElement = header.nextElementSibling;

    // h2 바로 아래의 hr 태그는 제외
    if (nextElement && nextElement.tagName === "HR") {
      nextElement = nextElement.nextElementSibling;
    }

    // h2와 다음 h2 사이의 요소를 모아 collapsible-content로 감싸기
    while (nextElement && !nextElement.matches("h2")) {
      // 각주(.footnotes)는 collapsible에서 제외
      if (nextElement.classList.contains("footnote")) {
        break; // footnotes가 나오면 루프 종료
      }
      elements.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    if (elements.length > 0) {
      let wrapper = document.createElement("div");
      wrapper.classList.add("collapsible-content", "open"); // 기본적으로 펼침
      elements[0].parentNode.insertBefore(wrapper, elements[0]);
      elements.forEach((el) => wrapper.appendChild(el));

      header.classList.add("open"); // h2도 기본적으로 펼침

      header.addEventListener("click", function () {
        wrapper.classList.toggle("open");
        header.classList.toggle("open");
      });
    }
  });
});
