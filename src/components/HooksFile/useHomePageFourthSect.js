import { useQuery } from '@tanstack/react-query';

const useHomePageFourthSect = () => {
    const { data: homePageFourthSectionData, refetch : Hforthrefetch } = useQuery({
        queryKey: ['homePageFourthSectionData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/homePageFourthSectionData`);
            const data = await res.json();
            return data[0];
        },
    });

    return [homePageFourthSectionData, Hforthrefetch];
};

export default useHomePageFourthSect;