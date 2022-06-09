import List from "../List/index.js";

export default function Functions() {
  return section(
    center(
      h2(text("Functions"))
      .attr("class", "section_title"),
      h2(
        text("Below is the list of all functions and a brief description of what they do.")
      ).attr("class", "p_line"),
      List(),
      hr()
    )
  ).attr("id", "functions");
}