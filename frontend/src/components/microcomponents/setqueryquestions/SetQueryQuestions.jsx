import { getQuestions } from "../../../api/questionsApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const SetQueryQuestions = () => {
    const queryClient = useQueryClient()
    return useQuery({
        queryKey: ['questions'],
        staleTime: 10 * (60 * 1000), // 10 mins 
        cacheTime: 15 * (60 * 1000), // 15 mins
        queryFn: () => getQuestions(),
        enabled: !queryClient.getQueryData(['questions'])
    });
}