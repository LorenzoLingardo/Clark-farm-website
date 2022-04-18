import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";


export const makeSlug = mainFormData => {
  return mainFormData.title.replace(/ /g,"-").toLowerCase();
}

export const addNewEvent = async (mainFormData) => {
  await addDoc(collection(db, "test"), {
    date: mainFormData.date,
    desc: mainFormData.desc,
    images: [mainFormData.images],
    prices: mainFormData.prices,
    slug: makeSlug(mainFormData),
    title: mainFormData.title,
  });
};

export const overwriteEvent = async (mainFormData) => {
  try {
    await updateDoc(doc(db, "test"), {
      date: mainFormData.date,
      desc: mainFormData.desc,
      images: [mainFormData.images],
      prices: mainFormData.prices,
      slug: makeSlug(mainFormData),
      title: mainFormData.title,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getDocData = async () => {
  const docRef = doc(db, "test", "dE8xeRWXjTak03J3lHv7");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("Niente cose");
  }
}

// export const deleteEvent = async () => {
//   try {
//     await deleteDoc(doc(db, "test", "ck7xvPXPdhgM7M9xts6p"));
//   } catch (e) {
//     console.log(e);
//   }
// };
