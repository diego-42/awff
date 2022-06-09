const funcs = [
  {
    name: "render",
    description: "'render' function expect a html tag as argument and insert this tag in the root div.",
    example: "render(h1(text('Hello, World')));"
  },
  {
    name: "router",
    description: "'router' function expects an object with the path and the page as argument, when the specific path is called it returns the correct page.",
    example: "router({\n    '/': div(h1(text('Home Page'))),\n    '/blog': div(h1(text('Blog Page')))\n});"
  },
  {
    name: "tag",
    description: "'tag' function expect a name and children as argument and return a html tag, this is the core of the framework, the tag function is used by all builtin functions tags.",
    example: "tag('button', text('login'));",
    descmethod: [
      {
        name: "attr",
        description: "'attr' method expect a type and value of the attribute as argument and set this attribute in the tag.",
        example: "tag('a').attr('href', '#');"
      },
      {
        name: "css",
        description: "'css' method expect a object with name and value of property as argument and set this style in the tag.",
        example: "tag('a').css({\n  color: '#ff2323',\n  fontSize: '1rem'\n});"
      },
      {
        name: "append",
        description: "'append' method exepct a child node as argument and append this child in the tag",
        example: "tag('div').append(h1(text('example text')));"
      },
      {
        name: "event",
        description: "'event' method expect a name and callback as argument and execute the callback every time event is called, similar to an addEventListener,",
        example: "tag('button').event('click', (e) => {\n  alert('example text');\n});"
      }
    ]
  },
  {
    name: "text",
    description: "'text' function expect a string as argument and return a text node, used when you want to insert text into a tag.",
    example: "text('example text');"
  },
  {
    name: "div",
    description: "'div' is a builtin function that expect a children as optional argument when called return a 'div' node.",
    example: "div(h1(text('example text')));"
  },
  {
    name: "h1",
    description: "'h1' is a builtin function that expect a children as optional argument when called return a 'h1' node.",
    example: "h1(text('example text'), a(text('link')));"
  },
  {
    name: "h2",
    description: "'h2' is a builtin function that expect a children as optional argument when called return a 'h2' node.",
    example: "h2(text('example text'), a(text('link')));"
  },
  {
    name: "h3",
    description: "'h3' is a builtin function that expect a children as optional argument when called return a 'h3' node.",
    example: "h3(text('example text'), a(text('link')));"
  },
  {
    name: "h4",
    description: "'h4' is a builtin function that expect a children as optional argument when called return a 'h4' node.",
    example: "h4(text('example text'), a(text('link')));"
  },
  {
    name: "h5",
    description: "'h5' is a builtin function that expect a children as optional argument when called return a 'h5' node.",
    example: "h5(text('example text'), a(text('link')));"
  },
  {
    name: "h6",
    description: "'h6' is a builtin function that expect a children as optional argument when called return a 'h6' node.",
    example: "h6(text('example text'), a(text('link')));"
  },
  {
    name: "a",
    description: "'a' is a builtin function that expect a children as optional argument when called return a 'a' node.",
    example: "a(text('example text'), h2(text('link')));"
  },
  {
    name: "span",
    description: "'span' is a builtin function that expect a children as optional argument when called return a 'span' node.",
    example: "span(text('example text'), h2(text('link')));"
  },
  {
    name: "hr",
    description: "'hr' is a builtin function that expect a children as optional argument when called return a 'hr' node.",
    example: "hr();"
  },
  {
    name: "b",
    description: "'b' is a builtin function that expect a children as optional argument when called return a 'b' node.",
    example: "b(text('example text'));"
  },
  {
    name: "i",
    description: "'i' is a builtin function that expect a children as optional argument when called return a 'i' node.",
    example: "i(text('example text'));"
  },
  {
    name: "br",
    description: "'br' is a builtin function that expect a children as optional argument when called return a 'br' node.",
    example: "br();"
  },
  {
    name: "header",
    description: "'header' is a builtin function that expect a children as optional argument when called return a 'header' node.",
    example: "header(h1(text('example text')));"
  },
  {
    name: "footer",
    description: "'footer' is a builtin function that expect a children as optional argument when called return a 'footer' node.",
    example: "footer(h1(text('example text')));"
  },
  {
    name: "main",
    description: "'main' is a builtin function that expect a children as optional argument when called return a 'main' node.",
    example: "main(h1(text('example text')));"
  },
  {
    name: "section",
    description: "'section' is a builtin function that expect a children as optional argument when called return a 'section' node.",
    example: "section(h1(text('example text')));"
  },
  {
    name: "article",
    description: "'article' is a builtin function that expect a children as optional argument when called return a 'article' node.",
    example: "article(h1(text('example text')));"
  },
  {
    name: "aside",
    description: "'aside' is a builtin function that expect a children as optional argument when called return a 'aside' node.",
    example: "aside(h1(text('example text')));"
  },
  {
    name: "details",
    description: "'details' is a builtin function that expect a children as optional argument when called return a 'details' node.",
    example: "details(h1(text('example text')));"
  },
  {
    name: "dialog",
    description: "'dialog' is a builtin function that expect a children as optional argument when called return a 'dialog' node.",
    example: "dialog(h1(text('example text')));"
  },
  {
    name: "summary",
    description: "'summary' is a builtin function that expect a children as optional argument when called return a 'summary' node.",
    example: "summary(h1(text('example text')));"
  },
  {
    name: "data",
    description: "'data' is a builtin function that expect a children as optional argument when called return a 'data' node.",
    example: "data(h1(text('example text')));"
  },
  {
    name: "code",
    description: "'code' is a builtin function that expect a children as optional argument when called return a 'code' node.",
    example: "code(text('example text'));"
  },
  {
    name: "pre",
    description: "'pre' is a builtin function that expect a children as optional argument when called return a 'pre' node.",
    example: "pre();"
  },
  {
    name: "prorgress",
    description: "'prorgress' is a builtin function that expect a children as optional argument when called return a 'prorgress' node.",
    example: "prorgress(text('example text'));"
  },
  {
    name: "strong",
    description: "'strong' is a builtin function that expect a children as optional argument when called return a 'strong' node.",
    example: "strong(text('example text'));"
  },
  {
    name: "button",
    description: "'button' is a builtin function that expect a children as optional argument when called return a 'button' node.",
    example: "button(text('example text'));"
  },
  {
    name: "input",
    description: "'input' is a builtin function that expect a children as optional argument when called return a 'input' node.",
    example: "input();"
  },
  {
    name: "textarea",
    description: "'textarea' is a builtin function that expect a children as optional argument when called return a 'textarea' node.",
    example: "textarea();"
  },
  {
    name: "form",
    description: "'form' is a builtin function that expect a children as optional argument when called return a 'form' node.",
    example: "form(\n  input().attr('type', 'text'),\n  input().attr('type', 'password')\n);"
  },
  {
    name: "audio",
    description: "'audio' is a builtin function that expect a children as optional argument when called return a 'audio' node.",
    example: "audio(\n  source().attr('src', 'path/of/audio.mp3')\n);"
  },
  {
    name: "video",
    description: "'video' is a builtin function that expect a children as optional argument when called return a 'video' node.",
    example: "video(\n  source().attr('src', 'path/of/video.mp4')\n);"
  },
  {
    name: "source",
    description: "'source' is a builtin function that expect a children as optional argument when called return a 'source' node.",
    example: "source().attr('src', 'path/of/file');"
  },
  {
    name: "select",
    description: "'select' is a builtin function that expect a children as optional argument when called return a 'select' node.",
    example: "select(\n  option(text('example text')),\n  option(text('example text'))\n);"
  },
  {
    name: "option",
    description: "'option' is a builtin function that expect a children as optional argument when called return a 'option' node.",
    example: "option(text('example text'));"
  },
  {
    name: "optgroup",
    description: "'optgroup' is a builtin function that expect a children as optional argument when called return a 'optgroup' node.",
    example: "optgroup(\n  option(text('example text')),\n  option(text('example text'))\n);"
  },
  {
    name: "label",
    description: "'label' is a builtin function that expect a children as optional argument when called return a 'label' node.",
    example: "label(text('example text'));"
  },
  {
    name: "canvas",
    description: "'canvas' is a builtin function that expect a children as optional argument when called return a 'canvas' node.",
    example: "canvas();"
  },
  {
    name: "img",
    description: "'img' is a builtin function that expect a children as optional argument when called return a 'img' node.",
    example: "img().attr('src', 'path/of/image.png');"
  },
  {
    name: "nav",
    description: "'nav' is a builtin function that expect a children as optional argument when called return a 'nav' node.",
    example: "nav(h1(text('example text')));"
  },
  {
    name: "ul",
    description: "'ul' is a builtin function that expect a children as optional argument when called return a 'ul' node.",
    example: "ul(\n  li(text('exampple text')),\n  li(text('exampple text'))\n);"
  },
  {
    name: "li",
    description: "'li' is a builtin function that expect a children as optional argument when called return a 'li' node.",
    example: "li(text('exampple text'));"
  },
  {
    name: "dl",
    description: "'dl' is a builtin function that expect a children as optional argument when called return a 'dl' node.",
    example: "dl(\n  dt(text('example text')),\n  dd(text('example text'))\n);"
  },
  {
    name: "dt",
    description: "'dt' is a builtin function that expect a children as optional argument when called return a 'dt' node.",
    example: "dt(text('example text'));"
  },
  {
    name: "dd",
    description: "'dd' is a builtin function that expect a children as optional argument when called return a 'dd' node.",
    example: "dd(text('example text'));"
  },
  {
    name: "caption",
    description: "'caption' is a builtin function that expect a children as optional argument when called return a 'caption' node.",
    example: "caption(text('example text'));"
  },
  {
    name: "table",
    description: "'table' is a builtin function that expect a children as optional argument when called return a 'table' node.",
    example: "table(tr(th(text('example text'))));"
  },
  {
    name: "tr",
    description: "'tr' is a builtin function that expect a children as optional argument when called return a 'tr' node.",
    example: "tr(th(text('example text')));"
  },
  {
    name: "th",
    description: "'th' is a builtin function that expect a children as optional argument when called return a 'th' node.",
    example: "th(text('example text'));"
  },
  {
    name: "thread",
    description: "'thread' is a builtin function that expect a children as optional argument when called return a 'thread' node.",
    example: "thread(th(text('example text')));"
  },
  {
    name: "tbody",
    description: "'tbody' is a builtin function that expect a children as optional argument when called return a 'tbody' node.",
    example: "tbody(th(text('example text')));"
  },
  {
    name: "tfoot",
    description: "'tfoot' is a builtin function that expect a children as optional argument when called return a 'tfoot' node.",
    example: "tfoot(th(text('example text')));"
  },
  {
    name: "colgroup",
    description: "'colgroup' is a builtin function that expect a children as optional argument when called return a 'colgroup' node.",
    example: "colgroup(col(text('example text')));"
  },
  {
    name: "col",
    description: "'col' is a builtin function that expect a children as optional argument when called return a 'col' node.",
    example: "col(text('example text'));"
  },
  {
    name: "center",
    description: "'center' is a builtin function that expect a children as optional argument when called return a centered 'div' node.",
    example: "center(text('example text'));"
  },
]


export default function List() {
  const list = dl().attr("class", "a");

  for(const func of funcs) {
    const item = dt(h2(
                    text(func.name)
                  )
                  .attr("class", "p_title"),
                  dd(
                    p(text(func.description)),
                    h2(text("example: "))
                    .attr("class", "p_line"),
                    pre(code(text(func.example)))
                  )
                  ).attr("class", "func_item");
    if('descmethod' in func) {
      for(const method of func.descmethod) {
        const item_method = dt(h2(
                        text("." + method.name)
                      )
                      .attr("class", "p_title"),
                      dd(
                        p(text(method.description)),
                        h2(text("example: "))
                        .attr("class", "p_line"),
                        pre(code(text(method.example)))
                      )
                      ).attr("class", "method_item");

        item.append(item_method);
      }
    }

    list.append(item);
  }

  return list;
}