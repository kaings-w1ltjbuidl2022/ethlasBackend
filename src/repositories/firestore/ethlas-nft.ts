import {
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { BaseRepository } from './base';
import { Nft } from '../../types';
import { NftFilter, NftRepository } from '../nft';

export class FirestoreEthlasNFTRepository
  extends BaseRepository<Nft>
  implements NftRepository
{
  private readonly _collectionRef: CollectionReference;

  constructor(collectionRef: CollectionReference) {
    super();
    this._collectionRef = collectionRef;
  }

  async create(data: Nft) {
    await setDoc(doc(this._collectionRef, data.id), { ...data });
    // return await addDoc(this._collectionRef, data);
  }

  async getAll() {
    const data: Nft[] = [];
    const querySnapshot = await getDocs(this._collectionRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as Nft);
    });

    return data;
  }

  async get(filter: Partial<NftFilter>) {
    const docRef = doc(this._collectionRef, filter.id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as Nft) : null;
  }

  async update(data: Partial<Nft>, filter: Partial<NftFilter>) {
    const docRef = doc(this._collectionRef, filter.id);
    return await updateDoc(docRef, data);
  }
}
