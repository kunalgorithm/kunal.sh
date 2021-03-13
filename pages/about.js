import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Kunal Shah">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Kunal. I'm a developer and I love creating new and useful
            experiences on the web. &nbsp;Most recently, I've been working on
            building{' '}
            <a href="https://webform.so" target="_blank">
              Webform
            </a>
            .
          </p>

          <p>
            I grew up in Westchester, New York and went to school at Rice
            University, where I studied computer science. I spend my free time
            listening to EDM, reading, traveling (where safe to do so), and
            learning about things that interest me.
          </p>
        </div>

        {/* <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
          title="Lee's Travel Map"
          width="100%"
        /> */}
      </div>
    </Container>
  );
}
