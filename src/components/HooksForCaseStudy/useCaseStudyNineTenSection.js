// import { useQuery } from '@tanstack/react-query';
// import React from 'react';

// const useCaseStudyNineTenSection = () => {

//     const { data: caseStudyNineTenSectionData, refetch : nineTenRefetch } = useQuery({
//         queryKey: ['caseStudyNineTenSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudyNineTenSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudyNineTenSectionData, nineTenRefetch];
// };

// export default useCaseStudyNineTenSection;