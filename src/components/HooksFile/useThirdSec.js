
import { useQuery } from '@tanstack/react-query';

const useThirdSec = () => {
    const { data: thirdSecData, isLoading, refetch } = useQuery({
        queryKey: ['ThirdSec'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/ThirdSec");
            const data = await res.json();
            return data;
        },
    });

    return [thirdSecData, isLoading, refetch];
};

export default useThirdSec;
