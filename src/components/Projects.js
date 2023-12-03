function Projects(){
    return (
        <section id="Portfolio">
        <h1>Portfolio</h1>
        <a href="https://13rstuart7.github.io/Horiseon/">
          <img src="https://user-images.githubusercontent.com/135680232/253657057-e12cb131-1e1c-463d-b184-73f113541365.png" alt width="400px" height="200px" />
        </a>
        <a href="https://github.com/13rstuart7">
          {/* Resize image with width and height properties */}
          <img src={require ("./Screenshot_1.png")} width="400px" height="200px" />
        </a>
        <a href="https://github.com/13rstuart7">
          {/* Resize image with width and height properties */}
          <img src="https://img.freepik.com/premium-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg" width=" 400px" height="200px" />
        </a>
        <a href="https://tersesocialmedia-production.up.railway.app/">
          <img src={require("./project2.png")} width ="400px" height="200px" />
        </a>
      </section>
    )
}

export default Projects