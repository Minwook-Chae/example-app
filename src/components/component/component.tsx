/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/N5X9RgOFcrp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Image from "next/image";

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Component() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Streamline Your Software Delivery with CI/CD
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover how Continuous Integration and Continuous Deployment
                  can transform your software development process.
                </p>
              </div>
            </div>
            <Image
              alt="CI/CD Illustration"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Benefits of CI/CD
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Adopt CI/CD?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              CI/CD streamlines your software delivery process, enabling faster
              releases, improved quality, and reduced risk.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Faster Releases</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Automate your build, test, and deployment processes to
                      deliver updates more frequently.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Improved Quality</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Catch bugs early and ensure code quality with automated
                      testing.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Reduced Risk</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Minimize manual errors and rollback issues with a
                      streamlined deployment process.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              alt="CI/CD Benefits"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Steps in CI/CD
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The CI/CD Workflow
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Understand the core steps involved in implementing a successful
              CI/CD pipeline.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Continuous Integration
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Automatically build, test, and merge code changes into a
                      shared repository.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Continuous Testing</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Implement automated testing to ensure code quality and
                      functionality.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Continuous Deployment</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Automatically deploy approved changes to production
                      environments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              alt="CI/CD Workflow"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Popular CI/CD Tools
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Streamline Your Workflow
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore some of the leading tools that can help you implement a
              robust CI/CD pipeline.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">GitHub Actions</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Automate your software workflows with GitHub&apos;s
                      built-in CI/CD platform.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Jenkins</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A popular open-source automation server for building,
                      testing, and deploying applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">CircleCI</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A cloud-based CI/CD platform that helps you automate your
                      software build, test, and deploy processes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              alt="CI/CD Tools"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
