declare module "express" {
  export interface Request {
    body: {
      value: number;
    };
  }
}
