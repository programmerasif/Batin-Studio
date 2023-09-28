// import { useQuery } from '@tanstack/react-query';
// import React from 'react';

// const useCaseStudySixSevenSec = () => {
//     const { data: caseStudysixSevenSectionData, refetch : sixSevenRefetch } = useQuery({
//         queryKey: ['caseStudysixSevenSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudysixSevenSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudysixSevenSectionData, sixSevenRefetch];
// };

// export default useCaseStudySixSevenSec;