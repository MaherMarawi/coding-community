import { getQuestions } from "../../../../api/richEditorQuestionsApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const SetQueryQuestions = () => {
    const queryClient = useQueryClient()
    return useQuery({
        queryKey: ['richEditorQuestions'],
        staleTime: 10 * (60 * 1000), // 10 mins 
        cacheTime: 15 * (60 * 1000), // 15 mins
        queryFn: () => getQuestions(),
        enabled: !queryClient.getQueryData(['richEditorQuestions'])
    });
}