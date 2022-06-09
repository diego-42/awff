import Home from "./pages/home.js"

window.onload = () => {
  
  const app = router({
    "/": Home
  }).syncHash();

  render(app);
}