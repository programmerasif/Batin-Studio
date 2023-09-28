// import { useQuery } from '@tanstack/react-query';
// import React from 'react';

// const useCaseStudyThirdSection = () => {

//     const { data: caseStudyThirdSectionData, refetch : thirdRefetch } = useQuery({
//         queryKey: ['caseStudyThirdSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudyThirdSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudyThirdSectionData, thirdRefetch];
// };

// export default useCaseStudyThirdSection;