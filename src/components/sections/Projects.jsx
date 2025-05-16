import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 ">Game engine: G8B</h3>
              <p className="text-gray-400 mb-4">
                Software para desarrollar videojuegos al estilo pixelart 8x8
                pixeles, con editor de level, musica y animaciones.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Openfl", "Haxe", "Haxe/Flashdevelop"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://store.steampowered.com/app/794230/Golden8bits/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 ">Level Editor web: G8B</h3>
              <p className="text-gray-400 mb-4">
                Software para crear animaciones, sprites y level, en estilo
                pixelart 8x8; luego salvar como png.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["javascript", "Canvas", "Html5"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://criptomedia.itch.io/level-animation-editor-8x8-pixelart"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
