const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hola, soy Vicente Fleitas
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Soy desarrollador fullstack, me gusta el clean code, aplicaciones web
          escalables. Mi objetivo es crear soluciones que ofrezcan un buen
          performance y una experiencia de usuario agradable.
        </p>
      </div>
    </section>
  );
};

export default Home;
