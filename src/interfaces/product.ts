export interface Product {
  id: number;
  attributes: {
    productName: string;
    slug: string | null;
    description: string;
    active: boolean;
    price: number;
    origin: string;
    taste: string | null;
    publishedAt: string;
    isFeatured: boolean;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          slug: string;
          categoryName: string;
        };
      };
    };
  };
}
