/* eslint-disable react/prop-types */

export const SectionContainer = ({children}) => {
    return (
        <div className="container max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    );
};

export default SectionContainer;