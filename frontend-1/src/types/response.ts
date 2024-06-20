interface Recipe {
  prep: string;
  bake: string;
  total: string;
  yield: string;
}

export interface ContentType {
  title: string;
  description: string;
  image: string;
  recipe: Recipe;
}
