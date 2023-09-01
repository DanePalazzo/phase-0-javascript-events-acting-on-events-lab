const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


/*
Thought expriament that deosnt work in practice
function moveDodger() {
    const postitionNumbers = dodger.style.position.replace("px", "");
    const position = parseInt(positionNumbers, 10);
  
    if (position > 0) {
      dodger.style.position = `${position - 1}px`;
    }
  }
    else if (position > 360) {
      dodger.style.position = `${position + 1}px`;
    }
  }

  */
