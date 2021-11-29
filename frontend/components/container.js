import Header from "../components/nav/header";

const Container = ({ children, categories }) => {
    return(
        <div>
            <Header categories={categories} />
            <div className="p-2 lg:py-10 lg:px-20 md:p-4">
            {children}
            </div>
        </div>
    )
};

export default Container;