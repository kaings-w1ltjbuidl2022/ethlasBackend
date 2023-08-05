import {
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { BaseRepository } from './base';
import { EthlasNFT } from '../../types';

export class EthlasNFTRepository extends BaseRepository<EthlasNFT> {
  private readonly _collectionRef: CollectionReference;

  constructor(collectionRef: CollectionReference) {
    super();
    this._collectionRef = collectionRef;
  }

  async create(data: EthlasNFT) {
    await setDoc(doc(this._collectionRef, data.id), { ...data });
    // return await addDoc(this._collectionRef, data);
  }

  async getAll() {
    const data: EthlasNFT[] = [];
    const querySnapshot = await getDocs(this._collectionRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as EthlasNFT);
    });

    return data;
  }

  async get(docId: string) {
    const docRef = doc(this._collectionRef, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as EthlasNFT) : null;
  }

  async update(data: Partial<EthlasNFT>, docId: string) {
    const docRef = doc(this._collectionRef, docId);
    return await updateDoc(docRef, data);
  }
}
