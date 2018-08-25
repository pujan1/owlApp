import { Db, ObjectID } from 'mongodb';
import {injectable, unmanaged} from 'inversify';
import { MongoDBConnection } from './config';

@injectable()
export class MongoDBClient<T> {
  public db: Db;
  constructor(@unmanaged() private collection: { new (...args: any[]): T; }) {
      MongoDBConnection.getConnection((connection) => {
          this.db = connection;
        });
  }

  public find(filter: Object = {}) {
      return new Promise<T[]>((resolve, reject) => {
          this.db.collection(this.collection.name.toLowerCase()).find(filter).toArray((error, find) => {
            this.result(error, find, resolve, reject);
          });
      });
  }

  private result(err, res: any, resolve, reject ): any {
    if (err) {
        reject(err);
    }
     resolve(res);
  }
}