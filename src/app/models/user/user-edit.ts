import { Ad } from '../ad/ad';

export class UserEdit {
    Id: number;
    Login: string;
    FirstName: string;
    LastName: string;
    RegistrationDate: Date;  
    Email: string;  
    Ads: Ad[];  
    IsAdmin: Boolean;
    IsModerator: Boolean;
    IsBlocked: Boolean; 
}