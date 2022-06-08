root = document.getElementById("root");

function render(...children) {
  while(root.firstChild) root.removeChild(root.firstChild);
  for(const child of children) root.appendChild(child);
}

function tag(name, ...children) {
  const tag = document.createElement(name);

  for(const child of children) tag.appendChild(child);

  tag.attr = function (name, value) {
    this.setAttribute(name, value);
    return this;
  }

  tag.css = function (obj) {
    for(const value in obj) this.style[value] = obj[value];
    return this;
  }

  tag.append = function (child) {
    this.appendChild(child);
    return this;
  }

  tag.event = function(name, callback) {
    this.addEventListener(name, callback, false);

    return this;
  }

  return tag;
}

function text(value) {
  return document.createTextNode(value ? value : "");
}


function div(...children) {
  return tag("div", ...children);
}


function h1(...children) {
  return tag("h1", ...children);
}

function h2(...children) {
  return tag("h2", ...children);
}

function h3(...children) {
  return tag("h3", ...children);
}

function h4(...children) {
  return tag("h4", ...children);
}

function h5(...children) {
  return tag("h5", ...children);
}

function h6(...children) {
  return tag("h6", ...children);
}

function a(...children) {
  return tag("a", ...children);
}

function p(...children) {
  return tag("p", ...children);
}

function span(...children) {
  return tag("span", ...children);
}

function hr(...children) {
  return tag("hr", ...children);
}
function b(...children) {
  return tag("b", ...children);
}
function i(...children) {
  return tag("i", ...children);
}
function br(...children) {
  return tag("br", ...children);
}

function header(...children) {
  return tag("header", ...children);
}

function footer(...children) {
  return tag("footer", ...children);
}

function main(...children) {
  return tag("main", ...children);
}

function section(...children) {
  return tag("section", ...children);
}

function article(...children) {
  return tag("article", ...children);
}

function aside(...children) {
  return tag("aside", ...children);
}

function details(...children) {
  return tag("details", ...children);
}

function dialog(...children) {
  return tag("dialog", ...children);
}

function summary(...children) {
  return tag("summary", ...children);
}

function data(...children) {
  return tag("data", ...children);
}

function code(...children) {
  return tag("code", ...children);
}

function pre(...children) {
  return tag("pre", ...children);
}

function progress(...children) {
  return tag("progress", ...children);
}

function strong(...children) {
  return tag("strong", ...children);
}

function button(...children) {
  return tag("button", ...children);
}

function input(...children) {
  return tag("input", ...children);
}

function textarea(...children) {
  return tag("textarea", ...children);
}

function form(...children) {
  return tag("form", ...children);
}

function audio(...children) {
  return tag("audio", ...children);
}

function video(...children) {
  return tag("video", ...children);
}

function source(...children) {
  return tag("source", ...children);
}

function select(...children) {
  return tag("select", ...children);
}

function option(...children) {
  return tag("option", ...children);
}

function optgroup(...children) {
  return tag("optgroup", ...children);
}

function label(...children) {
  return tag("label", ...children);
}

function canvas(...children) {
  return tag("canvas", ...children);
}

function img(...children) {
  return tag("img", ...children);
}

function nav(...children) {
  return tag("nav", ...children);
}

function ul(...children) {
  return tag("ul", ...children);
}

function ol(...children) {
  return tag("ol", ...children);
}

function li(...children) {
  return tag("li", ...children);
}

function dl(...children) {
  return tag("dl", ...children);
}

function dt(...children) {
  return tag("dt", ...children);
}

function dd(...children) {
  return tag("dd", ...children);
}

function caption(...children) {
  return tag("caption", ...children);
}

function table(...children) {
  return tag("table", ...children);
}

function th(...children) {
  return tag("th", ...children);
}

function tr(...children) {
  return tag("tr", ...children);
}

function td(...children) {
  return tag("td", ...children);
}

function thead(...children) {
  return tag("thead", ...children);
}

function tbody(...children) {
  return tag("tbody", ...children);
}

function tfoot(...children) {
  return tag("tfoot", ...children);
}

function col(...children) {
  return tag("col", ...children);
}

function colgroup(...children) {
  return tag("colgroup", ...children);
}

function center(...children) {
  return div(...children).css({
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
    padding: ".5rem"
  });
}

function default404(page) {
  return div(
    img()
    .attr("src", "img/err404.png"),
    h1(
      text("Page not found "), 
      span(text(decodeURIComponent(page)))
      .css({
        opacity: "50%"
      })
    ).css({
      margin: "1rem 0",
    }),
    a(text("Go to home"))
      .attr("href", "#/")
      .css({
        padding: "1rem 2rem",
        borderRadius: "1rem",

        backgroundColor: "#ff2323",
        color: "#fff",

        border: "3px solid rgba(0, 0, 0, 0)",


        fontSize: "1.75rem",
        textDecoration: "none",
      })
      .event("mouseenter", (event) => {
        event.target.css({
          border: "3px solid #000"
        });
      })
      .event("mouseleave", (event) => {
        event.target.css({
          border: "3px solid rgba(0, 0, 0, 0)"
        });
      })
    ).css({
      display: "flex",

      flexDirection: "column",

      width: "100wh",
      height: "100vh",

      alignItems: "center",
      justifyContent: "center",
    });
}

function syncHash(routes) {
  let hash = document.location.hash.split("#")[1];

  if(hash && !hash.includes("/")) return 

  if(!hash) hash = "/";
  if(!routes["/404"]) routes["/404"] = default404;

  render(routes[hash] ? routes[hash](hash.replace("/", "")) : routes["/404"](hash));
}

function router(routes) {
  window.addEventListener("hashchange", () => syncHash(routes));
  syncHash(routes);
}
