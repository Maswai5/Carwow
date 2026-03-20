import { useQuery } from '@tanstack/react-query';
import { vehicles, Vehicle } from '@/data/vehicles';

const fetchVehicles = async (): Promise<Vehicle[]> => {
  // Simulate async fetch with a Promise
  return new Promise(resolve => {
    setTimeout(() => resolve(vehicles), 300); // Simulate network delay
  });
};

export function useVehicles() {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: fetchVehicles,
  });
}

// Usage example:
// const { data, isLoading, error } = useVehicles();
// data will be your vehicles array
