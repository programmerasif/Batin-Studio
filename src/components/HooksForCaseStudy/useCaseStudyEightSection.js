// import { useQuery } from '@tanstack/react-query';
// import React from 'react';

// const useCaseStudyEightSection = () => {
//     const { data: caseStudyEightSecData,  refetch : rightRefetch } = useQuery({
//         queryKey: ['caseStudyEightSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudyEightSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudyEightSecData,  rightRefetch];
// };

// export default useCaseStudyEightSection;