import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 md:flex-row p-8 md:gap-8">
      <div className="md:w-1/6">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[120px]"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-5/6">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className='flex flex-col gap-4 md:w-4/6 max-md:order-2'>
            <Typography variant="subtitle" className="font-semibold text-gray-900">
              {position}
            </Typography>
          </div>
          <div className="max-md:order-1 md:w-2/6">
            <Typography className="text-gray-700 md:text-right">
              {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                startDate
              )}{' '}
              -{' '}
              {currentlyWorkHere
                ? 'Present'
                : endDate
                  ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                    endDate
                  )
                  : 'NA'}
            </Typography>
          </div>
        </div>


        <div className="flex flex-col gap-4">
          <ul className="flex list-disc flex-col gap-2 md:gap-1">
            {summary?.map((sentence, index) => (
              <Typography component="li" key={index}>
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </Card>

  );
};

export default ExperienceDetails;
