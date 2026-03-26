import React from "react";
import { useVehicles } from "@/hooks/useVehicles";
import { Vehicle } from "@/data/vehicles";

/**
 * VehicleList component
 * Fetches and displays a list of vehicles using the useVehicles hook.
 * Shows loading and error states.
 */
export const VehicleList: React.FC = () => {
  const { data, isLoading, error } = useVehicles();

  if (isLoading) return <div>Loading vehicles...</div>;
  if (error) return <div>Error loading vehicles: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Available Vehicles</h2>
      <ul>
        {data?.map((vehicle: Vehicle) => (
          <li key={vehicle.id}>
            <strong>{vehicle.title}</strong> — {vehicle.make} {vehicle.model} ({vehicle.year})<br />
            Price: ${vehicle.price} | Location: {vehicle.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Usage example:
// <VehicleList />
