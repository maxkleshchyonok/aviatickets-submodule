import { UUIDDto } from "src/aviatickets-submodule/libs/types/uuid.dto";
import { BookingDataDto } from "src/aviatickets-submodule/libs/types/booking-data.dto";

export interface UserDto extends UUIDDto {
    firstName: string;
    lastName: string;
    email: string;
    roleId: string;
    roleType: "Admin" | "User" | "Sales";
    bookingData?: BookingDataDto;
}