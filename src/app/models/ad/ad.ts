import { UserDetails } from '../user/user-details';

export class Ad {
  Id: number;
  PositionName: string;
  Location: string;
  Company: string;
  PositionDescription: string;
  UserId: number;
  User: UserDetails;
  CreateDate: Date;
  IsBlocked: Boolean;
  CategoryId: number
}