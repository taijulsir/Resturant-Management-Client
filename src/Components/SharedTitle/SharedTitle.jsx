/* eslint-disable react/prop-types */


const SharedTitle = ({subHeading,heading}) => {
    return (
        <div className="text-center w-1/5 mx-auto">
            <p className="text-base text-amber-500 italic">---{subHeading}--- </p>
            <h3 className="text-4xl font-semibold pt-5 pb-10 border-y-4">{heading}</h3>
        </div>
    );
};

export default SharedTitle;