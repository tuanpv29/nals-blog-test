import { Blog, BlogFormValue } from '../models/blog.model';
import { SortOption } from '../models/sort.model';

export namespace BlogAction {
  export class Get {
    static readonly type = '[Blog] Get';
  }

  export class Add {
    static readonly type = '[Blog] Add';
    constructor(public payload: BlogFormValue) {}
  }

  export class Edit {
    static readonly type = '[Blog] Edit';
    constructor(public payload: Blog) {}
  }

  export class Delete {
    static readonly type = '[Blog] Delete';
    constructor(public id: string) {}
  }

  export class SetBlogs {
    static readonly type = '[Blog] Set Blogs';
    constructor(public blogs: Blog[]) {}
  }

  export class SetSearch {
    static readonly type = '[Blog] Set Search';
    constructor(public search: string) {}
  }

  export class SetSort {
    static readonly type = '[Blog] Set Sort';
    constructor(public sortBy: SortOption) {}
  }

  export class SetPage {
    static readonly type = '[Blog] Set Page';
    constructor(public page: number) {}
  }
}
