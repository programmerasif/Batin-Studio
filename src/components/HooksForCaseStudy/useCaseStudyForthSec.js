// import { useQuery } from "@tanstack/react-query";

// const useCaseStudyForthSec = () => {

//     const { data: caseStudyForthSectionData, refetch : forthRefetch } = useQuery({
//         queryKey: ['caseStudyForthSection'],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5001/caseStudyForthSection");
//             const data = await res.json();
//             return data[0];
//         },
//     });

//     return [caseStudyForthSectionData, forthRefetch];
// };

// export default useCaseStudyForthSec;