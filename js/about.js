/* Split the screen in half */
.split {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 10%;
}

/* Control the left side */
.left {
  width: 70%;
  left: 0;
  background-color: #FFF;
}

.left::-webkit-scrollbar { 
  display: none; 
} 

/* Control the right side */
.right {
  background-image: url("photos/navBar.png");
  background-size: contain;
  right: 0%;  
  width: 30%;
  font-size: 3vh;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
img {
  display: inline-block;
  width: 30%;
  right: 30%;
  border-radius: 50%;
}

header {
  font-size: 5vh;
  text-align: center;
  color: black;
}

body {
  font-size: 100%;
}