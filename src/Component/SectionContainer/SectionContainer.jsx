/* eslint-disable react/prop-types */

export const SectionContainer = ({ children }) => {
  return (
    <div className="container h-full w-full max-w-[1420px] px-5 md:px-20 lg:px-28 mx-auto">
      {children}
    </div>
  );
};

export default SectionContainer;
