import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTags, faFileAlt, faChartLine, faCommentDots, faBolt } from '@fortawesome/free-solid-svg-icons';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: "Features – InspireYT",
  description: "Explore our features.",
});


function page() {
  return (
    <div>
      <div className="hero lg:pt-[180px] max-lg:pt-[160px] pb-[100px] overflow-hidden lg:overflow-visible bg-white dark:bg-dark-300 pt-[100px] max-md:py-25 relative max-md:overflow-hidden">


        <section>
          <div className="container">
            <div
              className="max-w-[948px] mx-auto text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-once="true"
            >
              <p className="mb-4 font-medium uppercase">Our Features</p>
              <h1 className="max-lg:mb-10 mb-10">
                Unleash the Power of AI for Your YouTube Channel
              </h1>
              <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
                Our AI-based YouTube tool offers cutting-edge features designed to optimize your content creation and enhance viewer engagement. Discover how our innovative solutions can transform your channel and streamline your workflow.
              </p>

            </div>
          </div>
        </section>


        <section className="bg-white dark:bg-dark-300 max-md:pb-20 relative max-sm:overflow-hidden">
          <div className="absolute left-0 right-0 -top-[200px] bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden" />
          <div className="container ">
            <div className="relative z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-sm:hidden">
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]" />
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
              </div>
              <div
                className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-offset={200}
                data-aos-duration={1000}
                data-aos-once="true"
              >
    

                {/* Video Idea Generator */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Video Idea Generator</h3>
                    <p>Generate unique and engaging video ideas based on trending topics and audience preferences.</p>
                  </div>
                </div>

                {/* Description & Tags */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faTags} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Description & Tags</h3>
                    <p>Create SEO-friendly video descriptions and tags to boost your visibility on YouTube.</p>
                  </div>
                </div>

                {/* Script Assistant */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faFileAlt} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Script Assistant</h3>
                    <p>Draft high-quality scripts for your videos effortlessly with our AI script assistant.</p>
                  </div>
                </div>

                {/* Trend Analysis */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Trend Analysis</h3>
                    <p>Analyze the latest trends in your niche to create content that resonates with your audience.</p>
                  </div>
                </div>

                {/* Comment Insights */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faCommentDots} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Comment Insights</h3>
                    <p>Get insights on comments and feedback to understand what your audience loves about your content.</p>
                  </div>
                </div>

                {/* Instant Video Optimization */}
                <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                  <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                    <FontAwesomeIcon icon={faBolt} className="text-primary text-2xl mb-4" />
                    <h3 className="mb-2.5">Instant Video Optimization</h3>
                    <p>Optimize your videos instantly with AI-powered recommendations on titles, thumbnails, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




      </div>
    </div>
  )
}

export default page