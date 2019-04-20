document.addEventListener("DOMContentLoaded", function() {
  try {
    var elements = document.body.querySelectorAll(
      ".hm-subject-list-item-description-lessons"
    );
    Array.prototype.forEach.call(elements, function(element, i) {
      element.setAttribute("style", "height: 100% !important;");

      Array.prototype.filter.call(
        element.children[0].children,
        (element, index) => {
          const lessonStatusTab = element.querySelectorAll(
            ".lesson-status-tab"
          );
          Array.prototype.forEach.call(lessonStatusTab, function(element) {
            if (
              element.textContent.indexOf("(Выдано задание) 0") != -1 ||
              element.textContent.indexOf(" 0 из") != -1
            ) {
              element.style.background = "yellow";
            }
          });
        }
      );
    });
    console.log("colored");
  } catch (e) {
    console.log(e);
  }
});
