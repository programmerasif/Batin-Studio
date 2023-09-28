// import { useQuery } from '@tanstack/react-query';

// const useCaseStudySecondSec = () => {

//     const { data: caseStudySecondSectionData, refetch : secondRefetch } = useQuery({
//         queryKey: ['caseStudySecondSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudySecondSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudySecondSectionData, secondRefetch];
// };


// export default useCaseStudySecondSec;