import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureItem = ({ icon, title, content }) => {
  return (
    <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-full after:bg-gray-200 group max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
      <FontAwesomeIcon icon={icon} className="text-primary text-3xl mb-6" />
      <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity">
        {title}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default FeatureItem;
