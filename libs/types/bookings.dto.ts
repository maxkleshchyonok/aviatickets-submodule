import { BookingDto } from "src/aviatickets-submodule/libs/types/booking.dto";

export interface BookingsDto {
    count: number;
    bookings: BookingDto[];
}  