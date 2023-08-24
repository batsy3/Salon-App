import { toast } from "react-toastify";
import {
  ICategory,
  ISupply,
  ISupplyDTO,
} from "../interfaces/supplies.interface";
import { Filter } from "firebase-admin/firestore";
import { db } from "../firestore";

const supplyRef = db.collection("supplies");
const categoryRef = db.collection("category");

export async function createSupply(data: ISupplyDTO) {
  try {
    const item = await supplyRef
      .where(
        Filter.and(
          Filter.where("name", "==", data.name),
          Filter.where("category", "==", data.category.name)
        )
      )
      .get();
    //   .where("name", "==", data.name )
    //   .where("category", "==", data.category.name)

    if (!item) {
      await supplyRef.add(data).then((data) => {
        console.log(data);
        toast.success("item successfully added");
      });
    }
    toast.error("item already exists");
  } catch (error) {
    throw error;
  }
}

export async function getAllSUpplies(category: string) {
  try {
    const items = await supplyRef.where("category", "==", category).get();
    return items;
  } catch (error) {
    toast.error(`error getting ${category} items`);
    throw error;
  }
}

export async function updateSupply(id: string, data: Partial<ISupplyDTO>) {
  try {
    const res = await db.runTransaction(async (t) => {
      const item = await supplyRef.doc(id);
      if (!(await item.get()).exists) {
        throw new Error("item doesnt exist");
      }

      t.update(item, {
        name: data.name,
        quantity: data.quantity,
        category: data.category,
        last_restocked: data.last_restocked,
      });
    });
  } catch (error) {
      toast.error("error updating item")
    throw error;
  }
}

