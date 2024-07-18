export interface Category {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    mainImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
