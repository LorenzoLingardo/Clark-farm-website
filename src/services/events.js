import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  query,
  getDocs,
  getDoc,
} from "firebase/firestore";

export const makeSlug = (mainFormData) => {
  return mainFormData.title.replace(/ /g, "-").toLowerCase();
};

export const addNewEvent = async (mainFormData) => {
  await addDoc(collection(db, "test"), {
    date: mainFormData.date,
    desc: mainFormData.desc,
    images: mainFormData.images,
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

export const getAllEvents = async () => {
  const q = query(collection(db, "events"));
  const querySnapshot = await getDocs(q);
  const events = [];
  querySnapshot.forEach((doc) => events.push({ id: doc.id, ...doc.data() }));
  return events;
};

export const getEvent = async () => {
  const docRef = doc(db, "events", doc.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document");
  }
};
