import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="ml-6 mr-6 md:ml-12 md:mr-12 sm:ml-2 sm:mr-2 flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/a1.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Amresh Yadav, a passionate software developer with a strong background in competitive programming and problem-solving. With over xyz+ solved questions on LeetCode and a 1850+ rating, I have honed my skills in algorithms and data structures to a great extent.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                I love to take on new challenges and push my limits in the world of programming. My journey has been filled with continuous learning, and I aim to contribute back to the coding community by sharing my experiences and insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="ml-6 mr-6 md:ml-12 md:mr-12 sm:ml-2 sm:mr-2 py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Amresh's Coding Journey</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From solving his first problem to achieving a high rating in competitive programming, here's Amresh's journey in tech.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/beginner.avif" alt="Amresh as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Beginning</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Amresh started his programming journey in school, initially solving simple coding problems. Over time, he developed a deep passion for competitive programming and problem-solving.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/cp.avif" alt="Amresh in competitive programming" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Mastering Competitive Programming</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With a deep understanding of algorithms and data structures, Amresh has excelled in platforms like LeetCode and CodeChef, achieving remarkable ratings and honing his skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/project.avif" alt="Amresh working on projects" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Building Real-World Projects</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Apart from competitive coding, Amresh has worked on several real-world projects, applying his knowledge to solve practical problems and improve his development skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/guide.avif" alt="Amresh mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Guiding Others</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Amresh actively helps and mentors aspiring coders, providing guidance on competitive programming and software development. His goal is to uplift the coding community through shared learning and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
