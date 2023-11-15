/* eslint-disable react/prop-types */


const SharedTitle = ({subHeading,heading,subHeadingStyle,headingStyle}) => {
    return (
        <div className="text-center w-1/5 mx-auto">
            <p className={`text-base text-amber-500 italic uppercase ${subHeadingStyle}`}>---{subHeading}--- </p>
            <h3 className={`text-4xl font-semibold pt-5 pb-5 border-y-4 uppercase ${headingStyle}`}>{heading}</h3>
        </div>
    );
};

export default SharedTitle;