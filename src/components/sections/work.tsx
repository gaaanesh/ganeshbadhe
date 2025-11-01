import { PROJECTS } from '@/lib/data';
import ProjectDetails, { AllProjectDetails } from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

// Regular Work Section (for portfolio or homepage)
const WorkSection = () => {
  // You can limit to top 3 or 4 projects for homepage
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {featuredProjects.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

// All Work Section (for full projects page)
const AllWorkSection = () => {
  return (
    <Container id="all-work">
<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      {PROJECTS.map((project, index) => (
        <AllProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
      </div>
    </Container>
  );
};

export { WorkSection, AllWorkSection };
export default WorkSection;
