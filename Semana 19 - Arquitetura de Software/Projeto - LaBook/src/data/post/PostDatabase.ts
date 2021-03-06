import { post } from "../../model/types";
import { BaseDatabase } from "../BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private nameDatabase: string = "post_labook"

  constructor() {
    super();
  }

  public insertPost = async (post: post): Promise<void> => {
    await this.connection.raw(`
        INSERT INTO ${this.nameDatabase} (id, picture, description, create_date, type, user_id)
        VALUES(
          "${post.id}",
          "${post.photo}",
          "${post.description}",
          "${post.createdAt}",
          "${post.type}",
          "${post.authorId}"
      )
    `);
  };

  public selectById = async (id: string): Promise<post[]> => {
    
    const [result]: any = await this.connection.raw(` 
      SELECT * FROM ${this.nameDatabase} 
      WHERE id = "${id}"
    `)
    
    return result[0]
  };
}