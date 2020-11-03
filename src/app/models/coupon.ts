import { Category } from './category';
export class Coupon {
  public constructor(
    public id?: number,
    public companyID?: number,
    public categoryID?: Category,
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: number,
    public price?: number,
    public image?: string
  ) {}
}
