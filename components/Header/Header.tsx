import React from "react";

const Header = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Bienvenido a nuestra tienda de productos!
        </h2>
        <p className="text-gray-600">
          Aquí encontrarás una amplia selección de productos de alta calidad
          para todas tus necesidades. Desde electrónica hasta moda, ¡tenemos
          todo lo que estás buscando! Explora nuestra tienda y descubre nuestras
          increíbles ofertas.
        </p>
      </div>
    </section>
  );
};

export default Header;
