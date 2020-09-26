// ClassStyle;

// class Options {
//   constructor(height, width, name, bg = "", fontSize = "", textAlign = "") {
//     this.height = height;
//     this.width = width;
//     this.bg = bg;
//     this.fontSize = fontSize;
//     this.textAlign = textAlign;
//     this.name = name;
//   }
//   createElement() {
//     let main = document.querySelector(".main"),
//       firstElem = main.firstElementChild,
//       newDiv = document.createElement("div"),
//       template = `<h1>Hello world</h1><p>My name is ${
//         this.name === "" ? (this.name = "Пользователь") : this.name
//       }</p>`;

//     newDiv.className = "my-new-div";
//     newDiv.style.cssText = `height:${this.height + "px"};width:${(this.width =
//       "px")};background-color:${this.bg};font-size:${
//       this.fontSize + "px"
//     };text-align:${this.textAlign}`;
//     newDiv.innerHTML = template;
//     main.insertBefore(newDiv, firstElem);
//   }
// }

// Options.prototype.exit = function () {
//   console.log("elem", this);
// };

// let x = new Options().exit();

// let elemS = new Options(200, 300, "Oleg", "red", 14, "center");
// let elem = new Options(400, 700, "", "green", 32, "left");
// elem.createElement();
// elemS.createElement();

// Functional style

function Options(height, width, name, bg = "", fontSize = "", textAlign = "") {
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.textAlign = textAlign;
  this.name = name;
  this.createElement = function () {
    let main = document.querySelector(".main"),
      firstElem = main.firstElementChild,
      newDiv = document.createElement("div"),
      template = `<h1>Hello world</h1><p>My name is ${
        this.name === "" ? (this.name = "Пользователь") : this.name
      }</p>`;

    newDiv.className = "my-new-div";
    newDiv.style.cssText = `height:${this.height + "px"};width:${(this.width =
      "px")};background-color:${this.bg};font-size:${
      this.fontSize + "px"
    };text-align:${this.textAlign}`;
    newDiv.innerHTML = template;
    main.insertBefore(newDiv, firstElem);
  };
}

let x = new Options(200, 300, "Oleg", "red", 14, "center");
x.createElement();
