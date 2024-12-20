import WidthXL from '@/wrapper/widths/WidthXL';
import TeamCard from './cards/TeamCard';

function TeamSection() {
  return (
    <div className="pb-14 sm:pb-24 px-5 sm:px-0">
      <WidthXL>
        <div className="bg-backgroundLight2 px-2 sm:px-7 py-5 sm:py-7 flex flex-col gap-10 items-center rounded-[20px]">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-poppins font-semibold text-4xl sm:text-[42px] text-gray-900 text-center">
              Meet Our Team
            </h2>
            <p className="font-lato font-medium text-sm sm:text-lg text-gray-800 text-center">
              We are young professionals with extensive experience in
              investments and finance, and we are investors ourselves. Our team
              comprises friends who have worked across diverse fields, including
              investment companies, leading banks, and the hospitality sector.
              This unique combination gives us a holistic understanding of both
              investments and investors, enabling us to offer tailored advice
              and solutions.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default TeamSection;
