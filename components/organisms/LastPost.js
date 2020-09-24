import Module from "@molecules/Module";

const LastPost = () => (
  <section className="pad blue">
    <div className="smash">
      <div className="pad centertxt">
        <p className="purple-text">
          Me gusta hablar acerca de las cosas que me gusta, matemáticas, arte,
          literatura, filosofía. Pero escribo de cómo se hace posible.
        </p>
      </div>
      <div className="centertxt">
        {/* <h3 className="white-text">Últimas publicaciones</h3> */}
      </div>
    </div>
    <div className="smesh">
      <div className="aureole three">
        {/* {[0, 1, 2].map((index) => (
          <Module />
        ))} */}
      </div>
    </div>
    {/* <div className="pad smash centertxt">
      <a className="button-link">Ver más</a>
    </div> */}
  </section>
);

export default LastPost;
