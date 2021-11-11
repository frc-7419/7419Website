import React from 'react';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';


function Sponsors() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="relative">
        
          {/* Illustration behind content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
            <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="1630" cy="128" r="128" />
                <circle cx="178" cy="481" r="40" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Our Sponsors</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">Thank you for all your help along the way.</p>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 gap-14 max-w-sm md:max-w-4xl mx-auto gap-x-3 px-5 md:px-20">
                
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/googleLogo.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">Google is an American multinational technology company that specializes in Internet-related services and products. One of our industry mentors works at Google and we received $3500 in funding from Google this season.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row-reverse items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/nasa.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research. We received the NASA FRC grant this year totaling $4,000.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/notion-logo.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">The notion is a San Francisco based startup that produces an all-in-one workspace for note-taking, project, and task management. As one of our sponsors, Notion has provided us with a free-enterprise version of their software and invited us to their offices to give them feedback on their product.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row-reverse items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/solidworks.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">SOLIDWORKS is the leader in 3D CAD technology, empowering product design teams with intuitive, high-performance software that is easy to use, and provides the freedom to design products that set you apart. They’ve provided us with free software licenses for our team and we’ve used Solidworks to CAD our full robot assembly.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/FIRSTlogo.jpg').default} alt="apple-logo.png" /></div><div className="md:w-1/2">We consider FIRST a community partner as we have volunteered at and hosted FIRST events as a team. We believe in the FIRST mission and are thankful for everything we have gained from FIRST programs.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row-reverse items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/limelight.jpg').default} alt="apple-logo.png" /></div><div className="md:w-1/2">Limelight is a Nevada-based company that makes easy-to-use smart cameras specifically for FRC. Our team reached out to them to inquire about the newer version of their camera, and they offered to let us beta test their system. We provided them with feedback on their UI and were given a free camera for our team.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/Brin-Wojcicki-logo.jpg').default} alt="apple-logo.png" /></div><div className="md:w-1/2">The Brin Wojcicki Foundation is led by Google co-founder Sergey Brin and Anne Wojcicki. Much of their grantmaking takes place in the Bay Area, with health (Parkinson's research), education, and poverty being high priorities. We received a $2500 FRC grant from the foundation.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row-reverse items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/apple-logo.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. We are proud to have received the $6000 Apple FRC grant this season and to work with two technical mentors with Apple experience.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/TECO.png').default} alt="apple-logo.png" /></div><div className="md:w-1/2">Teco Pneumatic is a full-line supplier of pneumatic, automation and hydraulic group products since 1937. They are a local supplier of 8020 framings, and their engineers helped us design our future battery cart and pit area.</div></div>
                <div className="sponsor rounded-xl shadow-xl p-8 gap-14 text-gray-600 flex flex-col md:flex-row-reverse items-center justify-center md:col-auto"><div className="md:w-1/2 content-center"><img src={require('../../images/sponsors/steel.jpeg').default} alt="apple-logo.png" /></div><div className="md:w-1/2">Pleasanton Steel and Supply with retail steel sales, custom fabrication, and repair services. They have provided us with free and discounted stock material and shown us their fabrication facilities.</div></div>

              </div>

              {/* Testimonials */}
              {/* <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
                <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                  <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                      <img className="relative rounded-full" src={require('../../images/testimonial.jpg').default} width="96" height="96" alt="Testimonial 01" />
                    </div>
                    <blockquote className="text-xl font-medium mb-4">
                      “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                    <div className="text-gray-600">
                      <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                    </div>
                  </div>

                </div>
              </div> */}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Sponsors;