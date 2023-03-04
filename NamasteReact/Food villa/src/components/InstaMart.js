import { useState } from 'react';

const Section = ({ title, description, isVisible, setVisibleSection }) => {
  return (
    <div className='border border-black p-2 m-2'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <button
        className={`${
          isVisible ? 'bg-red-500' : 'bg-green-400'
        } px-2 py-1 rounded-xl`}
        onClick={() => {
          setVisibleSection();
        }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState('about');

  return (
    <div className='px-24  pt-24'>
      <h1 className='text-3xl font-bold'>InstaMart</h1>
      <Section
        title={'About InstaMart'}
        description={'This is the about section of InstaMart'}
        isVisible={visibleSection === 'about'}
        setVisibleSection={() =>
          setVisibleSection(`${visibleSection === 'about' ? '' : 'about'}`)
        }
      />
      <Section
        title={'Team InstaMart'}
        description={
          'This is the team section of InstaMart. The team has 50 members....'
        }
        isVisible={visibleSection === 'team'}
        setVisibleSection={() =>
          setVisibleSection(`${visibleSection === 'team' ? '' : 'team'}`)
        }
      />
      <Section
        title={'Careers InstaMart'}
        description={
          'This is the Careers section of InstaMart. The team has 50 members....'
        }
        isVisible={visibleSection === 'careers'}
        setVisibleSection={() =>
          setVisibleSection(`${visibleSection === 'careers' ? '' : 'careers'}`)
        }
      />
    </div>
  );
};

export default InstaMart;
