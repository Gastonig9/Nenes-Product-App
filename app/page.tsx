import AppTitle from "@/components/AppTitle/AppTitle";
import Header from "@/components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <AppTitle
          title="Envío Gratis"
          slogan="¡Recibe tus productos sin costo adicional!"
          imageUrl="https://picsum.photos/210"
        />
        <AppTitle
          title="Productos de Alta Calidad"
          slogan="Seleccionamos solo los mejores productos para ti."
          imageUrl="https://picsum.photos/240"
        />
      </div>
    </div>
  );
};

export default Home;
