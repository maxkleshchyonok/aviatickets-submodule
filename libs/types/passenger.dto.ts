import { UUIDDto } from "./uuid.dto";

export interface PassengerDto extends UUIDDto {
    firstName: string;
    lastName: string;
    passportId: string;
}