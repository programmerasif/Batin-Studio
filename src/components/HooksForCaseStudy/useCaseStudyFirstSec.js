// import { useQuery } from '@tanstack/react-query';

// const useCaseStudyFirstSec = () => {
//     const { data: caseStudyFirstSectionData, isLoading, refetch } = useQuery({
//         queryKey: ['caseStudyFirstSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudyFirstSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudyFirstSectionData, isLoading, refetch];
// };

// export default useCaseStudyFirstSec;