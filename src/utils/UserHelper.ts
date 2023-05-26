import { getAuth, updatePassword } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { app } from '@/firebaseConfig';
import {
  IUpdateUserData,
  IUpdateUserDataWithPassword,
  IUserData,
} from '@/types';

export class UserHelper {
  static async getUsersBySearch(search: string) {
    const firestore = getFirestore();

    const q = query(
      collection(firestore, 'users'),
      orderBy('name', 'asc'),
      where('name', '>=', search),
      where('name', '<=', search + '\uf8ff')
    );

    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map((doc) => {
      const { email, name } = doc.data() as IUserData;
      return {
        id: doc.id,
        email,
        name,
      };
    });

    return users;
  }

  static async updateUser({
    name,
    password,
    telegram,
    gender,
  }: IUpdateUserDataWithPassword) {
    const firestore = getFirestore();
    const user = getAuth(app).currentUser!;
    const { uid } = user!;

    const updatedInfo: IUpdateUserData = {};

    if (name) {
      updatedInfo.name = name;
    }

    if (telegram) {
      updatedInfo.telegram = telegram;
    }

    if (gender) {
      updatedInfo.gender = gender;
    }

    await updateDoc(doc(firestore, 'users', uid), updatedInfo);

    if (password) {
      await updatePassword(user, password);
    }
  }
}
