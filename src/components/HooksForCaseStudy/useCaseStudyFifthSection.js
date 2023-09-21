import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCaseStudyFifthSection = () => {
    const { data: caseStudyFifthSecData,  refetch : fifthRefetch } = useQuery({
        queryKey: ['caseStudyFifthSection'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/caseStudyFifthSection");
            const data = await res.json();
            return data[0];
        },
    });

    return [caseStudyFifthSecData,  fifthRefetch];
};

export default useCaseStudyFifthSection;