import { SOCIAL } from './Footer_Menu';

export const Footer_Social = () => {
  return (
    <div className='grid place-items-center'>
      <IconSocial socialLinks={SOCIAL} />
    </div>
  );
};

export const IconSocial = ({ socialLinks }) => {
  return (
    <ul className='flex items-center'>
      {socialLinks.map((socialLink, index) => (
        <li key={index} className=''>
            <a target='_blank' href={socialLink.link} 
                className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300'>
                <socialLink.icon className="" />
            </a>
        </li>
      ))}
    </ul>
  );
};
