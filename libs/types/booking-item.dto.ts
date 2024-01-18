import { PassengerDto } from "src/aviatickets-submodule/libs/types/passenger.dto";
import { FlightDto } from "src/aviatickets-submodule/libs/types/flight.dto";
import { UUIDDto } from "src/aviatickets-submodule/libs/types/uuid.dto";

export interface BookingItemDto extends UUIDDto {
    price: number;
    passenger: PassengerDto;
    flight: FlightDto;
}