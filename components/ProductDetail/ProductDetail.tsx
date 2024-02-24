"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/data/products";
import { Product } from "@/models/product.model";
import Link from "next/link";
import Loader from "../Loader/Loader";

const ProductDetail = ({ title }: { title: string }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (typeof title === "string") {
      // Decodifica el título de la URL
      const decodedTitle = decodeURIComponent(title);
      // Busca el producto por título en los datos
      const foundProduct = data.find((p) => p.title === decodedTitle);
      setProduct(foundProduct || null); // Si no se encuentra, establece product en null
    }
  }, [title]);

  if (!product) {
    return <Loader titleLoader="Cargando producto"/>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-64 object-cover object-center"
          src={product.image}
          alt={product.title}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">Precio:</span> ${product.price}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">Categoría:</span> {product.category}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">Peso:</span> {product.weight}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">Tamaño:</span> {product.size}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">Material:</span> {product.material}
          </p>
          <Link href="/products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
