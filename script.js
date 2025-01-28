
document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll("path");
  
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
  
      setTimeout(() => {
        path.style.transition = "stroke-dashoffset 1s linear";
        path.style.strokeDashoffset = "0";
      }, 3000);
    });
  });
  