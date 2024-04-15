import { ListLayout } from "@/components/Layouts/ListLayout";


type BookmarkListLayoutProps = {
    children: React.ReactNode;
}

const BookmarkListLayout = ({ children }: BookmarkListLayoutProps) => {
    return (
        <>
            <ListLayout
                group="faqs"
                header="FAQs"
                withSearch
                withFilter
                withSort
            >
            </ListLayout >
            {children}
        </>
    )
}

export default BookmarkListLayout;
