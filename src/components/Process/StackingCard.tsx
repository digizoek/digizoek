'use client';
import { ReactLenis } from 'lenis/dist/lenis-react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import MainHeading from '@/components/Headings/MainHeading';
const projects = [
  {
    title: 'Ideate',
    description:
      'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
    // link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    // color: '#dec4b9',
    color: '#B9D9DE',
    link: "/images/process/ideate.jpg",
    index: "01"
  },
  {
    title: 'Design',
    description:
      'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
    // link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#ffbeda',
    link: "/images/process/design.jpg",
    index: "02"
  },
  {
    title: 'Develop',
    description:
      'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.',
    // link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    // color: '#13006c',
    color: '#FFFE59',
    link: "/images/process/develop.jpg",
    index: "03"
  },
  {
    title: 'QA & Test',
    description:
      'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.',
    // link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#fffbc9',
    link: "/images/process/test.jpg",
    index: "04"
  },
  {
    title: 'Launch',
    description:
      'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.',
    // link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#b5f3d6',
    link: "/images/process/launch.jpg",
    index: "05"
  },
  {
    title: 'Support',
    description:
      'Providing ongoing support and enhancements to ensure continued product success.',
    // link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#ffc8a7',
    link: "/images/process/support.jpg",
    index: "05"
  },
];

export default function index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <>
        <section className='hidden text-white justify-center absolute md:flex  h-[20vh]  w-full bg-[#13192a]  '>
            
            <MainHeading
              mainText="Digi Zoek"
              highlightText="Development"
              subText="Process."
              buttonText="Book a Meeting"
              fontWeight="bold"
              primaryColor='text-white'
              secondaryColor='text-[#006bff]'
              width = 'w-[70vw]' 
            />
            
          </section>
          
          <section className=' mt-[7%] md:hidden text-white justify-center absolute flex  w-full bg-[#13192a]  '>
            
            <MainHeading
              mainText="DigiZoek"
              highlightText="Work"
              subText="Process."
              buttonText="Book a Meeting"
              fontWeight="bold"
              primaryColor='text-white'
              secondaryColor='text-[#006bff]'
              width = 'w-[70vw]' 
            />
            
          </section>
        </>

        <section className='text-white   w-full bg-[#13192a]  '>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i+1}
                url={project?.link}
                // src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  // src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  // src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] md:w-[50%] w-[80%] rounded-md md:p-10 p-[8%] origin-top`}
      >
        
        <div className={`flex w-full h-full md:justify-between md:mt-5 md:gap-10`}>
          <div className={`md:w-[40%] w-[90%] relative md:top-[10%]`}>

          <p className="text-blue-600 font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">
            {"0" + i}
          </p>
          <b className="font-bold text-theme text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[60px] 2xl:!leading-[75px] text-blue-500">
            {title}
          </b>
          <p className="mt-7 mb-10 leading-9  text-blue-500 font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
            {description}
          </p>
            
          </div>

          <div
            className={`relative md:w-[40%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full hidden md:block`}
              style={{ scale: imageScale }}
            >
              <Image fill src={url} alt='image' className='object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};