import { FaUser } from 'react-icons/fa';
// import { PageWrapper } from '../../components/modules';

const About = () => {
  return (
    // <PageWrapper>
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="team"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Us
          </h1>
          <p className="mb-8 leading-relaxed">
            Mombasa Digital Solutions is a leading software development company
            based in Mombasa, Kenya. We specialize in web design, web
            development, website maintenance, software development, and mobile
            app development. Our team of experienced developers is dedicated to
            creating innovative solutions that meet our clients' needs.
          </p>
          <div className="flex justify-center">
            <span className="inline-flex">
              <span className="text-gray-500">
                <FaUser className="w-6 h-6" />
              </span>
              <h2 className="text-gray-900 font-medium title-font px-2">
                Mwero Abdalla, CEO
              </h2>
            </span>
          </div>
        </div>
      </div>
    </section>
    // </PageWrapper>
  );
};

export default About;
