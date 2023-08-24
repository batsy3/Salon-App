import React from "react";
import { GetStaticProps } from "next";
import { ICategory } from "../interfaces/supplies.interface";
import { db } from "../firestore";
import { SuppliesComponent } from "../components/supplies";

// export default function Supplies ({ categories }: { categories:ICategory[] }) {
//   return <SuppliesComponent categories={categories} />;
// };

export default function Supplies({ categories }: { categories:ICategory[] }) {
  return (<>thats p</>)
}
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await db.collection("Category").get();
//   console.log(res);
//   return {
//     props: {
//       categories: res.docs
//     },
//   };
// };


