export default function Started() {
  return section(
    center(
      h2(text("Getting started"))
      .attr("class", "section_title"),
      p(
        text("First we need to download the skeleton of base project in my github: "),
        a(text("http://github.com/diego-42/awff"))
        .attr("href", "http://github.com/diego-42/awff"),
        text(" or download only the library "),
        a(text("here"))
        .attr("href", "https://github.com/diego-42/awff/blob/master/js/awff/awff.js"),
        text(" a simple wget should solve.")
      ),
      h2(text(".router system"))
      .attr("class", "p_title"),
      p(text("There are two importants functions in awff, the fist is 'render', when called this function show on screen the component passed as argument.")),
      h2(text("example: ")).attr("class", "p_line"),
      pre(
        code(text("render(div());\n\nor\n\nrender(h1(text('Hello, World!')));"))
        .attr("class", "language-javascript")
      ),
      p(text("The second is 'router', when called return a wrapper with content of the current page. Using the 'render' function shown above we can show this page in the screen.")),
      p(
        strong(text("Important: ")),
        text("the 'router' use "),
        a(text("hash"))
        .attr("href", "https://en.wikipedia.org/wiki/URI_fragment"),
        text(" to manage routes, so when you want to call a specific page don't forget the '#' bafore the path.")),
      h2(text("example: ")).attr("class", "p_line"),
      pre(
        code(text("const app = router({\n  '/': div(h1(text('Home page'))),\n  '/blog': div(h1(text('Blog page')))\n}).syncHash();\n\nrender(app);"))
      ),
      p(strong(text('Note: ')), text("Router returns a wrapper and this wrapper contains the 'syncHash' function. After calling the 'render' function we call the 'syncHash' for syncronize the current hash with the current page. But don't worry, we'll only call it once time, then it will automatically sync the hash."))
    )
  ).attr("id", "started");
}