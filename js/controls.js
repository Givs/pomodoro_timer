export default function Controls() {
  function hideAndShow(hide, show, secondeHide, secondShow) {
    hide.classList.add("hide");
    show.classList.remove("hide");

    if (secondeHide && secondShow) {
      secondeHide.classList.add("hide");
      secondShow.classList.remove("hide");
    }
  }
  
  return {
    hideAndShow
  }
}
