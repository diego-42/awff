export default function Home() {
  return div(
    img().attr("src", "img/logo.png"),
    h1(text("AWFF Web Framework")),
    p(
      text("Edit "),
      span(
        text("js/pages/home.js ")
      ).css({
        color: "#ff2323"
      }),
      text("save and reload")
    )
    .css({
      margin: "1rem 0"
    }),
    a(text("Learn AWFF"))
    .attr("href", "https://github.com/diego-42")
    .css({
      marginTop: "2rem",
      color: "#232332"
    })
  ).css({
    display: "flex",

    width: "100wh",
    height: "100vh",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  });
}