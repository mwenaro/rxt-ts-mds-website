import { FaBoxes, FaCashRegister, FaHospital, FaLaptopCode, FaSchool, FaUsers } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Our Services
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
           <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Web Designing
          </h2>
          <p className="leading-relaxed text-base">
            We design beautiful and responsive websites that are tailored to
            meet your business needs.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaLaptopCode />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Web Development
          </h2>
          <p className="leading-relaxed text-base">
            We develop dynamic and scalable web applications using the
            latest technologies.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaLaptopCode />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Website Maintenance
          </h2>
          <p className="leading-relaxed text-base">
            We offer website maintenance services to ensure that your
            website is always up-to-date and running smoothly.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaLaptopCode />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Software Development
          </h2>
          <p className="leading-relaxed text-base">
            We develop custom software solutions that help you streamline
            your business operations.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaLaptopCode />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Mobile App Development
          </h2>
          <p className="leading-relaxed text-base">
            We develop cross-platform mobile applications that work on
            both Android and iOS devices.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaLaptopCode />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            School Management Systems
          </h2>
          <p className="leading-relaxed text-base">
            We develop school management systems that help schools manage
            their academic and administrative activities.
          </p>
          </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaSchool />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Hospital Management Systems
          </h2>
          <p className="leading-relaxed text-base">
            We develop hospital management systems that help healthcare
            providers manage patient information and automate their
            processes.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaHospital />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Human Resource Management Systems
          </h2>
          <p className="leading-relaxed text-base">
            We develop human resource management systems that help
            organizations manage their employee information and automate
            their HR processes.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaUsers />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Point of Sale Systems
          </h2>
          <p className="leading-relaxed text-base">
            We develop point of sale systems that help retailers manage
            their sales, inventory, and customer information.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaCashRegister />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-medium title-font mb-2">
            Inventory Systems
          </h2>
          <p className="leading-relaxed text-base">
            We develop inventory systems that help businesses manage their
            inventory levels, track their stock, and reduce wastage.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-gray-800">
            <FaBoxes />
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default Services;