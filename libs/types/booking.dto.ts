import { UserDto } from "src/aviatickets-submodule/libs/types/user.dto";
import { UUIDDto } from "src/aviatickets-submodule/libs/types/uuid.dto";
import { BookingItemDto } from "src/aviatickets-submodule/libs/types/booking-item.dto";

export interface BookingDto extends UUIDDto {
    status: "Payed" | "Booked" | "Cancelled";
    price: number;
    user: UserDto;
    bookingItems: BookingItemDto[];
}