'use client';
import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Button from '@/components/general/button';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
          <div className='text-center'>
  <h3 className='text-center mb-2'>To know more about my experience</h3>
    <Button onClick={() => window?.open('/files/ganesh-badhe-cv.pdf', '_blank')}>
      Download CV
    </Button>
</div>
    </Container>
  );
};

export default ExperienceSection;

