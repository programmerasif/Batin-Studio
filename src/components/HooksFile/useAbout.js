import { useQuery } from '@tanstack/react-query';

const useAbout = () => {

    const { data: aboutData, isLoading, refetch } = useQuery({
        queryKey: ['aboutData'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5001/aboutData");
            const data = await res.json();
            return data[0];
        },
    });

    return [aboutData, isLoading, refetch];
};

export default useAbout;