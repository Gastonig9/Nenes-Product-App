import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { ProductDetailPageProps } from "@/models/props.model";
import React from "react";

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  return <ProductDetail title={params.productTitle} />;
};

export default ProductDetailPage;
