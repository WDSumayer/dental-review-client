import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Care-dent`;
    }, [title])
}
export default useTitle;