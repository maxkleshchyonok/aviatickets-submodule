import { BookingDto } from "./booking.dto";

export interface BookingDataDto {
    count: number;
    bookings: BookingDto[];
}