
  document.addEventListener("DOMContentLoaded", function() {
    var progressBarElements = document.querySelectorAll(".progress-bar");
  
    progressBarElements.forEach(function(progressBar) {
      var progressElement = progressBar.querySelector(".progress");
      var progressPercentage = parseInt(progressBar.getAttribute("data-progress"));
  
      progressElement.style.width = progressPercentage + "%";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var skillsSoftItems = document.querySelectorAll(".skills-soft li");
  
    skillsSoftItems.forEach(function(item) {
      var circle = item.querySelector(".cbar");
      var percent = parseInt(item.getAttribute("data-percent"));
      var counterElement = item.querySelector("small");
  
      circle.style.strokeDasharray = circumference(circle) + "px";
      circle.style.strokeDashoffset = circumference(circle);
  
      animateCircle(circle, percent);
      animateCounter(counterElement, percent);
    });
  
    function circumference(circle) {
      var radius = circle.getAttribute("r");
      return 2 * Math.PI * radius;
    }
  
    function animateCircle(circle, percent) {
      var offset = circumference(circle) * (1 - percent / 100);
      circle.style.strokeDashoffset = offset;
      circle.style.transition = "stroke-dashoffset 1s ease-in-out";
    }
  
    function animateCounter(counterElement, percent) {
      var duration = 1000;
      var increment = Math.ceil(percent / (duration / 10));
      var counter = 0;
  
      var interval = setInterval(function() {
        counter += increment;
        counterElement.textContent = counter + "%";
        if (counter >= percent) {
          clearInterval(interval);
        }
      }, 10);
    }
  });
  
 
  
  
  