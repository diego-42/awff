export default function Header() {
  return header(
    center(
      div(
        h1(text("AWFF")),
        h2(text("version 1.0"))
      ).css({
        display: "flex",
        justifyContent: "space-between"
      })
    )
  );
}