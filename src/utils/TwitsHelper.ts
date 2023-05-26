import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { app } from '@/firebaseConfig';
import { ITwitData, IUserData } from '@/types';

export class TwitsHelper {
  static async getTwitsBySearch(search: string) {
    const firestore = getFirestore();
    const user = getAuth(app).currentUser;
    const { uid } = user!;

    const twitQuery = query(
      collection(firestore, 'twits'),
      orderBy('text', 'asc'),
      where('text', '>=', search),
      where('text', '<=', search + '\uf8ff'),
      where('authorId', '==', uid)
    );

    const querySnapshot = await getDocs(twitQuery);

    const twits = querySnapshot.docs.map((doc) => {
      const { text, createdAt, image, authorId } = doc.data() as ITwitData;

      return {
        id: doc.id,
        text,
        createdAt,
        image,
        authorId,
      };
    });

    return twits;
  }

  static async getAllTwits() {
    const firestore = getFirestore();

    const q = query(
      collection(firestore, 'twits'),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(q);

    const twits = querySnapshot.docs.map(async (twit) => {
      const { authorId, text, createdAt, image } = twit.data() as ITwitData;

      const docSnapshot = await getDoc(doc(firestore, 'users', authorId));

      const { name, email } = docSnapshot.data() as IUserData;

      return {
        id: twit.id,
        authorName: name,
        authorEmail: email,
        text,
        createdAt,
        image,
      };
    });

    const twitsData = await Promise.all(twits);

    return twitsData;
  }

  static async getUserTwits() {
    const firestore = getFirestore();
    const userId = getAuth(app).currentUser?.uid!;

    const q = query(
      collection(firestore, 'twits'),
      orderBy('createdAt', 'desc'),
      where('authorId', '==', userId)
    );

    const querySnapshot = await getDocs(q);

    const twits = querySnapshot.docs.map(async (twit) => {
      const { authorId, text, createdAt, image } = twit.data() as ITwitData;

      const docSnapshot = await getDoc(doc(firestore, 'users', authorId));
      const { name, email } = docSnapshot.data() as IUserData;

      return {
        id: twit.id,
        authorName: name,
        authorEmail: email,
        text,
        createdAt,
        image,
      };
    });

    const twitsData = await Promise.all(twits);

    return twitsData;
  }

  static async addTwit({ text, image }: { text: string; image?: File }) {
    const firestore = getFirestore();
    const authorId = getAuth(app).currentUser?.uid;

    const twit = {
      text,
      authorId,
      createdAt: new Date().getTime(),
      image: '',
    };

    const twitDoc = await addDoc(collection(firestore, 'twits'), twit);

    if (image) {
      const storage = getStorage();

      const extension = /(?:\.([^.]+))?$/; // get image extension
      const imageExtension = extension.exec(image.name)![1];

      const storageRef = ref(
        storage,
        'images/' + twitDoc.id + '.' + imageExtension
      );

      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);

      await updateDoc(doc(firestore, 'twits', twitDoc.id), { image: imageUrl });
    }
  }
}
