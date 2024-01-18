import { PassengerDto } from "./passenger.dto";
import { FlightDto } from "./flight.dto";
import { UUIDDto } from "./uuid.dto";

export interface BookingItemDto extends UUIDDto {
    price: number;
    passenger: PassengerDto;
    flight: FlightDto;
}