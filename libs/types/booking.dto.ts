import { UserDto } from "./user.dto";
import { UUIDDto } from "./uuid.dto";
import { BookingItemDto } from "./booking-item.dto";

export interface BookingDto extends UUIDDto {
    status: "Payed" | "Booked" | "Cancelled";
    price: number;
    user: UserDto;
    bookingItems: BookingItemDto[];
}