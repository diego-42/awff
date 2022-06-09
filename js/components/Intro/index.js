export default function Intro() {
  return section(
    center(
      div(
        img()
        .attr("src", "img/logo.png")
        .attr("class", "logo")
      ).css({
        display: "flex",
        justifyContent: "center"
      }),
      h2(text("Introduction"))
      .attr("class", "section_title"),
      h2(text("Welcome to the AWFF documentation."))
      .attr("class", "p_line"),

      h2(text(".meet awff"))
      .attr("class", "p_title"),
      p(
        text("AWFF (Another Web Frontend Framework) is a Javascript library for building "),
        a(text("Single Page Aplications."))
        .attr("href", "https://en.wikipedia.org/wiki/Single-page_application"),
        text(" I created this for training, obviously not for use on a production sites, but it would be a great execise to try.")
      ),
      p(text())
    )
  ).attr("id", "intro");
}