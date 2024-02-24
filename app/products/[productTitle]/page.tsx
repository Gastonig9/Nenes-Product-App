import ProductDetail from "@/components/ProductDetail/ProductDetail";
import React from "react";

const ProductDetailPage = ({
  params,
}: {
  params: { productTitle: string };
}) => {
  return (
    <ProductDetail title={params.productTitle}/>
  )
};

export default ProductDetailPage;
