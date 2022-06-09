export default function Header() {
  return header(
    center(
      div(
        div(
          h1(text("AWFF")).css({fontSize: "1.5rem"}),
          h2(text("version 1.1")).css({fontSize: ".75rem"})
        ),
        div(
          button(text("Introduction"))
          .attr("class", "scroll")
          .event("click", (event) => {

              event.preventDefault();

              const dest = document.querySelector("#intro");

              dest.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'start'
              });
          }),
          button(text("Getting started"))
          .attr("class", "scroll")
          .event("click", (event) => {

              event.preventDefault();

              const dest = document.querySelector("#started");

              dest.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'start'
              });
          }),
          button(text("Functions"))
          .attr("class", "scroll")
          .event("click", (event) => {

              event.preventDefault();

              const dest = document.querySelector("#functions");

              dest.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'start'
              });
          }),
        ).attr("class", "flex")
      ).css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      })
    )
  );
}