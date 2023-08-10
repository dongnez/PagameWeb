import { HTMLAttributes } from 'react';
// import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Importa los íconos de FaGooglePlay y FaApple desde react-icons/fa


interface DownloadButtonProps {
  device: 'android' | 'ios';
}

const DownloadButton = ({ device, className, ...rest}:HTMLAttributes<HTMLButtonElement> & DownloadButtonProps) => {
  const isAndroid = device === 'android';

  const handleClick = () => {
    if (isAndroid) {
      console.log('ENLACE DE ANDROID');
    } else {
      console.log('ENLACE DE APPLE');
    }
  };

  return (
    <button
        {...rest}
        className={`bg-white rounded-full py-2 px-3 flex items-center text-black w-full justify-center transition-transform hover:scale-110 gap-1
        ${className}`}
      onClick={handleClick}
    >
      {/* {isAndroid ? <FaGooglePlay className="mr-2" size={20} /> : <FaApple className="mr-2" size={20}/>} */}
      Download for <span className='uppercase'>{device}</span>
    </button>
  );
};

export default DownloadButton;


