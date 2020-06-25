//RANDOM COLORS
const bgColors = new Array('#FFC51C', '#9fd72c', '#FF805D', '#8bd0df');

// Elements
const root = document.documentElement;

// Events
window.addEventListener('DOMContentLoaded', setRandomColor);

// Execution

function setRandomColor(_event) {
  const randomColor = getRandomColor();
  root.style.setProperty('--random-color', randomColor);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * bgColors.length);
  return bgColors[index];
}


//PINNED HEADINGS
// Elements
const projects = Array.from(document.querySelectorAll('.project'));
const nav = document.querySelector('.nav-content');
// Event
window.addEventListener('scroll', throttle(stickHeader, 100));
// Execution
function stickHeader(_event) {
  const top = nav.getBoundingClientRect().height;
  projects.forEach((project) => {
    if (isScrolledOnTop(project)) {
      project.classList.add('struck');
      const projectNav = project.querySelector('.project-nav');
      projectNav.style.top = `${top}px`;
    } else {
      project.classList.remove('struck');
    }
  });
}
function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
function isScrolledOnTop(element) {
  const navHeight = nav.getBoundingClientRect().height;
  return element.getBoundingClientRect().top - navHeight <= 0;
}








/*LAST TRY
// Elements
const disappear = document.querySelector('.disappear');
// Event
window.addEventListener('scroll', vanish);
// Execution
function vanish(_event) {
  disappear
  if(scrollPercent >= 0){

  }
}

/*SCROLLING
const target = document.querySelector('.disappear');
const targetTop = target.getBoundingClientRect().height;

window.addEventListener("scroll", function(disappear))
{
  var scrollPercent = (targetTop-window.scrollY) / targetTop;
  if(scrollPercent >= 0){
    target.classList.add('gone', scrollPercent);
  }
}
console.log (disappear);
/*SCROLLING
var target = $('.disappear');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
    }
});

/*
Worked 
	<script type="text/javascript">
	  $(document).ready(function(){
		$(window).scroll(function(){
		  if($(this).scrollTop() > 100){
			$(".disappear").css({"opacity" : "0"})
		  }
		  else {
			$(".disappear").css({"opacity" : "1"})
		  }
		})
	  })
	  </script>  

    /* Didn't work, http://jsfiddle.net/94whbme5/
    	<script type="text/javascript">var target = $('.disappear');
		var targetHeight = target.outerHeight();
		
		$(document).scroll(function(e){
			var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
			if(scrollPercent >= 0){
				target.css('opacity', scrollPercent);
			}
		});</script> */