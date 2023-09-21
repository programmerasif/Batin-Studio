import { useQuery } from '@tanstack/react-query';

const useSixSec = () => {

    const { data: SixSecScrollData, isLoading, refetch } = useQuery({
        queryKey: ['SixSecScrollData'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/SixSecScrollData");
            const data = await res.json();
            return data;
        },
    });

    return [SixSecScrollData, isLoading, refetch];
};

export default useSixSec;