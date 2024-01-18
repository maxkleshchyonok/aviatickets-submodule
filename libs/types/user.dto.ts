import { UUIDDto } from "./uuid.dto";
import { BookingDataDto } from "./booking-data.dto";

export interface UserDto extends UUIDDto {
    firstName: string;
    lastName: string;
    email: string;
    roleId: string;
    roleType: "Admin" | "User" | "Sales";
    bookingData?: BookingDataDto;
}