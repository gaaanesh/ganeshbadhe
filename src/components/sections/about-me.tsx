import Image from 'next/image';

import SagarFullPose from '/public/images/ganeshbadhe-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Ganesh Badhe"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
           <Typography>
          I’m an AI-enabled, self-taught designer turned coder, passionate about crafting clean, modern interfaces that are both beautiful and intuitive. By integrating AI tools into my workflow, I accelerate ideation, streamline design, and deliver smarter, data-informed experiences for web and mobile.
          </Typography>
          <Typography>
          From wireframes to polished visuals, I specialize in turning ideas into pixel-perfect interfaces and seamless user journeys, always driven by detail, clarity, and purposeful interaction.
          </Typography>
           <Typography>
Over the years, Founding Product Designer at GreyAtom—led design of an online learning platform for software engineers; acqui-hired by Browserstack. Previously Sr. UI/UX Designer at Interactive Intelligence—shaped advanced software solutions. Early career as founding designer at Customer360.co (backed by CCAvenue & eBrandz)—acquired by Interactive Intelligence in 2015.
</Typography>
           <Typography>
I started freelancing because I love the variety—working across different industries, teaming up with all kinds of people, and tackling fresh challenges. It keeps my creativity sharp and helps me deliver designs that look beautiful and make a real impact for businesses.
</Typography>
         {/* <Typography>
             I&apos;m a passionate,{' '}
             <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
              self-proclaimed designer
            </Link>{' '} 
            

</Typography>*/}
          {/* <Typography>
            I&apos;m a self-taught designer turned coder, who learned by doing—a creative problem-solver with a deep knowledge of human behavior and a desire to create thoughtful digital experiences. I love solving messy, undefined problems by delving into user research, using design principles, and bringing ideas to life as intuitive, interactive interfaces.
          </Typography>
          <Typography>
            From wireframes to prototypes, and finally to finished designs, I love bringing products to life—whether web or mobile. My aim? To create things that not only are beautiful but are easy to use and allow businesses to flourish.
          </Typography> */}
          {/* <Typography>         
📚 I’ve also completed a User-Centered Design course from the Interaction Design Foundation (IDF), which helped me sharpen my research and user-first approach.
</Typography> */}
          {/* <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography> */}
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2"> 
            <div className="flex flex-col  md:gap-6 md:flex-row  gap-2">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Animation &amp; Web design
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">User centered design from IDF</Typography>
              <Typography component="li">Building digital products</Typography>
            </ul>
            </div>
            {/* <div className="flex flex-col gap-2 md:flex-row">
             <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Pursued undergraduate studies in commerce<br/><small>before transitioning to a career in design to focus on hands-on projects and development</small></Typography>
            </ul>
            </div> */}
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello. Always happy to chat about new ideas or projects!
            {/* I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉 */}
            
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
