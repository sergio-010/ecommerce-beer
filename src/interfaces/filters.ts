export type Filterstype = {
  result: Filter | null;
  loading: boolean;
  error: string;
};
export type Filter = {
  schema: {
    attributes: {
      origin: {
        enum: any;
      };
      taste: {
        enum: any;
      };
    };
  };
};
