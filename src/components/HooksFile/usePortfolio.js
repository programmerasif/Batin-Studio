import { useQuery } from '@tanstack/react-query';

const usePortfolio = ( allDesign) => {
    const { data: PortfolioData, isLoading, refetch } = useQuery({
        queryKey: ['Portfolio', allDesign],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/Portfolio?allDesign=${allDesign}`);
            const data = await res.json();
            return data;
        },
    });

    return [PortfolioData, isLoading, refetch];
};

export default usePortfolio;