import { useQuery } from '@tanstack/react-query';

const useSixSecAllProjectData = () => {
    const { data: sixSecAllProjectData, isLoading, refetch } = useQuery({
        queryKey: ['sixSecAllProjectData'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5001/sixSecAllProjectData");
            const data = await res.json();
            return data;
        },
    });

    return [sixSecAllProjectData, isLoading, refetch];
};

export default useSixSecAllProjectData;
