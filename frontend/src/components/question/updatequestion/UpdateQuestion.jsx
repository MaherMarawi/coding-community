import "./updatequestion.scss"

const UpdateQuestion = ({ question }) => {
    const queryClient = useQueryClient()
    const { currentUser } = useContext(AuthContext)
    const [newQuestion, setNewQuestion] = useState({
        title: "",
        description: "",
        userCode: ""
    })
    const updateQuestionMutation = useMutation({
        mutationFn: question => updateQuestion(question._id, question),
        onSuccess: (data) => {
            queryClient.setQueryData(["questions"], prevData => [data, ...prevData])
            setNewQuestion(({
                title: "",
                description: "",
                userCode: ""
            }))
        }
    })
    // const handleChange = (e) => {
    //     setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
    // }
    // const handleClick = () => {
    //     const domiQuestion = newQuestion
    //     if (currentUser) {
    //         domiQuestion.user_id = currentUser.id
    //         domiQuestion.user_name = currentUser.username
    //     }
    //     setNewQuestion(domiQuestion)
    //     addQuestionMutation.mutate(newQuestion)
    // }

    return (
        <button onClick={() => handleClick()} disabled={updateQuestionMutation.isLoading} >{updateQuestionMutation.isLoading ? <Loader /> : "Update"}</button>

    )
}

export default UpdateQuestion